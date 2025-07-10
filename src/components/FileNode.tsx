import {
  ChevronRight,
  ChevronDown,
  FolderClosed,
  FolderOpen,
  File,
} from "lucide-react";
import { useState } from "react";

export type FileTree = {
  name: string;
  type: "file" | "folder";
  children?: FileTree[];
};

export default function FileNode({
  node,
  onFileClick,
}: {
  node: FileTree;
  onFileClick?: (fileName: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const isFolder = node.type === "folder";

  return (
    <div className="pl-2">
      <div className="py-2">
        <div
          className="flex gap-2 items-center cursor-pointer hover:text-latte-mauve hover:dark:text-mocha-mauve"
          onClick={() => {
            if (isFolder) setOpen(!open);
            else onFileClick?.(node.name);
          }}
        >
          {isFolder ? (
            open ? (
              <>
                <ChevronDown /> <FolderOpen />
              </>
            ) : (
              <>
                <ChevronRight />
                <FolderClosed />
              </>
            )
          ) : (
            <File />
          )}
          <p>{node.name}</p>
        </div>
      </div>
      {isFolder && open && node.children && (
        <div className="ml-4">
          {node.children.map((e, i) => (
            <FileNode key={i} node={e} onFileClick={onFileClick} />
          ))}
        </div>
      )}
    </div>
  );
}
