import { House, Info, Folder, UserCircle2 } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection";

export default function BottomNavbar() {
  const active = useActiveSection();

  const navItems = [
    { id: "home", icon: <House className="w-5 h-5" />, label: "Home" },
    { id: "about", icon: <Info className="w-5 h-5" />, label: "About" },
    { id: "projects", icon: <Folder className="w-5 h-5" />, label: "Projects" },
    {
      id: "contacts",
      icon: <UserCircle2 className="w-5 h-5" />,
      label: "Contacts",
    },
  ];

  return (
    <div className="fixed bottom-0 mb-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 bottom-nav px-6 py-3 rounded-2xl dark:bg-mocha-mantle bg-latte-mantle border-latte-overlay0 dark:border-mocha-overlay0 shadow-sm dark:shadow-mocha-overlay0/25 shadow-latte-overlay0/25">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`flex items-center text-sm justify-center gap-4 cursor-pointer transition-all duration-300 ${
            active === item.id
              ? "text-latte-mauve dark:text-mocha-mauve"
              : "text-latte-subtext0 dark:text-mocha-subtext0"
          }`}
        >
          {item.icon}
          <p className={`${active === item.id ? "block" : "hidden"}`}>
            {item.label}
          </p>
        </a>
      ))}
    </div>
  );
}
