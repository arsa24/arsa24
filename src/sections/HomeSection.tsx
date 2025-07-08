import { Download, FolderGit } from "lucide-react";

import Terminal from "../components/Terminal";
export default function HomeSection() {
  return (
    <section
      id="home"
      className="container grid md:grid-cols-2 items-center justify-center gap-12 md:px-16 px-6 md:h-screen mt-20 md:mt-0"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl font-semibold">
            <span>Hi, i'm</span>{" "}
            <span className="font-bold bg-gradient-to-r dark:from-mocha-mauve dark:via-mocha-lavender dark:to-mocha-peach from-latte-mauve via-latte-lavender to-latte-peach bg-clip-text text-transparent">
              Arij Sahmawan,
            </span>
            <br />
            Mobile Developer
          </h1>
          <p className="text-sm md:text-lg font-semibold dark:text-mocha-subtext1 text-latte-subtext1">
            Passionate about mobile development. Focused on real-world projects
            and continuous learning.
          </p>
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <a
            href="#projects"
            className="flex items-center justify-center rounded-lg dark:bg-mocha-mauve bg-latte-mauve px-4 md:px-6 py-2 gap-3 font-semibold text-sm dark:text-mocha-surface0 text-latte-surface0"
          >
            <FolderGit className="md:w-6 md:h-6 w-5 h-5" />
            Portfolio
          </a>
          <a
            href="#"
            className="flex items-center justify-center rounded-md px-4 md:px-6 py-2 gap-3 font-semibold text-sm"
          >
            <Download className="md:w-6 md:h-6 w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
      <Terminal />
    </section>
  );
}
