import HeroSection from "@/components/HeroSection";
import SideNav from "@/components/SideNav";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CreativePractice from "@/components/CreativePractice";
import PublicationsSection from "@/components/PublicationsSection";
import EducationExperience from "@/components/EducationExperience";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SideNav />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <CreativePractice />
      <PublicationsSection />
      <EducationExperience />
      <ContactSection />
    </main>
  );
};

export default Index;
