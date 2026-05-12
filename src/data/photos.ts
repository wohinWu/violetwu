import type { PhotoCategory } from "./creative";

export interface PhotoItem {
  src: string;
  category: PhotoCategory;
  alt?: string;
  aspect?: "portrait" | "landscape" | "square";
}

// 添加新照片：
// 1. 把图片文件放到 public/photos/{分类}/ 下
// 2. 在下方数组末尾加一行
export const photos: PhotoItem[] = [
  // --- urban ---
  // { src: "/photos/urban/street-rain.jpg", category: "urban", alt: "Rainy street", aspect: "portrait" },

  // --- nature ---
  { src: "/photos/nature/leave.jpg", category: "nature", alt: "leaves", aspect: "landscape" },
  { src: "/photos/nature/leave2.jpg", category: "nature", alt: "leaves", aspect: "landscape" },
  // --- travel ---
  // { src: "/photos/travel/tokyo-station.jpg", category: "travel", alt: "Tokyo station", aspect: "landscape" },

  // --- colorAbstract ---
  // { src: "/photos/colorAbstract/gradient-wall.jpg", category: "colorAbstract", alt: "Gradient wall", aspect: "square" },

  // --- dailyLife ---
  // { src: "/photos/dailyLife/morning-coffee.jpg", category: "dailyLife", alt: "Morning coffee", aspect: "square" },
];
