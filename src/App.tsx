import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactsSection from "./sections/ContactsSection";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="w-full scroll-smooth min-h-screen dark:bg-mocha-base bg-latte-base text-latte-text dark:text-mocha-text">
      <TopNavbar />
      <div className="min-h-screen flex flex-col items-center">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
        <Footer />
      </div>
      <BottomNavbar />
    </main>
  );
}
