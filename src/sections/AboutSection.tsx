import CodeEditor from "../components/CodeEditor";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container grid grid-cols-1 items-center justify-center md:gap-12 px-6 md:px-16 min-h-screen"
    >
      <CodeEditor />
    </section>
  );
}
