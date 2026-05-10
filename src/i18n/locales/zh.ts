export default {
  // Common
  common: {
    viewCaseStudy: "查看案例详情",
    paper: "论文",
    demo: "演示",
    github: "GitHub",
    external: "链接",
    backToHome: "← 返回首页",
    viewAll: "查看全部",
  },

  // Hero
  hero: {
    name: "吴蔚",
    tagline: "AI × 产品 × 创意技术",
    subtitle:
      "我设计并原型化连接多模态智能、人机协作与创意表达的 AI 系统。",
    ctaProjects: "查看项目",
    ctaCV: "下载简历",
    ctaContact: "联系我",
    heroAlt: "吴蔚个人网站首页",
  },

  // Navigation
  nav: {
    about: "关于",
    projects: "项目",
    creative: "创作",
    publications: "成果",
    education: "背景",
    contact: "联系",
  },

  // About
  about: {
    label: "关于",
    title: "连接人工智能、交互体验与视觉创意。",
    para1:
      "我目前在香港科技大学（广州）攻读研究型人工智能硕士，获得红鸟全额奖学金。本科毕业于北师-香港浸会大学计算机科学与技术专业，并辅修艺术与设计。",
    para2:
      "我的工作聚焦多模态大模型的创意理解、人机协作机制与可控生成系统，也长期参与游戏开发和平面设计，擅长把研究问题快速转化为可体验的原型。",
    capabilities: {
      aiResearch: {
        title: "AI 研究",
        description:
          "多模态大模型、创意理解评估、人机协作机制、偏好驱动生成。",
      },
      productPrototyping: {
        title: "产品与交互原型",
        description:
          "用户研究、Python/Unity/Web 快速原型、将研究洞察转化为可用交互系统。",
      },
      creativeDesign: {
        title: "创意技术与视觉设计",
        description:
          "生成式 AI 工具、游戏开发、平面设计系统、数据驱动艺术装置与摄影。",
      },
    },
  },

  // Featured Projects
  featuredProjects: {
    label: "精选项目",
    title: "代表作品",
    items: {
      "gamified-collaboration": {
        title: "人机协作游戏化激励系统",
        category: "Human-LLM Collaboration",
        summary:
          "通过游戏化机制激励有效的人机协作模式，提升用户参与度和协作质量。",
      },
      "creative-understanding": {
        title: "多模态大模型创意理解能力建模",
        category: "Multimodal AI",
        summary:
          "评估和提升多模态大语言模型对创意视觉内容的感知与推理能力。",
      },
      "preference-optimization": {
        title: "文生图模型偏好驱动优化",
        category: "Generative AI",
        summary:
          "通过偏好学习和提示优化，引导文生图模型生成符合用户审美偏好的作品。",
      },
    },
  },

  // Project Detail
  projectDetail: {
    overview: "概述",
    myRole: "我的角色",
    problem: "问题",
    process: "过程",
    solution: "系统 / 方案",
    outcome: "成果",
    reflection: "反思",
    gallery: "图集",
    externalLinks: "外部链接",
    items: {
      "gamified-collaboration": {
        overview:
          "本项目探索如何将游戏化机制融入人机协作工作流，以提升用户参与度、产出质量和满意度。",
        myRole: "主要研究者与系统设计者。负责用户访谈、游戏化框架设计、原型开发和评估研究。",
        problem:
          "当前人机协作工具缺乏结构化激励机制，用户难以发展有效的协作模式，导致交互浅层化、LLM 能力未被充分利用。",
        process:
          "对 10 位 LLM 重度用户进行半结构化访谈，理解协作工作流。通过主题分析识别痛点和行为模式，基于自我决定理论设计游戏化机制。",
        solution:
          "将游戏机制（进度追踪、挑战、反馈循环）叠加到 LLM 协作界面上，引导用户采用更有效的提示策略和更深层的协作模式。",
        outcome:
          "用户研究表明，相比基线界面，该框架显著提升了协作深度和用户参与度，并为人机协作工具设计提供了可操作的指导方针。",
        reflection:
          "这个项目让我更加确信，好的 AI 产品设计不仅关乎模型能力，同样关乎塑造用户行为和创造正确的交互激励。",
      },
      "creative-understanding": {
        overview:
          "本研究探索多模态大语言模型对创意视觉内容的理解能力，提出新的评估基准和改进方法。",
        myRole: "主要研究者。负责基准设计、数据集构建、实验执行和论文写作。",
        problem:
          "现有 MLLM 基准聚焦于事实识别和推理，忽视了审美质量、风格意图和构图创意等创意维度。",
        process:
          "调研心理学和设计领域的创意评估文献，定义多维度创意理解框架，构建涵盖摄影、绘画和设计作品的数据集。",
        solution:
          "一个结构化基准，从多个创意维度评估 MLLM，包含自动化指标和人工评估协议，评估创意感知能力。",
        outcome:
          "揭示了当前 MLLM 在创意理解方面的显著不足，该基准为改进创意 AI 系统的未来研究提供了基础。",
        reflection:
          "在 AI 评估与创意的交汇点工作让我认识到，衡量创意智能需要与衡量事实知识根本不同的方法。",
      },
      "preference-optimization": {
        overview:
          "本项目开发了通过偏好驱动的提示优化方法，引导文生图模型趋向用户特定的审美偏好。",
        myRole: "主要研究者与开发者。设计优化管线、实现系统、进行实验并合著论文。",
        problem:
          "文生图模型仅基于文本提示生成输出，但用户往往有难以用自然语言表达的特定审美偏好。",
        process:
          "研究偏好学习文献和提示工程技术，设计了一个迭代优化框架，从用户偏好反馈中学习以优化提示表示。",
        solution:
          "一个优化管线，接收用户偏好信号（成对比较），迭代调整提示表示，引导生成朝向期望的审美品质。",
        outcome:
          "发表于 ACM SIGGRAPH 2024 Posters 和 EvoMUSART 2025。相比手动提示显著改善了偏好对齐效果。",
        reflection:
          "这个项目加深了我对如何弥合用户意图与 AI 系统行为之间差距的理解——这是 AI 产品设计的核心挑战。",
      },
    },
  },

  // Creative Practice
  creative: {
    label: "创意实践",
    title: "研究之外",
    items: {
      gamePrototypes: {
        title: "游戏原型",
        description:
          "自 2022 年起参与 Global Game Jam，使用 Unity 快速开发探索协作、感知和 AI 叙事机制的游戏原型。",
      },
      visualDesign: {
        title: "视觉设计",
        description:
          "自 2018 年起担任独立平面设计师，为广东地区高校设计了 20+ 套文创产品视觉系统。",
      },
      photography: {
        title: "摄影",
        description:
          "持续在城市、自然、旅行与抽象摄影领域实践，探索计算美学与视觉叙事的交汇。",
      },
    },
    viewGallery: "浏览图集",
  },

  // Publications
  publications: {
    label: "成果",
    title: "发表与展示",
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
    label: "背景",
    title: "教育与经历",
    education: [
      {
        year: "2024.09 – 2026.10",
        title: "研究型人工智能硕士",
        institution: "香港科技大学（广州）",
        description:
          "红鸟全额奖学金，GPA 3.6/4.3；学校 QS 2025 世界大学排名第 44 位。",
      },
      {
        year: "2020.09 – 2024.06",
        title: "计算机科学与技术学士，辅修艺术与设计",
        institution: "北师-香港浸会大学",
        description:
          "GPA 3.55/4.0，专业排名前 15%；获 2020、2022 年度奖学金。",
      },
    ],
    experience: [
      {
        year: "2025 – 至今",
        title: "大模型协作用户研究",
        organization: "Human-LLM 工作流访谈与主题分析",
        description: "10 位重度用户访谈。",
      },
      {
        year: "2022 / 2023 / 2024 / 2026",
        title: "Global Game Jam 游戏限时开发",
        organization: "有趣计划团队",
        description: "最佳团队、最佳开发等奖项。",
      },
      {
        year: "2018 – 至今",
        title: "独立平面设计师",
        organization: "广东本地文创工作室合作",
        description: "20+ 高校文化创意产品视觉系统。",
      },
    ],
    language: {
      title: "英文工作环境",
      detail: "TOEFL 102",
    },
  },

  // Contact
  contact: {
    label: "联系",
    title1: "欢迎联系",
    title2: "交流合作。",
    description:
      "欢迎围绕 AI 研究、创意工具、人机协作、游戏原型和视觉设计进行交流。",
    email: "wohin_wu@163.com",
    phone: "+86 15013110868",
    website: "violetwu.com",
    copyright: "© 2026 Wei WU. 版权所有。",
    crafted: "AI Research · Creative Technology · Design",
  },

  // Photography Gallery
  gallery: {
    title: "摄影",
    subtitle: "探索光影、色彩与日常。",
    categories: {
      all: "全部",
      urban: "城市",
      nature: "自然",
      travel: "旅行",
      colorAbstract: "色彩与抽象",
      dailyLife: "日常",
    },
    backToHome: "← 返回",
  },

  // 404
  notFound: {
    title: "抱歉，页面未找到",
    returnHome: "返回首页",
  },
};
