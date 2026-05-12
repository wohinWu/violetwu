export default {
  // Common
  common: {
    viewCaseStudy: "View Case Study",
    paper: "Paper",
    demo: "Demo",
    github: "GitHub",
    external: "Link",
    backToHome: "Back to Home",
    viewAll: "View All",
  },

  // Hero
  hero: {
    name: "Wei Wu",
    tagline: "AI × Product × Creative Technology",
    subtitle:
      "I design and prototype AI systems that connect multimodal intelligence, human-AI collaboration, and creative expression.",
    ctaProjects: "View Projects",
    ctaCV: "Download CV",
    ctaContact: "Contact Me",
    heroAlt: "Wei Wu personal website hero",
  },

  // Navigation
  nav: {
    about: "About",
    projects: "Projects",
    creative: "Creative",
    publications: "Publications",
    education: "Education",
    contact: "Contact",
  },

  // About
  about: {
    label: "About",
    title: "Connecting artificial intelligence, interaction, and visual creativity.",
    para1:
      "I am pursuing a master of philosophy degree in Artificial Intelligence at HKUST(GZ) with a Red Bird full scholarship. I hold a BSc in Computer Science and Technology from BNU-HKBU United International College, with a minor in Art and Design.",
    para2:
      "My work focuses on creative understanding in multimodal large models, human-AI collaboration, and controllable generation systems. I also build games and visual design projects, turning research questions into interactive prototypes.",
    capabilities: {
      aiResearch: {
        title: "AI Research",
        description:
          "Multimodal large models, creative understanding benchmarks, human-LLM collaboration, and preference-driven generation.",
      },
      productPrototyping: {
        title: "Product & Interaction Prototyping",
        description:
          "User research, rapid prototyping with Python/Unity/Web, turning research insights into usable interactive systems.",
      },
      creativeDesign: {
        title: "Creative Technology & Visual Design",
        description:
          "Generative AI tools, game development, graphic design systems, data-driven art installations, and photography.",
      },
    },
  },

  // Featured Projects
  featuredProjects: {
    label: "Featured Projects",
    title: "Selected Work",
    items: {
      "gamified-collaboration": {
        title: "Gamified Human-AI Collaboration System",
        category: "Human-LLM Collaboration",
        summary:
          "A gamification framework that incentivizes effective human-LLM collaboration patterns through game mechanics and behavioral nudges.",
      },
      "creative-understanding": {
        title: "Modeling Creative Understanding in MLLMs",
        category: "Multimodal AI",
        summary:
          "Benchmarking and improving how multimodal large language models perceive and reason about creative visual content.",
      },
      "preference-optimization": {
        title: "Preference-driven Text-to-Image Optimization",
        category: "Generative AI",
        summary:
          "Steering text-to-image models toward user aesthetic preferences through prompt optimization and preference learning.",
      },
    },
  },

  // Project Detail
  projectDetail: {
    overview: "Overview",
    myRole: "My Role",
    problem: "Problem",
    process: "Process",
    solution: "System / Solution",
    outcome: "Outcome",
    reflection: "Reflection",
    gallery: "Gallery",
    externalLinks: "External Links",
    items: {
      "gamified-collaboration": {
        overview:
          "This project explores how gamification mechanics can be integrated into human-LLM collaboration workflows to improve engagement, output quality, and user satisfaction.",
        myRole: "Lead researcher and system designer. Conducted user interviews, designed the gamification framework, built the prototype, and ran evaluation studies.",
        problem:
          "Current human-LLM collaboration tools lack structured incentives for users to develop effective collaboration patterns, leading to superficial interactions and underutilization of LLM capabilities.",
        process:
          "Started with semi-structured interviews of 10 heavy LLM users to understand collaboration workflows. Identified pain points and behavior patterns through thematic analysis. Designed gamification mechanics informed by self-determination theory.",
        solution:
          "A framework that layers game mechanics (progress tracking, challenges, feedback loops) onto LLM collaboration interfaces. The system nudges users toward more effective prompting strategies and deeper collaboration patterns.",
        outcome:
          "User studies showed improved collaboration depth and user engagement compared to baseline interfaces. The framework provides actionable design guidelines for human-AI collaboration tools.",
        reflection:
          "This project reinforced my belief that good AI product design is not just about model capability—it is equally about shaping user behavior and creating the right interaction incentives.",
      },
      "creative-understanding": {
        overview:
          "This research investigates how well multimodal large language models understand creative visual content, proposing new evaluation benchmarks and improvement methods.",
        myRole: "Primary researcher. Designed the benchmark, curated the dataset, conducted experiments, and wrote the paper.",
        problem:
          "Existing MLLM benchmarks focus on factual recognition and reasoning, but overlook creative dimensions such as aesthetic quality, stylistic intent, and compositional creativity.",
        process:
          "Surveyed existing creativity assessment literature across psychology and design fields. Defined a multi-dimensional creative understanding framework. Curated a dataset spanning photography, painting, and design works.",
        solution:
          "A structured benchmark that evaluates MLLMs across multiple creative dimensions. Includes both automated metrics and human evaluation protocols to assess creative perception capabilities.",
        outcome:
          "Revealed significant gaps in current MLLMs' creative understanding abilities. The benchmark provides a foundation for future research on improving creative AI systems.",
        reflection:
          "Working at the intersection of AI evaluation and creativity taught me that measuring creative intelligence requires fundamentally different approaches from measuring factual knowledge.",
      },
      "preference-optimization": {
        overview:
          "This project develops methods to steer text-to-image generation models toward user-specific aesthetic preferences through preference-based prompt optimization.",
        myRole: "Primary researcher and developer. Designed the optimization pipeline, implemented the system, conducted experiments, and co-authored the papers.",
        problem:
          "Text-to-image models generate outputs based on text prompts alone, but users often have specific aesthetic preferences that are difficult to articulate in natural language.",
        process:
          "Studied preference learning literature and prompt engineering techniques. Designed an iterative optimization framework that learns from user preference feedback to refine prompt embeddings.",
        solution:
          "An optimization pipeline that takes user preference signals (pairwise comparisons) and iteratively adjusts prompt representations to steer generation toward desired aesthetic qualities.",
        outcome:
          "Published at ACM SIGGRAPH 2024 Posters and EvoMUSART 2025. Demonstrated significant improvement in preference alignment compared to manual prompting.",
        reflection:
          "This project deepened my understanding of how to bridge the gap between user intent and AI system behavior—a core challenge in AI product design.",
      },
    },
  },

  // Creative Practice
  creative: {
    label: "Creative Practice",
    title: "Beyond Research",
    viewMore: "View Works",
    viewGallery: "View Gallery",
    items: {
      gamePrototypes: {
        title: "Game Prototypes",
        description:
          "Global Game Jam participant since 2022. Built rapid prototypes in Unity exploring mechanics around collaboration, perception, and AI-driven narratives.",
      },
      visualDesign: {
        title: "Visual Design",
        description:
          "Independent graphic designer since 2018. Created 20+ campus culture product visual systems for universities across Guangdong.",
      },
      photography: {
        title: "Photography",
        description:
          "Ongoing practice in urban, nature, travel, and abstract photography. Exploring the intersection of computational aesthetics and visual storytelling.",
      },
    },
    games: {
      pageTitle: "Game Prototypes",
      pageSubtitle: "Playable prototypes and game jam works exploring local multiplayer, strategy simulation, social systems, and choice-driven interaction.",
      items: {
        "one-of-the-turkeys": {
          title: "One Of The Turkeys",
          summary:
            "A same-screen local two-player game where one player hides among turkeys and escapes, while the farmer tries to identify and stop them before time or bullets run out.",
        },
        "three-generation-wealth": {
          title: "Three-generation Wealth",
          summary:
            "A merchant simulation game built during TapTap Spotlight's 21-day game creation challenge.",
        },
        "social-media-censorship": {
          title: "Social Media Censorship",
          summary:
            "A strategy simulation and click-interaction game where players moderate posts in a fictional country while balancing class, ethnicity, diversity, morality, and regime stability.",
        },
        "top-underachiever": {
          title: "Top & Underachiever",
          summary:
            "A card-based school simulator with dark humor, where players drag decision cards to become either a top student or an underachiever.",
        },
      },
    },
    design: {
      pageTitle: "Visual Design",
      pageSubtitle: "Campus culture visual systems and graphic design projects created as an independent designer since 2018.",
      items: {
        "campus-culture-1": {
          title: "Campus Culture Visual System I",
          summary: "Brand identity and merchandise design for university cultural products.",
        },
        "campus-culture-2": {
          title: "Campus Culture Visual System II",
          summary: "Visual system design for campus cultural festival and products.",
        },
        "campus-culture-3": {
          title: "Campus Culture Visual System III",
          summary: "Visual identity and merchandise design for campus creative studio.",
        },
      },
    },
  },

  // Publications
  publications: {
    label: "Publications",
    title: "Publications & Exhibitions",
    items: {
      trajectory:
        "Large Foundation Models for Trajectory Prediction in Autonomous Driving: A Comprehensive Survey",
      spacetime:
        "Spacetime Dialogue: Integrating Astronomical Data and Khoomei in Spatial Installation",
      kandinskyFull:
        "Steering Large Text-to-Image Model for Kandinsky Synthesis Through Preference-Based Prompt Optimization",
      kandinskyPoster: "Kandinsky As You Preferred",
      cellSpace: "Cell Space: Augmented Awareness of Intercorporeality",
    },
  },

  // Education & Experience
  educationExperience: {
    label: "Background",
    title: "Education & Experience",
    education: [
      {
        year: "Sep 2024 – Oct 2026",
        title: "MPhil in Artificial Intelligence",
        institution: "The Hong Kong University of Science and Technology (Guangzhou)",
        description:
          "Red Bird full scholarship, GPA 3.6/4.3. HKUST ranks 44th globally in QS 2025.",
      },
      {
        year: "Sep 2020 – Jun 2024",
        title: "BSc Computer Science and Technology, Minor in Art and Design",
        institution: "BNU-HKBU United International College",
        description:
          "GPA 3.55/4.0, top 15% in major; scholarship recipient in 2020 and 2022.",
      },
    ],
    experience: [
      {
        year: "2025 – Present",
        title: "Human-LLM Collaboration User Research",
        organization: "Workflow interviews and thematic analysis",
        description: "10 heavy users interviewed.",
      },
      {
        year: "2022 / 2023 / 2024 / 2026",
        title: "Global Game Jam Rapid Game Development",
        organization: "Youqu Plan Team",
        description: "Best Team and Best Development site awards.",
      },
      {
        year: "2018 – Present",
        title: "Independent Graphic Designer",
        organization: "Guangdong cultural studios",
        description: "20+ campus culture product visual systems.",
      },
    ],
    language: {
      title: "English Working Proficiency",
      detail: "TOEFL 102",
    },
  },

  // Contact
  contact: {
    label: "Contact",
    title1: "Let's connect",
    title2: "and collaborate.",
    description:
      "Open to conversations around AI research, creative tools, human-AI collaboration, game prototypes, and visual design.",
    email: "wohin_wu@163.com",
    phone: "+86 15013110868",
    website: "violetwu.com",
    copyright: "© 2026 Wei WU. All rights reserved.",
    crafted: "AI Research | Creative Technology | Design",
  },

  // Photography Gallery
  gallery: {
    title: "Photography",
    subtitle: "Exploring light, color, and the everyday.",
    categories: {
      all: "All",
      urban: "Urban",
      nature: "Nature",
      travel: "Travel",
      colorAbstract: "Color & Abstract",
      dailyLife: "Daily Life",
    },
    backToHome: "Back",
  },

  // 404
  notFound: {
    title: "Oops! Page not found",
    returnHome: "Return to Home",
  },
};
