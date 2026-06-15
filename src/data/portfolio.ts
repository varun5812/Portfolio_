export const socialLinks = {
  github: "https://github.com/varun5812",
  linkedin: "https://linkedin.com/in/varun-kumar-n-79bb6329a",
  email: "mailto:varunkumar5812@gmail.com",
  leetcode: "https://leetcode.com/",
  resume: "/Varun_Resume__.pdf"
};

export const heroRoles = [
  "Fresher Data Scientist",
  "Machine Learning Engineer",
  "EDA & Analytics Specialist",
  "Deep Learning Learner",
  "Generative AI Explorer"
];

export const sectionMeta = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export const stats = [
  { label: "Core Focus Areas", value: "05" },
  { label: "Projects Built", value: "04" },
  { label: "Graduation Year", value: "2025" },
  { label: "Internship Status", value: "Active" }
];

export const aboutHighlights = [
  "B.E. graduate in Artificial Intelligence and Machine Learning (2025), ready to contribute as a fresher in data and AI roles.",
  "Hands-on with data preprocessing, EDA, feature engineering, model building, and evaluation using Python and SQL.",
  "Currently extending into deep learning, RAG workflows, LLM applications, and deployment-focused AI projects."
];

export const focusAreas = [
  {
    title: "Data Preprocessing",
    description: "Cleaning raw datasets, encoding features, scaling inputs, and preparing reliable model-ready pipelines.",
    tags: ["Cleaning", "Encoding", "Scaling"]
  },
  {
    title: "EDA & Analytics",
    description: "Understanding trends, patterns, and anomalies through exploration, visual storytelling, and statistical thinking.",
    tags: ["EDA", "Visualization", "Insights"]
  },
  {
    title: "Machine Learning",
    description: "Building classification and prediction workflows with model comparison, metrics, and feature engineering.",
    tags: ["Classification", "Evaluation", "Features"]
  },
  {
    title: "Deep Learning",
    description: "Learning neural network workflows and image-based modeling with a practical, experiment-driven approach.",
    tags: ["Neural Nets", "CNN", "Tuning"]
  },
  {
    title: "Generative AI",
    description: "Exploring RAG systems, prompt design, vector databases, and LLM-based application building.",
    tags: ["LangChain", "RAG", "LLMs"]
  }
];

export const skills = [
  {
    category: "Data Foundation",
    intro: "My strongest fresher value starts with reliable data handling: preprocess first, understand the data clearly, then build better models.",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "EDA", level: 90 },
      { name: "Data Preprocessing", level: 91 },
      { name: "Feature Engineering", level: 84 }
    ]
  },
  {
    category: "Analytics & Visualization",
    intro: "I use analytics to turn raw data into understandable patterns and decision-friendly dashboards.",
    items: [
      { name: "Power BI", level: 84 },
      { name: "Tableau", level: 78 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 87 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 79 }
    ]
  },
  {
    category: "Machine Learning",
    intro: "I enjoy comparing algorithms, measuring outcomes clearly, and improving predictions with better features and cleaner inputs.",
    items: [
      { name: "Scikit-learn", level: 87 },
      { name: "Supervised Learning", level: 86 },
      { name: "Unsupervised Learning", level: 79 },
      { name: "Classification", level: 85 },
      { name: "Model Evaluation", level: 83 },
      { name: "XGBoost / Ensemble", level: 75 }
    ]
  },
  {
    category: "Deep Learning",
    intro: "I am actively growing my deep learning foundation through neural network concepts, CNNs, and applied experimentation.",
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 77 },
      { name: "CNN", level: 73 },
      { name: "Neural Networks", level: 74 }
    ]
  },
  {
    category: "Generative AI",
    intro: "My GenAI learning is focused on practical systems: retrieval, prompting, embeddings, and usable application flows.",
    items: [
      { name: "LangChain", level: 78 },
      { name: "LLM Basics", level: 76 },
      { name: "GPT-3.5 / Mistral", level: 74 },
      { name: "RAG", level: 77 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Sentence Transformers", level: 72 },
      { name: "Vector Databases", level: 70 }
    ]
  },
  {
    category: "Deployment & Tools",
    intro: "I like taking projects beyond notebooks through simple deployment, developer tooling, and cloud basics.",
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 83 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Streamlit", level: 82 },
      { name: "Render", level: 79 },
      { name: "Docker (Basic)", level: 61 },
      { name: "Azure / Kubernetes", level: 58 }
    ]
  }
];

