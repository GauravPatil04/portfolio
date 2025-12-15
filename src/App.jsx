import React, { useEffect, useRef, useState, useCallback } from 'react';
// Import Lucide React icons
import { Code, GitBranch, Database, Cpu, Cloud, Zap, LayoutDashboard, GraduationCap, Briefcase, Star, Smile, Activity, Anchor, Users } from 'lucide-react'; // <-- Added Users here

// --- MAIN APP COMPONENT ---
const App = () => {
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    console.log("App component mounted.");
  }, []);

  // Data based on Gaurav Patil's Resume
  const contactInfo = {
    name: "Gaurav Patil",
    handle: "AI/ML Engineer Aspirant",
    phone: "+91-9158437110",
    email: "gauravsp004@gmail.com",
    linkedin: "LinkedIn", // Replace with actual URL if known
    github: "GitHub", // Replace with actual URL if known
    location: "Kolhapur, Maharashtra",
  };

  const professionalSummary = `Final-year Computer Science student specializing in Artificial Intelligence and Machine Learning. Proficient in Python, TensorFlow, and scikit-learn, with hands-on experience in developing data-driven solutions. Skilled in Data Structures and Algorithms with 100+ problems solved on LeetCode. Eager to apply strong analytical and problem-solving skills in an AI/ML Engineer role to contribute to innovative projects.`;

  const education = {
    institution: "Sanjay Ghodawat University",
    degree: "Bachelor of Technology (B. Tech) in Artificial Intelligence & Machine Learning",
    gpa: "3.3/10 (Cumulative GPA)",
  };

  const technicalSkills = [
    { type: "Languages", skills: "Python, SQL" },
    { type: "Libraries & Frameworks", skills: "TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn" },
    { type: "Tools & Technologies", skills: "Git, GitHub, Docker (from Cubicles Club)" },
    { type: "Databases", skills: "MySQL" },
  ];

  const projects = [
    {
      title: "AI Music Recommendation System",
      location: "Kolhapur Maharashtra",
      description: [
        "Developed a real-time AI system that recommends music by analyzing facial expressions through a webcam.",
        "Built and trained a Convolutional Neural Network (CNN) using TensorFlow and OpenCV, for classifying emotions like happy, sad, and neutral.",
        "Integrated the emotion detection model to dynamically create and suggest playlists that match the user's current mood.",
      ],
      icon: <Smile className="w-6 h-6 mr-2 text-teal-300" />
    },
    {
      title: "Diet Guru: Personalized Nutrition Planner",
      location: "",
      description: [
        "Designed and developed a personalized diet recommendation system to generate meal plans based on user health goals, dietary restrictions, and preferences.",
        "Utilized content-based filtering algorithms with Scikit-learn to match user profiles against a nutritional database for different food items.",
      ],
      icon: <Activity className="w-6 h-6 mr-2 text-purple-300" />
    },
  ];

  const activities = [
    {
      title: "NSS Volunteer",
      duration: "2024-Present",
      description: [
        "Contributed to community service initiatives, including cleanliness drives and public awareness campaigns.",
        "Collaborated with a team to organize and execute local community events, enhancing organizational and teamwork skills.",
      ],
      icon: <Anchor className="w-6 h-6 mr-2 text-yellow-300" />
    },
    {
      title: "Cubicles Club",
      duration: "2024-Present",
      description: [
        "Actively participated in workshops on emerging technologies like Docker and Git & GitHub.",
        "Collaborated with peers in coding mini-projects, fostering practical problem-solving skills.",
      ],
      icon: <Code className="w-6 h-6 mr-2 text-red-300" />
    },
  ];

  // Updated Navigation Links
  const navLinks = [
    { id: 'about', label: 'Summary' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter relative overflow-hidden">
      {/* Global font style */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Neuron background component */}
      <NeuronBackground />

      {/* Main content container (Responsive) */}
      <div className="relative z-10 p-4 md:p-8 max-w-6xl mx-auto">
        {/* Header section (Responsive) */}
        <header id="home" className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl mb-8 border-b border-gray-700/50">
          <h1 className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-4 md:mb-0">
            {contactInfo.name}
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="px-3 py-1 rounded-full text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero & Professional Summary Section */}
        <section id="about" className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            
            {/* Left Column: Contact and Profile */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left p-4 bg-gray-700 rounded-lg shadow-md">
              <div className="w-32 h-32 mb-4 flex-shrink-0 rounded-full overflow-hidden border-4 border-teal-400 shadow-xl">
                <img
                  src="https://placehold.co/128x128/4A00B0/FFFFFF?text=GP"
                  alt={`${contactInfo.name} Profile`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/128x128/4A00B0/FFFFFF?text=GP"; }}
                />
              </div>
              <h2 className="text-3xl font-bold text-white">{contactInfo.name}</h2>
              <p className="text-md text-teal-300 mb-4">{contactInfo.handle}</p>
              
              <div className="text-sm text-gray-400 space-y-1">
                <p>Location: {contactInfo.location}</p>
                <p>Phone: {contactInfo.phone}</p>
                <p>Email: {contactInfo.email}</p>
              </div>

              <div className="mt-4 flex gap-4">
                 {/* LinkedIn Icon */}
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                {/* GitHub Icon */}
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.25-1.15.25-2.39 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.1-.3 2.3 0 3.5A5.4 5.4 0 0 0 4 12.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>

            {/* Right Column: Summary Text */}
            <div className="w-full lg:w-2/3 pt-4 lg:pt-0">
              <h3 className="text-3xl font-bold text-purple-400 mb-4 border-b border-gray-700 pb-2 flex items-center">
                <Briefcase className="w-6 h-6 mr-2"/> PROFESSIONAL SUMMARY
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {professionalSummary}
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 md:px-8 bg-gray-900/70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-teal-300 mb-8 text-center flex justify-center items-center">
            <GraduationCap className="w-8 h-8 mr-3"/> EDUCATION
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-teal-500">
            <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="text-xl text-purple-400 mb-2">{education.institution}</p>
            <p className="text-md text-gray-400">GPA: {education.gpa}</p>
            <p className="text-md text-gray-400 mt-1">Location: Kolhapur, Maharashtra</p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-purple-400 mb-8 text-center flex justify-center items-center">
            <Cpu className="w-8 h-8 mr-3"/> TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((section, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-700 rounded-xl shadow-md border-b-2 border-teal-500"
              >
                <h3 className="text-xl font-bold text-teal-300 mb-3">{section.type}</h3>
                <p className="text-lg text-gray-200">{section.skills}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 md:px-8 bg-gray-900/70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-teal-300 mb-10 text-center flex justify-center items-center">
            <LayoutDashboard className="w-8 h-8 mr-3"/> PROJECTS
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                  {project.icon} {project.title}
                </h3>
                {project.location && <p className="text-sm text-gray-400 mb-3">{project.location}</p>}
                
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-base leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Activities & Leadership Section (Renamed from Open Source/Experience placeholders) */}
        <section id="activities" className="py-16 px-4 md:px-8 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-purple-400 mb-8 text-center flex justify-center items-center">
            <Users className="w-8 h-8 mr-3"/> ACTIVITIES & LEADERSHIP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-700 rounded-xl shadow-md border-r-4 border-pink-500"
              >
                <h3 className="text-xl font-bold text-teal-300 mb-1 flex items-center">
                  {activity.icon} {activity.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{activity.duration}</p>
                <ul className="space-y-1 text-gray-300 list-disc list-inside text-sm">
                  {activity.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-teal-300 mb-3">Interests</h3>
            <p className="text-lg text-gray-300">⚽ Football & 🏞️ Hiking</p>
          </div>
        </section>


        {/* Contact section */}
        <section id="contact" className="py-16 px-4 md:px-8 bg-gray-900/70 rounded-xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-4xl font-bold text-teal-300 mb-6 text-center">Contact Me</h2>
          <div className="text-center text-lg text-gray-300">
            <p className="mb-4">I'm actively seeking an AI/ML Engineer role. Feel free to connect regarding opportunities or collaborations!</p>
            <p className="mb-2">
              Email: <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:underline">{contactInfo.email}</a>
            </p>
            <p className="mb-4">
              Phone: <span className="text-purple-400">{contactInfo.phone}</span>
            </p>
            <div className="flex justify-center gap-6 mt-4">
              {/* LinkedIn icon */}
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* GitHub icon */}
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.25-1.15.25-2.39 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.1-.3 2.3 0 3.5A5.4 5.4 0 0 0 4 12.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 px-4 md:px-8 bg-gray-900 bg-opacity-70 rounded-xl shadow-lg mt-8">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Gaurav Patil. Inspired by ML. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// --- NEURON BACKGROUND COMPONENT (Kept as requested) ---
const NeuronBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const neurons = useRef([]);
  const mouse = useRef({ x: null, y: null });

  // Configuration for the neuron animation
  const config = {
    neuronCount: 100, // Number of neurons
    neuronRadius: 1.5, // Radius of each neuron
    connectionDistance: 120, // Max distance for neurons to connect
    connectionLineWidth: 0.3, // Line width for connections
    neuronColor: 'rgba(100, 255, 218, 0.8)', // Teal color for neurons
    connectionColor: 'rgba(147, 197, 253, 0.5)', // Light blue for connections
    mouseInteractionRadius: 200, // Radius around mouse for neuron attraction/repulsion
    neuronSpeed: 0.1, // Base speed of neuron movement
  };

  // Function to initialize neurons
  const initNeurons = useCallback((canvas) => {
    try {
      const newNeurons = [];
      for (let i = 0; i < config.neuronCount; i++) {
        newNeurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Random initial velocity
          vx: (Math.random() - 0.5) * config.neuronSpeed * 2,
          vy: (Math.random() - 0.5) * config.neuronSpeed * 2,
          radius: config.neuronRadius,
          // Store original position for reset or oscillation
          ox: Math.random() * canvas.width,
          oy: Math.random() * canvas.height,
        });
      }
      neurons.current = newNeurons;
    } catch (error) {
      console.error("Error initializing neurons:", error);
    }
  }, [config.neuronCount, config.neuronRadius, config.neuronSpeed]);

  // Function to draw everything on the canvas
  const draw = useCallback((ctx, canvas) => {
    try {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw neurons
      neurons.current.forEach(neuron => {
        // Update neuron position
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Bounce off walls
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

        // Simple attraction/repulsion from mouse
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - neuron.x;
          const dy = mouse.current.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.mouseInteractionRadius) {
            const force = (1 - distance / config.mouseInteractionRadius) * 0.005; // Adjust force strength
            neuron.vx -= dx * force;
            neuron.vy -= dy * force;
          }
        }

        // Draw neuron
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
        ctx.fillStyle = config.neuronColor;
        ctx.fill();
      });

      // Draw connections between neurons
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
            // Connection opacity based on distance
            ctx.strokeStyle = config.connectionColor.replace('0.5', (1 - distance / config.connectionDistance).toFixed(2));
            ctx.lineWidth = config.connectionLineWidth;
            ctx.stroke();
          }
        }
      }
    } catch (error) {
      console.error("Error in draw function:", error);
    }
  }, [config.connectionDistance, config.connectionLineWidth, config.neuronColor, config.connectionColor, config.mouseInteractionRadius]);

  // Animation loop
  const animate = useCallback(() => {
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      draw(ctx, canvas);
      animationFrameId.current = requestAnimationFrame(animate);
    } catch (error) {
      console.error("Error in animate loop:", error);
    }
  }, [draw]);

  // Effect for canvas setup and animation start
  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      // Ensure canvas and its context are available
      if (!canvas) {
        console.warn("Canvas element not available.");
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error("2D context not available for canvas.");
        return;
      }

      // Set canvas dimensions to fill the window
      const setCanvasDimensions = () => {
        try {
          canvas.width = window.innerWidth;
          // Use document.body.scrollHeight to account for dynamic content height
          canvas.height = Math.max(document.body.scrollHeight, window.innerHeight); 
          initNeurons(canvas); // Re-initialize neurons on resize
        } catch (error) {
          console.error("Error setting canvas dimensions or initializing neurons on resize:", error);
        }
      };

      setCanvasDimensions(); // Initial set

      // Event listener for window resize
      window.addEventListener('resize', setCanvasDimensions);

      // Event listener for mouse movement
      const handleMouseMove = (e) => {
        mouse.current = { x: e.clientX, y: e.clientY + window.scrollY }; // Adjust for scroll position
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Start animation
      animationFrameId.current = requestAnimationFrame(animate);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', setCanvasDimensions);
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        console.log("NeuronBackground cleanup completed.");
      };
    } catch (error) {
      console.error("Error in NeuronBackground useEffect:", error);
    }
  }, [animate, initNeurons]); // Dependencies for useEffect

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }} // Ensure canvas is behind content
    ></canvas>
  );
};

export default App;