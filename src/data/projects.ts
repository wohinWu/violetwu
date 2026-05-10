export interface ProjectData {
  id: string;
  thumbnail?: string;
  tags: string[];
  links: {
    type: "paper" | "demo" | "github" | "external";
    url: string;
    labelKey: string;
  }[];
  detail: {
    images: string[];
  };
}

export const featuredProjects: ProjectData[] = [
  {
    id: "gamified-collaboration",
    tags: ["Human-AI Collaboration", "LLM", "Gamification", "User Research"],
    links: [],
    detail: {
      images: [],
    },
  },
  {
    id: "creative-understanding",
    tags: ["Multimodal AI", "MLLM", "Creativity", "Benchmark"],
    links: [
      { type: "paper", url: "#", labelKey: "common.paper" },
    ],
    detail: {
      images: [],
    },
  },
  {
    id: "preference-optimization",
    tags: ["Text-to-Image", "Preference Learning", "Generative AI"],
    links: [
      { type: "paper", url: "#", labelKey: "common.paper" },
      { type: "demo", url: "#", labelKey: "common.demo" },
    ],
    detail: {
      images: [],
    },
  },
];

export const projectIds = featuredProjects.map((p) => p.id);
