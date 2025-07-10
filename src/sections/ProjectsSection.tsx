import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container flex flex-col md:px-16 px-6 min-h-screen gap-6 py-10"
    >
      <div className="md:mt-20 mt-16 flex flex-col justify-center items-center md:px-10 gap-2">
        <h1 className="font-bold text-2xl">Projects</h1>
        <p className="text-center text-xs md:text-base">
          Here are some apps and side projects I've built, mostly focused on
          mobile development. Each one taught me something new.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
