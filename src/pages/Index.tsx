import HeroSection from "@/components/HeroSection";
import SideNav from "@/components/SideNav";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import WritingSection from "@/components/WritingSection";
import SpeakingSection from "@/components/SpeakingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SideNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <WritingSection />
      <SpeakingSection />
      <ContactSection />
    </main>
  );
};

export default Index;
