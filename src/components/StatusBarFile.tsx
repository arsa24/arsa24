// StatusBarFile.tsx
import { X } from "lucide-react";

export default function StatusBarFile({
  fileName,
  active,
  onClick,
  onClose,
}: {
  fileName: string;
  active: boolean;
  onClick?: () => void;
  onClose?: () => void;
}) {
  return (
    <div
      className={`px-4 py-2 flex items-center gap-2 cursor-pointer ${
        active
          ? "bg-mocha-crust text-mocha-text"
          : "bg-transparent hover:bg-mocha-surface"
      }`}
      onClick={onClick}
    >
      <p className="text-xs">{fileName}</p>
      <X
        size={12}
        className="hover:text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
      />
    </div>
  );
}
