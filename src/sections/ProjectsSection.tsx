import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container flex md:px-16 px-6 md:min-h-screen"
    >
      <div className="md:mt-20 mt-16">
        <h1 className="font-bold text-2xl">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          maiores, quae ut distinctio nam deserunt expedita molestias numquam
          praesentium, vitae cumque eos similique illum iste doloremque
          possimus, inventore quasi velit.
        </p>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
}
