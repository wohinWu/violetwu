import AnimatedSection from "./AnimatedSection";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const works = [
  { src: work1, title: "Shadows & Light", category: "Portrait" },
  { src: work2, title: "Neon Dreams", category: "Street" },
  { src: work3, title: "Golden Hour", category: "Landscape" },
  { src: work4, title: "Intimate Gaze", category: "Portrait" },
  { src: work5, title: "Market Stories", category: "Documentary" },
  { src: work6, title: "Geometry of Space", category: "Architecture" },
];

const WorkSection = () => {
  return (
    <AnimatedSection id="work" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">Work</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <AnimatedSection key={work.title} delay={i * 0.15}>
              <div className="group relative overflow-hidden cursor-pointer">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full aspect-[4/5] object-cover grayscale-hover"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-primary">{work.category}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">{work.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WorkSection;
