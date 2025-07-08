import React from "react";

export default function NavTopWrapper({
  contents = [],
}: {
  contents?: React.ReactNode[];
}) {
  return (
    <div className="flex items-center justify-center gap-4 px-4 py-2 rounded-2xl dark:bg-mocha-surface0 bg-latte-surface0">
      {contents.map((content, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-4 cursor-pointer"
        >
          {content}
        </div>
      ))}
    </div>
  );
}
