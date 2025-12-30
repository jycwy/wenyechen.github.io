// ============================================================================
// SITE CONTENT - Edit this file to update all content on the site
// ============================================================================

export const siteConfig = {
  name: "Wenye Chen",
  title: "AI Engineer",
  tagline: "Search Infrastructure • LLM Automation • Model Evaluation",
  description:
    "Backend engineer with 4 years of experience building distributed search infrastructure at Microsoft, now working on LLM automation and ML workflows in fin-tech. I focus on applying solid engineering practices to real-world AI systems.",

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
      "Backend engineer with 4 years of experience building distributed search infrastructure at Microsoft, now working on LLM automation and ML workflows in fin-tech. I focus on applying solid engineering practices to real-world AI systems.",
    cta: {
      primary: { label: "View Projects", href: "/projects" },
      secondary: { label: "Get in Touch", href: "/contact" },
    },
  },

  // Skills/expertise highlights
  expertise: [
    {
      title: "Search Infrastructure",
      description:
        "4 years at Microsoft on distributed search systems — ranking platform development, query optimization, and monitoring. Our search platform serves as a core retrieval component in Copilot's RAG system.",
    },
    {
      title: "Agentic Workflows",
      description:
        "Designing and building LLM-powered automation across multiple domains, including video information extraction for academic content and model selection and evaluation workflows in a regulated production environment.",
    },
    {
      title: "Engineering Lifecycle",
      description:
        "End-to-end ownership across the engineering lifecycle, from early problem definition and stakeholder alignment through design, implementation, validation, and deployment.",
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
      "Backend engineer with 4 years of experience at Microsoft (China), now applying what I learned to GenAI systems in the fin-tech industry.",
    paragraphs: [
      "I spent 4 years at Microsoft (China) working on distributed search infrastructure — ranking platform development, query processing, and monitoring systems. It taught me a lot about building reliable software at scale.",
      "I have an MSc in AI from the University of Edinburgh, where I focused on NLP and machine learning. These days I'm interested in GenAI systems and the practical side of getting them to work reliably in production.",
      "I recently relocated to London. I built video information extraction workflows at an academic video platform startup, and now in fintech I'm helping set up model selection and evaluation workflows in a regulated production environment.",
    ],
  },

  // Contact information
  contact: {
    email: "jycwyfuji@gmail.com",
    linkedin: "https://www.linkedin.com/in/wenye-223665197",
    github: "https://github.com/wenyechen",
    intro:
      "Happy to chat about AI engineering, agentic systems, or just interesting technical problems. Feel free to reach out.",
    availability:
      "Open to AI Engineer, ML Platform Engineer, and Backend/AI hybrid roles.",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Wenye Chen. All rights reserved.`,
  },
};

export type Project = (typeof siteConfig.projects)[number];
export type NavItem = (typeof siteConfig.nav)[number];
export type Expertise = (typeof siteConfig.expertise)[number];
