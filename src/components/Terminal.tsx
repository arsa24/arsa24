import { TypeAnimation } from "react-type-animation";
import WindowControls from "./WindowControls";

export default function Terminal() {
  return (
    <div className="w-full bg-latte-mantle dark:bg-mocha-mantle h-[260px] md:h-[360px] rounded-2xl flex flex-col">
      <div className="flex justify-between dark:bg-mocha-crust bg-latte-crust pt-2 px-4 rounded-t-2xl">
        <div className="border-b-2 border-latte-text dark:border-mocha-text pb-2 px-4">
          <p>root@terminal</p>
        </div>
        <div className="flex gap-2 items-end justify-center pb-4">
          <WindowControls />
        </div>
      </div>
      <div className="p-3 h-full rounded-b-2xl overflow-y-auto no-scrollbar">
        <div className="mb-2">
          <div className="flex gap-2 items-center">
            <p>~ $</p>
            <TypeAnimation
              sequence={[
                3000,
                "Hello",
                1000,
                "My name is Arij",
                1000,
                "I'm a mobile developer",
                1000,
                "I love coding",
                1000,
                "Welcome to my portfolio!",
                1000,
                "Feel free to explore",
                1000,
                "Let's connect!",
                1000,
                "Thank you for visiting",
                1000,
                "Have a great day!",
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-latte-text dark:text-mocha-text font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
