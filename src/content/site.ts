// ============================================================================
// SITE CONTENT - Edit this file to update all content on the site
// ============================================================================

export const siteConfig = {
  name: "Wenye Chen",
  title: "AI-Native Engineer",
  tagline: "Building with AI • Thinking through AI • Growing with AI",
  description:
    "I'm an AI-native engineer who integrates AI into every aspect of my work — from problem-solving to implementation. With 4 years at Microsoft building search infrastructure and recent experience in LLM automation, I approach engineering challenges through an AI-first lens, leveraging GenAI tools to amplify productivity and build intelligent systems.",

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Hero section
  hero: {
    greeting: "Hi, I'm",
    description:
      "I'm an AI-native engineer who integrates AI into every aspect of my work — from problem-solving to implementation. With 4 years at Microsoft building search infrastructure and recent experience in LLM automation, I approach engineering challenges through an AI-first lens, leveraging GenAI tools to amplify productivity and build intelligent systems.",
    cta: {
      primary: { label: "View Projects", href: "/projects" },
      secondary: { label: "Get in Touch", href: "/contact" },
    },
  },

  // Skills/expertise highlights
  expertise: [
    {
      title: "AI-First Engineering",
      description:
        "I integrate AI tools into every stage of development — using Claude and GPT-4 for code generation, debugging, and architecture design. I don't just build AI systems; I use AI to build better, faster, and more thoughtfully.",
    },
    {
      title: "Agentic Systems & LLM Automation",
      description:
        "Designing and building LLM-powered automation across multiple domains, including video information extraction, model selection workflows, and conversational interfaces for complex ML infrastructure like MLflow.",
    },
    {
      title: "Search & Retrieval Infrastructure",
      description:
        "4 years at Microsoft building distributed search systems that now power Copilot's RAG architecture. Deep expertise in ranking algorithms, query optimization, and production-scale retrieval systems.",
    },
  ],

  // Projects
  projects: [
    {
      id: "mcp-mlflow-service",
      title: "MCP Service for MLFlow",
      problem:
        "Data scientists and ML engineers struggled with complex MLflow APIs and had to write boilerplate code to interact with experiments, runs, and models.",
      solution:
        "Built a Gradio-based MCP service that enables natural language interaction with MLflow tracking service — query experiments, compare runs, and manage models conversationally.",
      impact:
        "Streamlined ML workflow management, reducing the barrier to MLflow adoption and enabling non-technical stakeholders to explore experiment results.",
      tags: ["Gradio", "MCP", "MLflow", "Python", "LLM"],
    },
    {
      id: "rag-chatbot-builder",
      title: "GPT-4 Powered RAG Chatbot Builder",
      problem:
        "Building custom RAG pipelines required significant engineering effort, making it inaccessible for quick prototyping or non-technical users.",
      solution:
        "Created a Streamlit application powered by LlamaIndex and OpenAI GPT-4, enabling users to create, customize, and interact with RAG pipelines on their own data using natural language.",
      impact:
        "Democratized RAG development — users can spin up a functional chatbot over their documents in minutes without writing code.",
      tags: ["Streamlit", "LlamaIndex", "OpenAI GPT-4", "RAG", "Python"],
    },
    {
      id: "search-ranking-migration",
      title: "Search Ranking Platform Modernization",
      problem:
        "Microsoft's legacy C++ ranking system was difficult to maintain and couldn't easily integrate modern deep learning models, limiting experimentation agility.",
      solution:
        "Led migration to a modern C#-based framework with ONNX support for deep learning model integration, while ensuring zero regressions in relevance or user experience.",
      impact:
        "Enabled rapid experimentation with new ranking models and improved maintainability across the search infrastructure.",
      tags: ["C#", "ONNX", "Deep Learning", "Search", "Microsoft"],
    },
    {
      id: "devops-optimization",
      title: "CI/CD & Development Pipeline Optimization",
      problem:
        "Development cycles were painfully slow — 18-hour inner-loop times and 7-day outer-loop times at P90, severely impacting team velocity.",
      solution:
        "Analyzed pain points via metrics and benchmarks, automated Agile workflows, optimized CI/CD pipelines, and implemented universal dependency version control for common utilities.",
      impact:
        "Reduced inner-loop from 18 hours to 2.5 hours, outer-loop from 7 days to 1 day. Cut incident duration by 3+ hours and improved dev experience metrics by 15%.",
      tags: ["CI/CD", "DevOps", "Azure", "Automation", "Metrics"],
    },
    {
      id: "video-info-extraction",
      title: "Video Information Extraction Pipeline",
      problem:
        "Extracting structured information from video data was manual and time-consuming, slowing down content processing workflows.",
      solution:
        "Built an LLM-powered automation pipeline to extract information from video data, along with a model selection and evaluation workflow to help the team choose the right models for different tasks.",
      impact:
        "Streamlined the video processing workflow and established a systematic approach for evaluating and selecting models across the team.",
      tags: ["LLM", "Agentic AI", "Python", "Video Processing", "Model Evaluation"],
    },
    {
      id: "knowledge-graph-prototype",
      title: "News Knowledge Graph System",
      problem:
        "Business analysts struggled to extract actionable insights from large volumes of news data, missing critical connections between entities and events.",
      solution:
        "Built a knowledge graph prototype in 3 weeks at Sinovation Ventures, integrating entity extraction, graph storage, and interactive visualization.",
      impact:
        "Transformed raw news into actionable business intelligence, enabling faster and more informed decision-making.",
      tags: ["Knowledge Graph", "NLP", "Entity Extraction", "Visualization"],
    },
  ],

  // About page content
  about: {
    intro:
      "I'm an AI-native engineer — someone who doesn't just build AI systems, but fundamentally integrates AI into how I think, learn, and create.",
    paragraphs: [
      "What does AI-native mean to me? It means using Claude and GPT-4 as thought partners throughout my day — from brainstorming architectures to debugging production issues. It means building agentic workflows that augment human capabilities. It means constantly exploring how AI can make me a better engineer, not just what AI I can build for others.",
      "My foundation comes from 4 years at Microsoft (China), where I built distributed search infrastructure that now powers Copilot's RAG system. I learned to build reliable software at scale — ranking platforms, query optimization, and monitoring systems that handle millions of requests.",
      "With an MSc in AI from the University of Edinburgh, I've been fascinated by how AI evolves. After relocating to London, I've focused on GenAI systems: building LLM-powered video extraction pipelines, creating conversational interfaces for ML infrastructure, and establishing model evaluation workflows in regulated fintech environments. Each project is an opportunity to explore what AI-native engineering looks like in practice.",
    ],
  },

  // Contact information
  contact: {
    email: "jycwyfuji@gmail.com",
    linkedin: "https://www.linkedin.com/in/wenye-223665197",
    github: "https://github.com/wenyechen",
    intro:
      "Interested in discussing AI-native workflows, agentic systems, or how to integrate AI into engineering practice? Let's connect.",
    availability:
      "Open to roles where AI-native engineering is valued — AI Engineer, ML Platform, or teams building the future of AI-augmented development.",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Wenye Chen. All rights reserved.`,
  },
};

export type Project = (typeof siteConfig.projects)[number];
export type NavItem = (typeof siteConfig.nav)[number];
export type Expertise = (typeof siteConfig.expertise)[number];
