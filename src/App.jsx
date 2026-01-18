import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown, ExternalLink } from 'lucide-react';
import chatImg from './assets/chat.png';
import travelImg from './assets/travel.jpg';
import proImg from './assets/proj_5.jpg';
import myImage from './assets/about-me.png'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' }
    ]
  };

  const projects = [
    {
      title: 'ChatZone',
      description: 'Built a real-time chat application using the MERN stack enabling realtime communication via Socket.IO allowing users to join specific chat rooms and exchange messages dynamically',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: chatImg,
      github: 'https://github.com/kalpanaCharpe/ChatZone',
      live: 'https://chatzone-lob6.onrender.com/'
    },
    {
      title: 'Travel and Stay',
      description: 'Developed a full-stack travel booking web application using Node.js, Express, and MongoDB, enabling users to search, book, and manage travel accommodations.',
      tech: ['Node.js', 'MongoDB', 'Express.js'],
      image: travelImg,
      github: 'https://github.com/kalpanaCharpe/Travel-and-Stay',
      live: 'https://travel-and-stay-99vi.onrender.com/listings'
    },
    {
      title: 'Pro-Linker',
      description: 'Developed a full-stack networking application using Next.js, Node.js, and MongoDB, enabling secure authentication, profile creation, and interactive features like commenting and liking.',
      tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: proImg,
      github: 'https://github.com/kalpanaCharpe/Pro-Linker',
      live: 'https://pro-linker-ashy.vercel.app/'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Sage University Indore',
      year: '2022 - 2026',
      description: 'Specialized in Software Engineering'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'St. Francis Hr. Sec. School, Pithampur',
      year: '2021 - 2022',
      // description: 'Mathematics and Computer Science'
    }
  ];

  const githubStats = {
    contributions: 1234,
    stars: 567,
    repositories: 42
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-teal-600">
              Kalpana Charpe
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-100 rounded-full">
            <span className="text-sm font-medium text-teal-600">
              Full-Stack Developer
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900">Hi, I'm</span>
            <span className="block text-teal-600">
              Kalpana Charpe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate MERN Stack Developer crafting digital experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/kalpanaCharpe" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all">
              <Github className="text-gray-700" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kalpana-charpe-436809331/" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all">
              <Linkedin className="text-teal-600" size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown className="text-teal-600" size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-teal-600">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/image.png"
                  alt= "Profile"
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                B.Tech Computer Engineering (Software Engineering) student with hands-on experience in web development, Node.js, and GitHub.
Quick learner, problem-solver, and passionate about building scalable, user-friendly web applications and
continuously improve my skills by working on real projects. 
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
               Eager to contribute to a dynamic development
team and grow as a professional software engineer.
      
              </p>

              <div className="flex gap-4">
                <a href="https://drive.google.com/file/d/1MFZ8KEvD2m3kZs09iQA8AChjjbLWk4Vu/view?usp=sharing">
                <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-teal-600">
            Education
          </h2>
          <p className="text-center text-gray-600 mb-16">My academic background</p>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-teal-600 font-semibold mt-2 md:mt-0">{edu.year}</span>
                </div>
                <p className="text-lg text-teal-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-teal-600">
            Skills and  Technologies
          </h2>
          <p className="text-center text-gray-600 mb-16">Technologies I use to bring ideas to life</p>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-6 capitalize text-gray-900">
                  {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend & Database' : 'Tools & Platforms'}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center w-32"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-16 h-16 mb-3 object-contain"
                      />
                      <span className="text-sm font-semibold text-gray-800 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-teal-600">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-16">A showcase of my recent work</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-teal-600 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-teal-600 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contribution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gray-900">My </span>
            <span className="text-teal-600">Contributions</span>
          </h2>

          {/* GitHub Stats Cards - All in one row */}
          {/* <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center flex-1 min-w-[180px] max-w-[250px]">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{githubStats.contributions.toLocaleString()}</h3>
              <p className="text-gray-600 font-medium text-sm">Contributions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center flex-1 min-w-[180px] max-w-[250px]">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{githubStats.stars.toLocaleString()}</h3>
              <p className="text-gray-600 font-medium text-sm">Stars Earned</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center flex-1 min-w-[180px] max-w-[250px]">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{githubStats.repositories}</h3>
              <p className="text-gray-600 font-medium text-sm">Repositories</p>
            </div>
          </div> */}

          {/* Contribution Calendar */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Github className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Contribution Calendar</h3>
                <p className="text-gray-600">@kalpanaCharpe</p>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <img
                src="https://ghchart.rshah.org/0d9488/kalpanaCharpe"
                alt="GitHub Contribution Chart"
                className="w-full max-w-4xl rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=default&hide_border=true';
                }}
              />
            </div>

            <div className="text-center">
              <a 
                href="https://github.com/kalpanaCharpe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                <Github size={20} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Ready to bring your ideas to life? Get in touch with me
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
              <MapPin className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-xs text-white/70">Location</div>
                <div className="text-white font-semibold">Indore, India</div>
              </div>
            </a>

            <a href="mailto:kcharpe123@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
              <Mail className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-xs text-white/70">Email</div>
                <div className="text-white font-semibold">kcharpe123@gmail.com</div>
              </div>
            </a>

            <a href="tel:+91-9589327930" className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
              <Phone className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-xs text-white/70">Phone</div>
                <div className="text-white font-semibold">+91-9589327930</div>
              </div>
            </a>

            <a href="https://drive.google.com/file/d/1MFZ8KEvD2m3kZs09iQA8AChjjbLWk4Vu/view?usp=sharing" className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
              <Download className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-xs text-white/70">Resume</div>
                <div className="text-white font-semibold">Download Resume</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">© 2025 Kalpana Charpe. Built with React & Tailwind CSS</p>
            
            <div className="flex justify-center gap-6">
              <a href="https://github.com/kalpanaCharpe" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-all hover:scale-110">
                <Github className="text-white" size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kalpana-charpe-436809331/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-all hover:scale-110">
                <Linkedin className="text-white" size={20} />
              </a>
              <a href="https://leetcode.com/u/kalpana_charpe_28/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-all hover:scale-110" title="LeetCode Profile">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
              <a href="mailto:kcharpe123@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-all hover:scale-110">
                <Mail className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}