import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">About</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-8">
          Capturing moments that tell stories beyond words.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            With over a decade of experience behind the lens, I specialize in documentary and portrait photography that reveals the extraordinary in everyday life. My work has been featured in international exhibitions and publications.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            Based in Shanghai, I travel globally to capture stories that matter. My approach combines cinematic composition with raw authenticity, creating images that resonate on a deeply human level.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