export const projects = [
  {
    type: "LLM Application",
    title: "AI Video Assistant: Meeting Intelligence Platform",
    summary: "Developed an AI-powered meeting intelligence platform that converts YouTube videos, uploaded audio/video files, and transcripts into summaries, action items, key decisions, and insights through an interactive Streamlit interface.",
    impact: "This project highlights practical applied AI: transcription, summarization, multilingual insights, conversational Q&A, and MCP-based tool integration in one end-to-end workflow.",
    tech: [
      "Python",
      "LangChain",
      "RAG",
      "Groq API",
      "Whisper",
      "Llama 3.1",
      "Streamlit",
      "yt-dlp",
      "FastMCP",
      "pydub",
      "dotenv"
    ],
    highlights: [
      "Built an end-to-end AI pipeline for transcription, summarization, insight extraction, and conversational Q&A.",
      "Implemented multi-source YouTube transcript retrieval alongside Groq Whisper speech-to-text transcription.",
      "Developed a lightweight BM25-style RAG system and LangChain LCEL workflows with multilingual support."
    ],
    liveUrl: "https://ai-videos.streamlit.app/",
    liveLabel: "Open Live App",
    githubUrl: "https://github.com/varun5812",
    githubLabel: "GitHub Profile",
    image: "/images/project_meeting.png"
  },
  {
    type: "AI Research Automation",
    title: "ResearchMind: AI-Powered Research System",
    summary: "Developed an AI-powered research application that generates structured research reports from user topics using web search, content extraction, and summarization in a Streamlit interface.",
    impact: "This project shows applied AI automation beyond prediction models, combining search, scraping, cleaning, and structured report generation into one usable workflow.",
    tech: [
      "Python",
      "Streamlit",
      "Tavily API",
      "BeautifulSoup",
      "Requests",
      "Web Scraping",
      "Research Automation"
    ],
    highlights: [
      "Built an automated research pipeline that turns user topics into structured downloadable Markdown reports.",
      "Integrated Tavily API for relevant web search results and used Requests with BeautifulSoup for content extraction.",
      "Cleaned and processed scraped webpage content to generate summaries and key findings in real time."
    ],
    liveUrl: "https://researchmind-ai-oq52.onrender.com/",
    liveLabel: "Open Live App",
    githubUrl: "https://github.com/varun5812/ResearchMind-AI",
    githubLabel: "View Repo",
    image: "/images/project_research.png"
  },
  {
    type: "Machine Learning",
    title: "Customer Churn Prediction in Retail",
    summary: "Designed a customer churn prediction model for a retail loyalty program using historical purchase data, customer engagement metrics, and promotional responses to identify high-risk churn customers.",
    impact: "Successfully enabled targeted retention strategies, resulting in a 15% reduction in customer churn, and integrated predictions into CRM automations.",
    tech: [
      "Machine Learning",
      "Python",
      "XGBoost",
      "Random Forest",
      "Decision Trees",
      "Feature Engineering",
      "Azure ML",
      "Data Visualization"
    ],
    highlights: [
      "Collected and processed transactional and customer engagement data for feature extraction and modeling.",
      "Designed and implemented machine learning models using Random Forest and XGBoost to predict churn.",
      "Deployed the model using Azure ML to ensure scalability and real-time predictions.",
      "Integrated the model into the CRM system to automate personalized retention strategies based on churn scores."
    ],
    githubUrl: "https://github.com/varun5812",
    githubLabel: "GitHub Profile",
    image: "/images/machine_learning.png"
  },
  {
    type: "Machine Learning",
    title: "Heart Disease Prediction Web App",
    summary: "Built an end-to-end machine learning solution to predict heart disease risk from patient clinical data, then deployed it as a web application.",
    impact: "Highlighting standard clinical ML workflows: EDA, preprocessing, model comparison, evaluation, and live deployment on Render.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "EDA",
      "Feature Engineering",
      "Streamlit",
      "Render"
    ],
    highlights: [
      "Performed preprocessing and feature preparation including encoding and scaling with StandardScaler.",
      "Trained and compared Logistic Regression, KNN, SVM, Naive Bayes, and Decision Tree models.",
      "Selected KNN based on accuracy and F1 score, then deployed the final solution as a Streamlit app."
    ],
    liveUrl: "https://heart-d-g2ab.onrender.com/",
    liveLabel: "Open Live App",
    githubUrl: "https://github.com/varun5812",
    githubLabel: "GitHub Profile",
    image: "/images/project_heart.png"
  }
];

