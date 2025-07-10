import useDarkMode from "../hooks/useDarkMode";
import BottomBarItem from "./BottomBarItem";
import StatusBarFile from "./StatusBarFile";
import WindowControls from "./WindowControls";
import { GitBranch, Menu } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { FileTree } from "./FileNode";
import FileNode from "./FileNode";
import { useState } from "react";
import { about_me, main_rs } from "../assets/about";

interface StatusBarFileType {
  fileName: string;
  active: boolean;
  open: boolean;
}

export default function CodeEditor() {
  const { isDarkMode } = useDarkMode();

  const [activeStatusBarFile, setActiveStatusBarFile] = useState<
    StatusBarFileType[]
  >([{ active: true, fileName: "main.rs", open: true }, { active: false, fileName: "about_me.rs", open: true }]);

  const fileTree: FileTree[] = [
    {
      name: "about",
      type: "folder",
      children: [
        {
          name: "src",
          type: "folder",
          children: [
            {
              name: "about_me.rs",
              type: "file",
            },
            {
              name: "main.rs",
              type: "file",
            },
          ],
        },
      ],
    },
  ];

  const handleOpenFile = (fileName: string) => {
    setActiveStatusBarFile((prev) => {
      const isOpen = prev.some((f) => f.fileName === fileName);

      if (isOpen) {
        return prev.map((f) => ({
          ...f,
          active: f.fileName === fileName,
        }));
      }

      return [
        ...prev.map((f) => ({ ...f, active: false })),
        { fileName, active: true, open: true },
      ];
    });
  };

  const handleCloseFile = (fileName: string) => {
    setActiveStatusBarFile((prev) => {
      const remaining = prev.filter((f) => f.fileName !== fileName);
      if (!remaining.length) return [];
      if (prev.find((f) => f.fileName === fileName)?.active) {
        remaining[remaining.length - 1].active = true;
      }
      return remaining;
    });
  };

  const activeFile = activeStatusBarFile.find((f) => f.active);

  return (
    <div className="h-[70vh] md:h-[75vh] bg-latte-mantle dark:bg-mocha-mantle flex flex-col rounded-xl">
      <div className="flex-grow grid grid-cols-5 overflow-hidden">
        <div className="hidden md:col-span-1 md:flex items-start justify-start flex-col">
          {fileTree.map((e, i) => (
            <FileNode key={i} node={e} onFileClick={handleOpenFile} />
          ))}
        </div>
        <div className="col-span-5 md:col-span-4 flex flex-col dark:bg-mocha-crust bg-latte-crust overflow-hidden rounded-tr-xl rounded-tl-xl md:rounded-tl-none">
          <div className="flex justify-between items-center bg-latte-mantle dark:bg-mocha-mantle">
            <div className="p-2 dark:bg-mocha-crust bg-latte-crust md:hidden block">
              <Menu />
            </div>
            <div className="flex overflow-x-auto">
              {activeStatusBarFile.map((e, i) => (
                <StatusBarFile
                  fileName={e.fileName}
                  active={e.active}
                  key={i}
                  onClick={() => handleOpenFile(e.fileName)}
                  onClose={() => handleCloseFile(e.fileName)}
                />
              ))}
            </div>
            <div className="flex gap-2 px-4 py-2">
              <WindowControls />
            </div>
          </div>
          <div className="overflow-y-auto flex-grow text-xs md:text-base">
            <SyntaxHighlighter
              language="rust"
              showLineNumbers
              style={isDarkMode ? atomOneDark : atomOneLight}
              customStyle={{
                backgroundColor: "transparent",
                padding: "1rem",
              }}
              codeTagProps={{
                style: {
                  backgroundColor: "transparent",
                },
              }}
              wrapLines
              wrapLongLines
            >
              {activeFile?.fileName === "main.rs" ? main_rs : about_me}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <BottomBarItem
            icon="rust"
            name="main.rs"
            roundedbl={true}
            color="blue"
          />
          <div className="flex gap-4 items-center">
            <GitBranch className="w-4" />
            <p className="text-xs ">main</p>
          </div>
        </div>
        <div className="md:flex hidden">
          <BottomBarItem icon="folder" name="about_me" color="red" />
          <BottomBarItem
            icon="code"
            name="Rust"
            color="green"
            roundedbr={true}
          />
        </div>
      </div>
    </div>
  );
}
