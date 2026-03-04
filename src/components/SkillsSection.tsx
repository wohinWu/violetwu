import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Portrait Photography", level: 95 },
  { name: "Documentary", level: 90 },
  { name: "Street Photography", level: 85 },
  { name: "Post-Production", level: 88 },
  { name: "Lighting Design", level: 92 },
  { name: "Art Direction", level: 80 },
];

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          Craftsmanship & Expertise
        </h2>
        <div className="grid gap-6">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.1}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-body text-foreground">{skill.name}</span>
                <span className="text-xs font-body text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
