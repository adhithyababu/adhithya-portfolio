import { usePortfolio } from './hooks/usePortfolio';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const { profile, skills, projects } = usePortfolio();

  return (
    <>
      <Navbar />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection profile={profile} />
      <Footer />
    </>
  );
}