export const experience = [
  {
    title: "Data Scientist Intern",
    organization: "AIML LABS PVT LTD",
    period: "April 2025 - Present",
    summary: "Completed hands-on training in Data Science and Machine Learning with a focus on practical problem solving and model development.",
    bullets: [
      "Worked on preprocessing, EDA, feature engineering, and model evaluation workflows.",
      "Built classification-based machine learning projects with real-world problem framing.",
      "Explored advanced concepts including Generative AI, RAG, LangChain, and vector databases."
    ]
  }
];

export const education = [
  {
    title: "B.E. In Artificial Intelligence and Machine Learning",
    school: "SEA College of Engineering, Bengaluru",
    period: "2021 - 2025",
    summary: "CGPA 7.01"
  },
  {
    title: "PUC (Class XII)",
    school: "Shree Vijetha PU College, Chintamani",
    period: "2021",
    summary: "71.5%"
  },
  {
    title: "SSLC (Class X)",
    school: "Nalanda Vidhya Mandira, Chintamani",
    period: "2019",
    summary: "68.18%"
  }
];

export const certifications = [
  { name: "Python for Data Science", issuer: "NPTEL / Coursera", link: "#" },
  { name: "SQL for Data Analytics", issuer: "NPTEL / LinkedIn", link: "#" },
  { name: "Machine Learning (Supervised/Unsupervised)", issuer: "AIML Labs", link: "#" },
  { name: "Data Analytics & Visualization", issuer: "NPTEL", link: "#" },
  { name: "Power BI Dashboarding", issuer: "Coursera", link: "#" }
];

export const workflowStages = [
  { name: "Collect", value: 74, desc: "Acquiring data from APIs, DBs, and scraping" },
  { name: "Clean", value: 92, desc: "Imputing nulls, scaling, encoding features" },
  { name: "Explore", value: 90, desc: "Visual storytelling & correlation analysis" },
  { name: "Model", value: 86, desc: "Algorithm comparisons & hyperparameter tuning" },
  { name: "Deploy", value: 78, desc: "Publishing endpoints as Streamlit web apps" }
];

export const timeline = [
  {
    year: "2021",
    title: "Started AIML BE Degree",
    text: "Began the Artificial Intelligence and Machine Learning journey with a strong interest in data-led problem solving at SEA College, Bengaluru."
  },
  {
    year: "2023",
    title: "Core Data Engineering & SQL",
    text: "Relational databases, advanced query writing, and built data visualizations in Power BI and Tableau."
  },
  {
    year: "2024",
    title: "Applied Machine Learning & CNNs",
    text: "Trained prediction models, classification systems, CNN structures, and completed model deployments."
  },
  {
    year: "2025",
    title: "Graduated & Internship Track",
    text: "Graduated with a CGPA of 7.01. Joined AIML Labs as a Data Scientist Intern. Expanding expertise into LLMs, LangChain, and RAG systems."
  }
];
