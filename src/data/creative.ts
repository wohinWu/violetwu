export interface CreativeItem {
  id: string;
  icon: string;
  link?: string;
  linkType: "page" | "external" | "gallery";
}

export const creativeItems: CreativeItem[] = [
  {
    id: "gamePrototypes",
    icon: "Gamepad2",
    linkType: "external",
  },
  {
    id: "visualDesign",
    icon: "Palette",
    linkType: "external",
  },
  {
    id: "photography",
    icon: "Camera",
    link: "/photography",
    linkType: "gallery",
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
