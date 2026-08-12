import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate, 
  FaCode, 
  FaChartBar, 
  FaDatabase, 
  FaCheckCircle, 
  FaArrowRight, 
  FaBars, 
  FaTimes,
  FaBrain,
  FaRocket
} from 'react-icons/fa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle scroll effect for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUri = `mailto:shreyagodha11@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUri;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Skills Data
  const skillCategories = [
    {
      title: 'PROGRAMMING',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'C', level: 70 }
      ]
    },
    {
      title: 'DATA ANALYSIS',
      icon: <FaChartBar />,
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 85 }
      ]
    },
    {
      title: 'BUSINESS INTELLIGENCE',
      icon: <FaBriefcase />,
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Excel', level: 85 }
      ]
    },
    {
      title: 'DATABASES & TOOLS',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Git', level: 75 },
        { name: 'GitHub', level: 80 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      title: 'DATA & ANALYTICS CONCEPTS',
      icon: <FaBrain />,
      skills: [
        { name: 'Data Cleaning', level: 90 },
        { name: 'Data Transformation', level: 85 },
        { name: 'Exploratory Data Analysis', level: 90 },
        { name: 'Data Visualization', level: 90 },
        { name: 'Statistical Analysis', level: 75 },
        { name: 'KPI Reporting', level: 85 }
      ]
    }
  ];

  // Certifications Data
  const certificationsData = [
    {
      id: 'microsoft-python',
      title: 'Python Programming Fundamentals',
      provider: 'Microsoft | Coursera',
      category: 'Technical Certification',
      imgUrl: '/certificates/microsoft_certificate.png',
      fallbackIcon: <FaCertificate />
    },
    {
      id: 'deloitte-forage',
      title: 'Data Analytics Job Simulation',
      provider: 'Deloitte Australia — Forage',
      category: 'Practical Job Simulation',
      imgUrl: '/certificates/deloitte_certificate.png',
      fallbackIcon: <FaBriefcase />
    },
    {
      id: 'infosys-python',
      title: 'Basics of Python',
      provider: 'Infosys Springboard',
      category: 'Technical Credential',
      imgUrl: '/certificates/infosys_certificate.png',
      fallbackIcon: <FaCode />
    }
  ];

  return (
    <div className="portfolio-app">
      {/* ------------------- STICKY NAVIGATION BAR ------------------- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            <div className="logo-badge">SG</div>
            <span>SHREYA GODHA</span>
          </a>

          <ul className="nav-links">
            <li className="nav-item"><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li className="nav-item"><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li className="nav-item"><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li className="nav-item"><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li className="nav-item"><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li className="nav-item"><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li className="nav-item"><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a></li>
            <li className="nav-item"><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
            <li className="nav-item"><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>

          <div className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`overlay ${mobileMenuOpen ? 'visible' : ''}`} onClick={closeMobileMenu}></div>
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="close-drawer" onClick={closeMobileMenu}><FaTimes /></div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <li className="nav-item"><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li className="nav-item"><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
          <li className="nav-item"><a href="#education" onClick={closeMobileMenu}>Education</a></li>
          <li className="nav-item"><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li className="nav-item"><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
          <li className="nav-item"><a href="#certifications" onClick={closeMobileMenu}>Certifications</a></li>
          <li className="nav-item"><a href="#achievements" onClick={closeMobileMenu}>Achievements</a></li>
          <li className="nav-item"><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>

      {/* ------------------- HERO / LANDING PAGE ------------------- */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge-container">
              <div className="hero-sg-logo">SG</div>
            </div>
            
            <h1 className="hero-title">SHREYA GODHA</h1>
            
            <h2 className="hero-subtitle">
              Data Analyst | Data Science Enthusiast | AI/ML Enthusiast
            </h2>
            
            <p className="hero-description">
              Computer Science Engineering student with hands-on experience in data analysis, visualization, and business intelligence using Python, SQL, Power BI, and Excel. I enjoy working with real-world datasets, uncovering patterns through exploratory data analysis, and transforming information into clear, actionable insights. My experience includes building interactive dashboards, performing data cleaning and analysis, and developing data-driven projects using Python and SQL. I am currently expanding my expertise into AI/ML and computer vision through independent projects. I am passionate about solving real-world problems through data and continuously building practical technical skills.
            </p>

            <div className="hero-ctas">
              <a href="#about" className="btn-primary">
                Learn More About Me <FaArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Shreya-Godha11" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shreya-godha" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:shreyagodha11@gmail.com" className="social-icon-btn" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- ABOUT ME ------------------- */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Academic Excellence & Hands-on Analytics Expertise</p>
            <div className="title-underline"></div>
          </div>

          <div className="about-grid">
            {/* Left: Profile Photo & Navigation buttons */}
            <div className="about-photo-wrapper">
              <div className="profile-photo-container">
                <img src="/profile-photo.jpg" alt="Shreya Godha - Profile" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'; }} />
              </div>

              <div className="view-work-nav">
                <div className="view-work-title">View My Work</div>
                <a href="#experience" className="view-work-btn">
                  Work Experience <FaArrowRight />
                </a>
                <a href="#education" className="view-work-btn">
                  Education <FaArrowRight />
                </a>
                <a href="#projects" className="view-work-btn">
                  Projects <FaArrowRight />
                </a>
                <a href="#skills" className="view-work-btn">
                  Skills <FaArrowRight />
                </a>
                <a href="#certifications" className="view-work-btn">
                  Certifications <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Right: Summary, Mission & Vision */}
            <div className="about-info">
              <div className="about-card">
                <p className="about-summary-text">
                  I am a final-year Bachelor of Technology student in Computer Science Engineering at Walchand Institute of Technology, Solapur, currently maintaining a CGPA of 9.44/10. My primary interests lie in Data Analytics, Data Science, Business Intelligence, and AI/ML. I work with Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Power BI, Excel, and MySQL to analyze data, create visualizations, build dashboards, and derive meaningful insights. I have worked on projects involving e-commerce analytics, HR analytics, and computer vision-based attendance automation. Alongside analytics, I am exploring AI/ML and computer vision through independent projects to strengthen my ability to solve practical problems. What distinguishes me is my combination of strong academic performance, analytical thinking, hands-on project experience, and willingness to continuously learn and build.
                </p>
              </div>

              <div className="mission-vision-grid">
                {/* Mission 3D Flip Card */}
                <div className="perspective-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h4><FaRocket /> Mission</h4>
                      <p>Hover to reveal strategic objective</p>
                    </div>
                    <div className="flip-card-back">
                      <p>To use data, analytical thinking, and technology to transform complex information into meaningful insights and practical solutions.</p>
                    </div>
                  </div>
                </div>

                {/* Vision 3D Flip Card */}
                <div className="perspective-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h4><FaBrain /> Vision</h4>
                      <p>Hover to reveal career aspiration</p>
                    </div>
                    <div className="flip-card-back">
                      <p>To grow into a highly capable Data/AI professional who builds intelligent, impactful, and real-world technology solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- WORK EXPERIENCE ------------------- */}
      <section id="experience" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">Practical Industry Simulation & Applied Analytical Solutions</p>
            <div className="title-underline"></div>
          </div>

          <div className="experience-container">
            <div className="experience-card">
              <div className="exp-curtain-accent"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>Data Analytics Job Simulation</h3>
                    <div className="exp-company">Deloitte Australia — Forage</div>
                  </div>
                  <div className="exp-badge-group">
                    <span className="badge-pill accent">Job Simulation</span>
                    <span className="badge-pill">Remote</span>
                    <span className="badge-pill">December 2025</span>
                  </div>
                </div>

                <div className="exp-section-title">Key Responsibilities</div>
                <ul className="exp-bullet-list">
                  <li>Analyzed structured datasets to identify trends, inconsistencies, and potential risks using data analysis techniques.</li>
                  <li>Used Excel for data classification, validation, and analysis to derive business-focused insights.</li>
                  <li>Interpreted analytical findings and translated them into clear business-oriented insights.</li>
                  <li>Presented analytical findings clearly and concisely for effective communication.</li>
                </ul>

                <div className="exp-section-title">Key Achievements</div>
                <ul className="exp-bullet-list">
                  <li>Successfully completed a practical Deloitte Australia Data Analytics Job Simulation.</li>
                  <li>Applied data analysis and Excel-based analytical techniques to a business-focused scenario.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- EDUCATION ------------------- */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic Foundation & Computer Science Engineering</p>
            <div className="title-underline"></div>
          </div>

          <div className="education-container">
            <div className="education-card">
              <div className="edu-top-row">
                <div className="edu-title-group">
                  <h3>Bachelor of Technology — Computer Science Engineering</h3>
                  <div className="edu-institution">Walchand Institute of Technology, Solapur</div>
                </div>
                <div className="cgpa-badge">
                  <div className="cgpa-val">9.44 / 10</div>
                  <div className="cgpa-lbl">Current CGPA</div>
                </div>
              </div>

              <div className="edu-meta">
                <span><FaGraduationCap /> 2023 – Present</span>
                <span>Full-time</span>
                <span>Final Year</span>
              </div>

              <div className="exp-section-title">Key Highlights</div>
              <ul className="exp-bullet-list">
                <li>Strong academic performance with a current CGPA of 9.44/10.</li>
                <li>Building foundations across programming, databases, data analysis, visualization, and computer science concepts.</li>
                <li>Developing practical skills through analytics, dashboarding, AI/ML, and computer vision projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- PROJECTS ------------------- */}
      <section id="projects" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Data Analytics, Business Intelligence & Artificial Intelligence Implementations</p>
            <div className="title-underline"></div>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-header-bar">
                <span className="project-type-badge">Data Analysis / Business Analytics</span>
                <span className="project-status-pill">Completed</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">E-Commerce Data Analysis</h3>
                <p className="project-description">
                  Analyzed e-commerce transaction data using MySQL and Python to identify sales trends, customer behavior, and business performance patterns. Performed data cleaning, exploratory data analysis, and visualization to transform raw transaction data into meaningful business insights.
                </p>

                <div className="outcomes-title">Key Outcomes</div>
                <div className="outcomes-grid">
                  <div className="outcome-item"><FaCheckCircle /> Identified seasonal sales trends.</div>
                  <div className="outcome-item"><FaCheckCircle /> Analyzed high-performing products and categories.</div>
                  <div className="outcome-item"><FaCheckCircle /> Identified important customer and city segments.</div>
                  <div className="outcome-item"><FaCheckCircle /> Analyzed dominant payment methods and business performance patterns.</div>
                </div>

                <div className="project-tech-stack">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">SQL</span>
                  <span className="tech-pill">MySQL</span>
                  <span className="tech-pill">Pandas</span>
                  <span className="tech-pill">NumPy</span>
                  <span className="tech-pill">Matplotlib</span>
                  <span className="tech-pill">Seaborn</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-header-bar">
                <span className="project-type-badge">Business Intelligence / Data Visualization</span>
                <span className="project-status-pill">Completed</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">HR Analytics & Attrition Dashboard</h3>
                <p className="project-description">
                  Built an interactive HR analytics dashboard to analyze employee attrition, workforce composition, salary distribution, and employee demographics. Created KPI cards and interactive visualizations to provide a clear overview of workforce trends and attrition patterns.
                </p>

                <div className="outcomes-title">Key Outcomes</div>
                <div className="outcomes-grid">
                  <div className="outcome-item"><FaCheckCircle /> Created KPI cards for total employees, active employees, attrition count, attrition rate, average age, and average experience.</div>
                  <div className="outcome-item"><FaCheckCircle /> Analyzed employee attrition across departments and job roles.</div>
                  <div className="outcome-item"><FaCheckCircle /> Examined salary slabs, satisfaction levels, gender, age groups, and experience.</div>
                  <div className="outcome-item"><FaCheckCircle /> Built an interactive dashboard for exploring workforce trends.</div>
                </div>

                <div className="project-tech-stack">
                  <span className="tech-pill">Power BI</span>
                  <span className="tech-pill">Excel</span>
                  <span className="tech-pill">Data Analysis</span>
                  <span className="tech-pill">Data Visualization</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-header-bar">
                <span className="project-type-badge">AI / Computer Vision</span>
                <span className="project-status-pill">In Progress</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">Smart Attendance System</h3>
                <p className="project-description">
                  Developing an AI-based attendance system designed to identify multiple students from a classroom group photograph and automate attendance marking. The system uses a face-recognition pipeline to detect and match registered student faces and maintain attendance records.
                </p>

                <div className="outcomes-title">Key Outcomes</div>
                <div className="outcomes-grid">
                  <div className="outcome-item"><FaCheckCircle /> Developing multi-student identification from classroom photographs.</div>
                  <div className="outcome-item"><FaCheckCircle /> Building a face-recognition pipeline using dlib and computer vision techniques.</div>
                  <div className="outcome-item"><FaCheckCircle /> Designing a student registration workflow containing student images, names, and roll numbers.</div>
                  <div className="outcome-item"><FaCheckCircle /> Working toward automated attendance tracking based on recognized students.</div>
                </div>

                <div className="project-tech-stack">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">dlib</span>
                  <span className="tech-pill">Computer Vision</span>
                  <span className="tech-pill">Face Recognition</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-header-bar">
                <span className="project-type-badge">Final Year Major Project / AI-ML / Fraud Analytics</span>
                <span className="project-status-pill">Final Year Major Project</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">AI-Powered Banking Fraud Intelligence & Investigation Platform</h3>
                <p className="project-description">
                  An AI-powered banking fraud intelligence platform designed to go beyond basic fraud detection by combining machine learning, explainable AI, and graph analytics. The system uses transaction data, XGBoost-based fraud prediction, SHAP explanations, and NetworkX graph analytics to identify suspicious transaction patterns and potential fraud rings while providing investigators with interpretable risk intelligence.
                </p>

                <div className="outcomes-title">Key Features</div>
                <div className="outcomes-grid">
                  <div className="outcome-item"><FaCheckCircle /> AI-based fraud detection using XGBoost.</div>
                  <div className="outcome-item"><FaCheckCircle /> Explainable AI using SHAP to understand why transactions are considered suspicious.</div>
                  <div className="outcome-item"><FaCheckCircle /> Graph analytics using NetworkX to identify relationships and potential fraud rings.</div>
                  <div className="outcome-item"><FaCheckCircle /> Risk scoring and investigation-oriented analytics dashboard.</div>
                  <div className="outcome-item"><FaCheckCircle /> Interactive dashboard using Streamlit and Plotly.</div>
                  <div className="outcome-item"><FaCheckCircle /> PostgreSQL-based data storage and transaction analysis.</div>
                </div>

                <div className="project-tech-stack">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">PostgreSQL</span>
                  <span className="tech-pill">XGBoost</span>
                  <span className="tech-pill">SHAP</span>
                  <span className="tech-pill">NetworkX</span>
                  <span className="tech-pill">Streamlit</span>
                  <span className="tech-pill">Plotly</span>
                  <span className="tech-pill">Pandas</span>
                  <span className="tech-pill">Matplotlib</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- SKILLS ------------------- */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technical Competencies</h2>
            <p className="section-subtitle">Self-Assessed Proficiency Indicators Across Tech Stack & Concepts</p>
            <div className="title-underline"></div>
          </div>

          <div className="skills-categories-grid">
            {skillCategories.map((cat, idx) => (
              <div className="skill-category-card" key={idx}>
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">{cat.icon}</div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="skill-item-row" key={sIdx}>
                      <div className="skill-label-row">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlighted Skills Cloud */}
          <div className="skills-highlight-panel">
            <h3 className="skills-highlight-title">Core Highlighted Competencies</h3>
            <div className="skills-tags-cloud">
              <span className="highlight-tag">Python</span>
              <span className="highlight-tag">SQL</span>
              <span className="highlight-tag">Pandas</span>
              <span className="highlight-tag">NumPy</span>
              <span className="highlight-tag">Power BI</span>
              <span className="highlight-tag">Excel</span>
              <span className="highlight-tag">MySQL</span>
              <span className="highlight-tag">Data Analysis</span>
              <span className="highlight-tag">Data Visualization</span>
              <span className="highlight-tag developing">Machine Learning</span>
              <span className="highlight-tag developing">Computer Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- CERTIFICATIONS ------------------- */}
      <section id="certifications" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications & Credentials</h2>
            <p className="section-subtitle">Verified Professional Credentials & Applied Industry Simulations</p>
            <div className="title-underline"></div>
          </div>

          <div className="certs-grid">
            {certificationsData.map((cert) => (
              <div className="cert-card" key={cert.id}>
                <div className="cert-header">
                  <div className="cert-provider">{cert.provider}</div>
                  <h3 className="cert-name">{cert.title}</h3>
                </div>
                <div className="cert-body">
                  <div className="cert-badge-preview">
                    <img 
                      src={cert.imgUrl} 
                      alt={cert.title} 
                      onError={(e) => { 
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div style="font-size:3rem;color:var(--primary-dark);display:flex;align-items:center;justify-content:center;height:100%;"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></div>`;
                      }} 
                    />
                  </div>

                  <button className="cert-btn" onClick={() => setSelectedCert(cert)}>
                    <FaCertificate /> View Credential Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- ACHIEVEMENTS & RECOGNITION ------------------- */}
      <section id="achievements" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Achievements & Recognition</h2>
            <p className="section-subtitle">Academic performance, continuous learning, and hands-on technical development.</p>
            <div className="title-underline"></div>
          </div>

          {/* Portfolio Highlights Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">9.44/10</div>
              <div className="stat-label">Current CGPA</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Certifications & Credentials</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2023</div>
              <div className="stat-label">Started B.Tech</div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="achievements-cards-grid">
            <div className="achievement-card">
              <span className="ach-category-badge">Academic</span>
              <h3 className="ach-title">9.44/10 Academic Performance</h3>
              <div className="ach-institution">Walchand Institute of Technology, Solapur</div>
              <p className="ach-description">
                Maintaining a strong academic record while simultaneously developing practical skills through data analytics, business intelligence, AI/ML, and computer vision projects.
              </p>
            </div>

            <div className="achievement-card">
              <span className="ach-category-badge">Academic / Technical</span>
              <h3 className="ach-title">Hands-on Data Analytics Portfolio</h3>
              <div className="ach-institution">Independent / Academic Projects</div>
              <p className="ach-description">
                Developed practical projects covering e-commerce analytics, HR analytics dashboards, computer vision, and an AI-powered banking fraud intelligence platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- CONTACT ------------------- */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Build Something Meaningful</h2>
            <p className="section-subtitle">
              Have a project idea, internship opportunity, collaboration proposal, or simply want to connect? I'd love to hear from you.
            </p>
            <div className="title-underline"></div>
          </div>

          <div className="contact-grid">
            {/* Left Column: Form */}
            <div className="contact-form-card">
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={formData.fullName} 
                    onChange={handleFormChange}
                  />
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <div className="form-underline"></div>
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={formData.email} 
                    onChange={handleFormChange}
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="form-underline"></div>
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={formData.subject} 
                    onChange={handleFormChange}
                  />
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <div className="form-underline"></div>
                </div>

                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={formData.message} 
                    onChange={handleFormChange}
                  ></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
                  <div className="form-underline"></div>
                </div>

                <button type="submit" className="send-btn">
                  Send Message <FaArrowRight />
                </button>

                {formSubmitted && (
                  <div style={{ color: 'var(--primary-dark)', fontWeight: '600', marginTop: '1rem' }}>
                    Thank you! Preparing your message email client...
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Contact Information Panel */}
            <div className="contact-info-panel">
              <div className="info-header">
                <h3>Contact Information</h3>
                <p>Feel free to reach out directly via email, phone, or professional networks.</p>
              </div>

              <div className="contact-rows-list">
                <a href="mailto:shreyagodha11@gmail.com" className="contact-row-item">
                  <div className="contact-icon-box"><FaEnvelope /></div>
                  <div>
                    <div className="contact-lbl">Email</div>
                    <div className="contact-val">shreyagodha11@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+918623958399" className="contact-row-item">
                  <div className="contact-icon-box"><FaPhoneAlt /></div>
                  <div>
                    <div className="contact-lbl">Phone</div>
                    <div className="contact-val">+91-8623958399</div>
                  </div>
                </a>

                <div className="contact-row-item">
                  <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="contact-lbl">Location</div>
                    <div className="contact-val">Solapur, Maharashtra, India</div>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/shreya-godha" target="_blank" rel="noopener noreferrer" className="contact-row-item">
                  <div className="contact-icon-box"><FaLinkedin /></div>
                  <div>
                    <div className="contact-lbl">LinkedIn</div>
                    <div className="contact-val">shreya-godha</div>
                  </div>
                </a>

                <a href="https://github.com/Shreya-Godha11" target="_blank" rel="noopener noreferrer" className="contact-row-item">
                  <div className="contact-icon-box"><FaGithub /></div>
                  <div>
                    <div className="contact-lbl">GitHub</div>
                    <div className="contact-val">Shreya-Godha11</div>
                  </div>
                </a>
              </div>

              <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--light-grey)' }}>
                Solapur, Maharashtra, India • Available for early-career roles & internships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- FOOTER ------------------- */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">SHREYA GODHA</div>
          <p className="footer-tagline">
            "Turning data into insights and ideas into intelligent solutions."
          </p>

          <div className="social-links">
            <a href="https://github.com/Shreya-Godha11" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shreya-godha" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:shreyagodha11@gmail.com" className="social-icon-btn" title="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-divider"></div>

          <p className="footer-copyright">
            © 2026 Shreya Godha. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h4>{selectedCert.title}</h4>
              <span className="cert-modal-close" onClick={() => setSelectedCert(null)}><FaTimes /></span>
            </div>
            <div className="cert-modal-body">
              <p style={{ color: 'var(--muted-grey)', marginBottom: '1rem', fontWeight: '600' }}>
                Issued by {selectedCert.provider} ({selectedCert.category})
              </p>
              <img src={selectedCert.imgUrl} alt={selectedCert.title} className="cert-modal-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1589330694653-aded6fac0244?q=80&w=800&auto=format&fit=crop'; }} />
              <div style={{ marginTop: '1.5rem' }}>
                <button className="btn-primary" onClick={() => setSelectedCert(null)}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
