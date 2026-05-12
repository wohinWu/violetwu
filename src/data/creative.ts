import creative1Thumbnail from "@/assets/game/oneoftheturkey.png";
import creative2Thumbnail from "@/assets/game/fudeguo.png";
import creative3Thumbnail from "@/assets/game/socialmedia.png";
import creative4Thumbnail from "@/assets/game/topandunder.png";
export interface CreativeItem {
  id: string;
  icon: string;
  link: string;
  linkType: "page" | "gallery";
}

export const creativeItems: CreativeItem[] = [
  {
    id: "gamePrototypes",
    icon: "Gamepad2",
    link: "/creative/games",
    linkType: "page",
  },
  {
    id: "visualDesign",
    icon: "Palette",
    link: "/creative/design",
    linkType: "page",
  },
  {
    id: "photography",
    icon: "Camera",
    link: "/photography",
    linkType: "gallery",
  },
];

export interface CreativeProjectItem {
  id: string;
  tags: string[];
  thumbnail?: string;
  link?: string;
}

export const gameProjects: CreativeProjectItem[] = [
  {
    id: "one-of-the-turkeys",
    thumbnail: creative1Thumbnail,
    tags: ["Local Multiplayer", "Asymmetric Gameplay", "Party Game", "Global Game Jam", "2026"],
    link: "https://globalgamejam.org/games/2026/qizhongyizhihuoji-one-turkey-8",
  },
  {
    id: "three-generation-wealth",
    thumbnail: creative2Thumbnail,
    tags: ["Business Simulation", "Trading", "TapTap", "Game Jam", "2025"],
    link: "https://www.taptap.cn/app/727591?os=pc",
  },
  {
    id: "social-media-censorship",
    thumbnail: creative3Thumbnail,
    tags: ["Strategy Simulation", "Interactive Fiction", "Social Systems", "Global Game Jam", "2024"],
    link: "https://globalgamejam.org/games/2024/shejiaomeitishenchayuansocial-media-censorship-2",
  },
  {
    id: "top-underachiever",
    thumbnail: creative4Thumbnail,
    tags: ["Card-based Choice", "Dark Humor", "School Simulator", "Global Game Jam", "2022"],
    link: "https://v3.globalgamejam.org/2022/games/top-underachiever-%E4%BC%98%E7%94%9F%E5%B7%AE%E7%94%9F%E6%A8%A1%E6%8B%9F%E5%99%A8-2",
  },
];

export const designProjects: CreativeProjectItem[] = [
  {
    id: "campus-culture-1",
    tags: ["Branding", "Campus Culture", "Print"],
  },
  {
    id: "campus-culture-2",
    tags: ["Branding", "Campus Culture", "Print"],
  },
  {
    id: "campus-culture-3",
    tags: ["Branding", "Visual Identity", "Merchandise"],
  },
];

export const photoCategories = [
  "urban",
  "nature",
  "travel",
  "colorAbstract",
  "dailyLife",
] as const;

export type PhotoCategory = (typeof photoCategories)[number];
