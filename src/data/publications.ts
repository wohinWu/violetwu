export interface Publication {
  titleKey: string;
  venue: string;
  year: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    titleKey: "publications.items.trajectory",
    venue: "arXiv:2509.10570",
    year: "2025",
    url: "https://arxiv.org/abs/2509.10570",
  },
  {
    titleKey: "publications.items.spacetime",
    venue: "2024 IEEE VIS Arts Program (VISAP)",
    year: "2024",
    url: "https://ieeexplore.ieee.org/abstract/document/10749963",
  },
  {
    titleKey: "publications.items.kandinskyFull",
    venue: "Artificial Intelligence in Music, Sound, Art and Design",
    year: "2025",
    url:"https://link.springer.com/10.1007/978-3-031-90167-6_28",
  },
  {
    titleKey: "publications.items.kandinskyPoster",
    venue: "ACM SIGGRAPH 2024 Posters",
    year: "2024",
    url: "https://dl.acm.org/doi/10.1145/3641234.3671061",
  },
  {
    titleKey: "publications.items.cellSpace",
    venue: "Proc. ACM on Computer Graphics and Interactive Techniques",
    year: "2024",
    url: "https://dl.acm.org/doi/10.1145/3664213",
  },
];
