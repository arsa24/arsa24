import IconSerika from "../assets/icon_serika.svg";
import useDarkMode from "../hooks/useDarkMode";
import NavTopWrapper from "./NavTopWrapper";
import { Sun, Calendar, MapPin, Power, Mars, Code, Moon } from "lucide-react";

export default function TopNavbar() {
  const info = [
    {
      text: "Indonesia",
      icon: <MapPin className="w-4 h-4" />,
      color: "text-latte-blue dark:text-mocha-blue",
    },
    {
      text: "He/Him",
      icon: <Mars className="w-4 h-4" />,
      color: "text-latte-flamingo dark:text-mocha-flamingo",
    },
    {
      text: "18 Y'O",
      icon: <Calendar className="w-4 h-4" />,
      color: "text-latte-green dark:text-mocha-green",
    },
    {
      text: "Mobile Dev",
      icon: <Code className="w-4 h-4" />,
      color: "text-latte-peach dark:text-mocha-peach",
    },
  ];

  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <header className="w-full fixed z-50 flex justify-between items-center px-6 py-2 md:px-16 md:py-3 dark:bg-mocha-mantle bg-latte-mantle top-0 text-sm">
      <div className="flex gap-6">
        <div className="flex gap-2 items-center">
          <img src={IconSerika} alt="wife" className="w-7 h-7" />
          <h1 className="font-bold md:text-base text-sm">Arsa.</h1>
        </div>
      </div>
      <span className="hidden md:block">
      <NavTopWrapper
        contents={info.map((item, index) => (
          <div
          className={`flex items-center justify-center gap-2 ${item.color} text-sm`}
          key={index}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      />
        </span>
      <NavTopWrapper
        contents={[
          isDarkMode ? (
            <button
              onClick={toggleDarkMode}
              className="dark:text-mocha-yellow text-latte-yellow hover:dark:text-mocha-yellow/70 hover:text-latte-yellow/70 cursor-pointer"
            >
              <Sun className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={toggleDarkMode}
              className="dark:text-mocha-yellow text-latte-yellow cursor-pointer hover:dark:text-mocha-yellow/70 hover:text-latte-yellow/70"
            >
              <Moon className="w-4 h-4" />
            </button>
          ),
          <div className="dark:text-mocha-red text-latte-red hover:dark:text-mocha-red/70 hover:text-latte-red/70 cursor-pointer">
            <Power className="w-4 h-4" />
          </div>,
        ]}
      />
    </header>
  );
}
