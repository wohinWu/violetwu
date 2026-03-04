import AnimatedSection from "./AnimatedSection";
import { MapPin, Calendar } from "lucide-react";

const talks = [
  {
    title: "Visual Narratives: Photography as Testimony",
    event: "TEDx Shanghai",
    date: "March 2024",
    location: "Shanghai, China",
  },
  {
    title: "The Ethics of Documentary Photography",
    event: "World Press Photo Festival",
    date: "November 2023",
    location: "Amsterdam, Netherlands",
  },
  {
    title: "From Street to Gallery: Bridging Commercial and Fine Art",
    event: "Photo London",
    date: "May 2023",
    location: "London, UK",
  },
];

const SpeakingSection = () => {
  return (
    <AnimatedSection id="speaking" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">Speaking</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          Talks & Events
        </h2>
        <div className="grid gap-6">
          {talks.map((talk, i) => (
            <AnimatedSection key={talk.title} delay={i * 0.12}>
              <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg font-semibold">{talk.title}</h3>
                <p className="text-sm font-body text-primary mt-1">{talk.event}</p>
                <div className="flex gap-4 mt-3 text-xs font-body text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {talk.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {talk.location}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SpeakingSection;
