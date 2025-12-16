import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Code,  Database, Users, Mail, Phone, MapPin, ExternalLink, Brain, Download } from 'lucide-react';

// --- ANIMATION COMPONENT ---
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, 
        rootMargin: "-50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('about');

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    console.log("App component mounted.");
  }, []);

  const contactInfo = {
    name: "Gaurav Patil",
    title: "AI/ML Engineering Student",
    phone: "+91 9158437110",
    email: "gauravsp004@gmail.com",
    linkedin: "https://www.linkedin.com/in/gaurav-patil04",
    github: "https://github.com/GauravPatil04",
    location: "Kolhapur, Maharashtra",
    leetcode: "https://leetcode.com/u/Gaurav__007/", 
    kaggle: "https://www.kaggle.com/gauravpatil04", 
    huggingface: "https://huggingface.co/GauravPatil04", 
    resume: "/GauravPatil_Resume.pdf" 
  };

  const professionalSummary = `Final-year Computer Science student specializing in Artificial Intelligence and Machine Learning at Sanjay Ghodawat University. Proficient in Python, TensorFlow, and scikit-learn with hands-on experience in developing data-driven solutions. Skilled in Data Structures and Algorithms with 100+ problems solved on LeetCode. Seeking to apply strong analytical and problem-solving skills in an AI/ML Engineer role to contribute to innovative projects.`;

  const education = {
    institution: "Sanjay Ghodawat University",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    duration: "2022 - 2026",
    gpa: "8.3 CGPA",
    location: "Kolhapur, Maharashtra"
  };

  const getSkillLogo = (skillName) => {
    const logos = {
      "Python": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "SQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", // Using MySQL icon for SQL
      "TensorFlow": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      "Pandas": "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      "NumPy": "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
      "Seaborn": "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      "Git": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      "GitHub": "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      "Docker": "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      "MySQL": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
    };
    return logos[skillName] || null;
  };

  const technicalSkills = [
    { 
      category: "Programming", 
      skills: ["Python", "SQL"] 
    },
    { 
      category: "Machine Learning", 
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"] 
    },
    { 
      category: "Tools & Platforms", 
      skills: ["Git", "GitHub", "Docker", "MySQL"] 
    },
  ];

  const projects = [
    {
      title: "PDF_Guru: PDF QA System (RAG)",
      tech: "Groq Llama 3.3 70B · ChromaDB · Streamlit",
      description: "A high-performance, privacy-preserving Retrieval-Augmented Generation (RAG) system designed for multi-user environments. Users can upload a PDF and interact with its content using advanced AI—processed entirely in memory for confidentiality.",
      achievements: [
        "Privacy by Design: No file storage, all data in RAM",
        "Enterprise-Grade Pipeline with Groq's Llama 3.3 70B",
        "Multi-User Safe with isolated session states"
      ],
      link: "https://pdfbot-alit4bjkyyblxxerbmqxjr.streamlit.app/"
    },
    {
      title: "AI Music Recommendation System",
      tech: "TensorFlow · OpenCV · CNN",
      description: "Developed a real-time AI system that recommends music by analyzing facial expressions through webcam. Built and trained a Convolutional Neural Network for emotion classification and integrated dynamic playlist suggestions.",
      achievements: [
        "Real-time emotion detection using CNN",
        "Dynamic music playlist generation",
        "OpenCV integration for facial recognition"
      ],
      link: "#" 
    },
    {
      title: "Diet Guru: Personalized Nutrition Planner",
      tech: "Scikit-learn · Content Filtering · Python",
      description: "Designed a personalized diet recommendation system using content-based filtering algorithms. Generates meal plans based on user health goals, dietary restrictions, and nutritional profiles.",
      achievements: [
        "Content-based filtering algorithms",
        "Nutritional database integration",
        "Personalized meal planning"
      ],
      link: "#" 
    },
  ];

  const activities = [
    {
      title: "NSS Volunteer",
      duration: "2024 - Present",
      description: "Contributed to community service initiatives including cleanliness drives and public awareness campaigns. Enhanced organizational and teamwork skills through local community events.",
    },
    {
      title: "Cubicles Club Member",
      duration: "2024 - Present",
      description: "Participated in workshops on Docker, Git, and emerging technologies. Collaborated with peers on coding projects, fostering practical problem-solving skills.",
    },
  ];

  const navLinks = [
    { id: 'about', label: 'Summary' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter relative overflow-x-hidden">
      {/* Global font style */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          ::selection {
            background-color: rgba(94, 234, 212, 0.3);
          }
        `}
      </style>

      {/* Neuron background component */}
      <NeuronBackground />

      {/* Header Section */}
      <header className="relative z-20 w-full pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left: Photo & Name */}
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-teal-500 shadow-lg shrink-0">
                  <img
                    src="assets/img/profile_photo1.JPG" 
                    alt="Gaurav Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">
                    Gaurav Patil
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">AI & ML Engineer</p>
                </div>
              </div>

              {/* Right: Navigation */}
              <nav className="w-full md:w-auto flex justify-center md:justify-end">
                <div className="flex flex-wrap justify-center gap-2 bg-gray-900/50 p-2 rounded-full border border-gray-800 backdrop-blur-sm">
                  {navLinks.map(link => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeSection === link.id 
                          ? 'bg-teal-500 text-white shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </RevealOnScroll>
        </div>
      </header>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <main className="space-y-20">
          
          {/* 1. Professional Summary */}
          <section id="about" className="scroll-mt-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-teal-500"></div>
                <h2 className="text-3xl font-bold text-white">Professional Summary</h2>
              </div>
              <div className="prose prose-lg prose-invert max-w-none bg-gray-900/40 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {professionalSummary}
                </p>
              </div>
            </RevealOnScroll>
          </section>

          {/* 2. Education */}
          <section id="education" className="scroll-mt-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-purple-500"></div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>
              
              <div className="bg-gray-900/40 rounded-2xl p-8 border border-gray-800 shadow-xl hover:border-purple-500/30 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                    <p className="text-xl text-teal-400 font-medium mb-1">{education.institution}</p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4"/> {education.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 mb-2">
                      {education.gpa}
                    </span>
                    <span className="text-gray-500 text-sm">{education.duration}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* 3. Technical Skills */}
          <section id="skills" className="scroll-mt-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technicalSkills.map((skillGroup, index) => (
                  <div key={index} className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800 shadow-xl backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2 border-b border-gray-800 pb-3">
                      {skillGroup.category}
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {skillGroup.skills.map((skill, skillIndex) => {
                        const logoUrl = getSkillLogo(skill);
                        return (
                          <div key={skillIndex} className="flex flex-col items-center gap-2 group">
                            <div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center p-3 group-hover:bg-gray-700 transition-colors duration-300 border border-gray-700 group-hover:border-teal-500/50">
                               {logoUrl ? (
                                 <img src={logoUrl} alt={skill} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                               ) : (
                                 <Code className="w-6 h-6 text-gray-400" />
                               )}
                            </div>
                            <span className="text-xs text-gray-400 text-center font-medium group-hover:text-teal-400 transition-colors">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* 4. Projects */}
          <section id="projects" className="scroll-mt-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-teal-500"></div>
                <h2 className="text-3xl font-bold text-white">Projects</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors cursor-pointer" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-bold tracking-wider text-teal-400 mb-4 uppercase">{project.tech}</p>
                      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
                      <div className="space-y-3 pt-4 border-t border-gray-800/50">
                        {project.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* 5. Activities */}
          <section className="scroll-mt-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-purple-500"></div>
                <h2 className="text-3xl font-bold text-white">Activities & Leadership</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm hover:bg-gray-900/60 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-400"/>
                        {activity.title}
                      </h3>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">{activity.duration}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* 6. Contact Section  */}
          <section id="contact" className="scroll-mt-8 pt-12 border-t border-gray-800">
            <RevealOnScroll>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-gray-400 mb-12 text-lg">
                  I'm actively seeking AI/ML engineering opportunities and would love to discuss how I can contribute to your team.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                   {/* Email */}
                   <a href={`mailto:${contactInfo.email}`} className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-gray-900/40 hover:bg-gray-800 border border-gray-800 hover:border-teal-500/50 transition-all group backdrop-blur-sm">
                      <div className="p-3 bg-teal-500/10 rounded-xl group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-teal-400" />
                      </div>
                      <div className="text-center">
                        <span className="block text-sm text-gray-500 mb-1">Email</span>
                        <span className="text-gray-300 font-medium">{contactInfo.email}</span>
                      </div>
                   </a>

                   {/* Phone */}
                   <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="text-center">
                        <span className="block text-sm text-gray-500 mb-1">Phone</span>
                        <span className="text-gray-300 font-medium">{contactInfo.phone}</span>
                      </div>
                   </div>

                   {/* Location */}
                   <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-center">
                        <span className="block text-sm text-gray-500 mb-1">Location</span>
                        <span className="text-gray-300 font-medium">{contactInfo.location}</span>
                      </div>
                   </div>
                </div>

                {/* Resume Download Button */}
                <div className="flex justify-center mb-10">
                  <a 
                    href={contactInfo.resume} 
                    download="GauravPatil_Resume.pdf"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-bold tracking-wide transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>

                {/* Social Links  */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {/* LinkedIn */}
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-[#0077b5] text-gray-300 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-[#333] text-gray-300 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="font-medium">GitHub</span>
                  </a>

                  {/* LeetCode */}
                  <a href={contactInfo.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-[#FFA116] text-gray-300 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group">
                    <Code className="w-5 h-5" />
                    <span className="font-medium">LeetCode</span>
                  </a>

                  {/* Kaggle */}
                  <a href={contactInfo.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-[#20BEFF] text-gray-300 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group">
                    <Database className="w-5 h-5" />
                    <span className="font-medium">Kaggle</span>
                  </a>

                  {/* Hugging Face */}
                  <a href={contactInfo.huggingface} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-[#FFD21E] text-gray-300 hover:text-black rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">Hugging Face</span>
                  </a>
                </div>

              </div>
            </RevealOnScroll>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800 text-center pb-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gaurav Patil. Crafted with passion for AI/ML innovation.
          </p>
        </footer>
      </div>
    </div>
  );
};

// --- NEURON BACKGROUND COMPONENT  ---
const NeuronBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const neurons = useRef([]);
  const mouse = useRef({ x: null, y: null });

  const config = {
    neuronCount: 80,
    neuronRadius: 1.2,
    connectionDistance: 100,
    connectionLineWidth: 0.2,
    neuronColor: 'rgba(94, 234, 212, 0.6)',
    connectionColor: 'rgba(139, 92, 246, 0.3)',
    mouseInteractionRadius: 200, 
    neuronSpeed: 0.05,
  };

  const initNeurons = useCallback((canvas) => {
    const newNeurons = [];
    for (let i = 0; i < config.neuronCount; i++) {
      newNeurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.neuronSpeed,
        vy: (Math.random() - 0.5) * config.neuronSpeed,
        radius: config.neuronRadius,
      });
    }
    neurons.current = newNeurons;
  }, [config.neuronCount, config.neuronRadius, config.neuronSpeed]);

  const draw = useCallback((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    neurons.current.forEach(neuron => {
      neuron.x += neuron.vx;
      neuron.y += neuron.vy;

      if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
      if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

      if (mouse.current.x !== null && mouse.current.y !== null) {
        const dx = mouse.current.x - neuron.x;
        const dy = mouse.current.y - neuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseInteractionRadius) {
          const force = (1 - distance / config.mouseInteractionRadius) * 0.005; 
          neuron.vx -= dx * force; 
          neuron.vy -= dy * force;
        }
      }

      ctx.beginPath();
      ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
      ctx.fillStyle = config.neuronColor;
      ctx.fill();
    });

    for (let i = 0; i < neurons.current.length; i++) {
      for (let j = i + 1; j < neurons.current.length; j++) {
        const n1 = neurons.current[i];
        const n2 = neurons.current[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = config.connectionColor.replace('0.3', (0.5 - distance / config.connectionDistance).toFixed(2));
          ctx.lineWidth = config.connectionLineWidth;
          ctx.stroke();
        }
      }
    }
  }, [config]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    draw(ctx, canvas);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initNeurons(canvas);
    };

    setCanvasDimensions();

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', setCanvasDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, initNeurons]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default App;