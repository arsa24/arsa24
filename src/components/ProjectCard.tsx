import ExampleImage from "../assets/wife.png";

export default function ProjectCard() {
  return (
    <div className="dark:bg-mocha-mantle bg-latte-mantle p-5 flex flex-col gap-4 rounded-xl">
      <div>
        <img src={ExampleImage} alt="" className="bg-cover rounded-md" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">N/A</h2>
          <p className="text-xs">N/A</p>
        </div>
        <div className="flex bg-latte-surface0 dark:bg-mocha-surface0 justify-center rounded-md hover:dark:bg-mocha-mauve hover:bg-latte-mauve hover:text-latte-surface0 hover:dark:text-mocha-surface0">
          <a href="#" className="flex gap-2 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
}
