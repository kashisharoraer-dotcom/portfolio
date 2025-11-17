import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  Calendar,
  ArrowRight,
  Settings,
  TrendingUp,
  Brain,
  ChevronUp,
  ExternalLink,
  Code,
  Users,
  FileText,
  Award,
  Target,
  CheckCircle
} from 'lucide-react';
import { personalInfo, skills, experience, education, certifications, projects, services } from '../data/mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'services', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const IconComponent = ({ name, size = 24, ...props }) => {
    const icons = {
      Settings,
      TrendingUp,
      Brain,
      Code,
      Users,
      FileText,
      Award,
      Target,
      CheckCircle
    };
    const Icon = icons[name] || Settings;
    return <Icon size={size} {...props} />;
  };

  return (
    <div className="portfolio">
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header">
        <nav className="container py-4">
          <div className="flex justify-between items-center">
            <div className="h3 float-animation">{personalInfo.name}</div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Experience', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`body-md transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-accent-blue font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={{ 
                    color: activeSection === item.toLowerCase() ? 'var(--accent-blue)' : 'var(--text-secondary)'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center pad-2xl hero-gradient relative">
        <div className="container animate-fade-in relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card mb-8 float-animation">
              <h1 className="display-lg mb-6">{personalInfo.name}</h1>
              <h2 className="display-sm mb-8" style={{ color: 'var(--accent-blue)' }}>{personalInfo.title}</h2>
              <p className="body-lg mb-12 max-w-2xl mx-auto">{personalInfo.bio}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary hover-lift"
              >
                <Calendar size={20} />
                Book a Call
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="btn-secondary hover-lift"
                download
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center items-center gap-6">
              <a href={`mailto:${personalInfo.email}`} className="btn-ghost hover-lift">
                <Mail size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost hover-lift">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pad-2xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6 animate-fade-in">About Me</h2>
            <p className="body-lg max-w-3xl mx-auto animate-fade-in">
             I am a Salesforce Business Analyst with hands-on experience leading end-to-end project delivery across multiple Salesforce Clouds for non-profit, government, and manufacturing clients. I specialize in translating complex business requirements into scalable, user-focused Salesforce solutions that improve processes, reduce manual work, and enhance overall productivity.

            I have led discovery workshops, mapped business processes, and converted requirements into clear user stories, BRDs, acceptance criteria, and solution documents. Working in Agile environments, I manage full delivery cycles, coordinating with developers, designers, QA teams, and clients to ensure every sprint lands on time and aligns with the business goals.

          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="h3 mb-6">Professional Journey</h3>
              <p className="body-md mb-6">
                

Led requirement-gathering and discovery sessions to identify business challenges and define solution approaches.
Designed end-to-end process flows, data models, and functional specifications for onboarding, loan lifecycle journeys, deduplication logic, and operational workflows.
Created detailed user stories, BRDs, training guides, UAT scenarios, and post-deployment documentation.
Collaborated with cross-functional teams (10+ members) to ensure seamless sprint planning, execution, and release management.
Supported multiple projects simultaneously, managing stakeholder expectations and maintaining clear communication.
Ensured solutions were scalable, user-friendly, and aligned with both technical constraints and business objectives.
Used tools like Jira, Zoho Projects to track progress, ensure traceability, and maintain delivery accountability.


              </p>
              <p className="body-md mb-8">
                I like bringing clarity to complex requirements, breaking down flows step-by-step, and making sure everyone: users, tech team, and business, is on the same page.
                I enjoy being the bridge between people and processes, and making sure the solution isn’t just built, but built right.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="glass-card text-center hover-lift">
                  <h4 className="h4 mb-2" style={{ color: 'var(--accent-blue)' }}>7+</h4>
                  <p className="body-sm">Certifications</p>
                </div>
                <div className="glass-card text-center hover-lift">
                  <h4 className="h4 mb-2" style={{ color: 'var(--accent-blue)' }}>1.5+</h4>
                  <p className="body-sm">Years Experience</p>
                </div>
              </div>
            </div>
            
            <div className="feature-card animate-fade-in hover-lift">
              <h4 className="h4 mb-4">Education & Certifications</h4>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h5 className="h4 mb-2">{edu.degree}</h5>
                  <p className="body-sm mb-1" style={{ color: 'var(--accent-blue)' }}>{edu.institution}</p>
                  <p className="body-sm">{edu.duration}</p>
                </div>
              ))}
              
              <div className="mt-8">
                <h5 className="h4 mb-4">Key Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <span key={index} className="px-3 py-1 rounded-lg text-sm hover-lift" style={{ 
                      backgroundColor: 'var(--accent-blue-bg)', 
                      color: 'var(--accent-blue)' 
                    }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pad-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Skills & Expertise</h2>
            <p className="body-lg max-w-2xl mx-auto">
              A comprehensive skill set spanning technical implementation, business analysis, and project management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="feature-card hover-lift">
              <div className="flex items-center mb-6">
                <Code size={32} style={{ color: 'var(--accent-blue)' }} className="mr-4" />
                <h3 className="h3">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                    <span className="body-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="feature-card hover-lift">
              <div className="flex items-center mb-6">
                <Target size={32} style={{ color: 'var(--accent-blue)' }} className="mr-4" />
                <h3 className="h3">Project Management Skills</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {skills.projectManagement.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                    <span className="body-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pad-2xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Professional Experience</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Building impactful solutions across various industries and project scales.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="feature-card hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="h3 mb-2">{exp.role}</h3>
                    <h4 className="h4 mb-2" style={{ color: 'var(--accent-blue)' }}>{exp.company}</h4>
                    <p className="body-sm">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 rounded-lg body-sm glass-card" style={{ 
                      backgroundColor: 'var(--accent-blue-bg)', 
                      color: 'var(--accent-blue)' 
                    }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3">
                      <CheckCircle size={16} style={{ color: 'var(--accent-blue)' }} className="mt-1 flex-shrink-0" />
                      <p className="body-md">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pad-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Services</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Comprehensive Salesforce and business analysis services to transform your organization.
            </p>
          </div>
          
          <div className="card-grid-3">
            {services.map((service, index) => (
              <div key={service.id} className="feature-card hover-lift">
                <div className="mb-6">
                  <IconComponent name={service.icon} size={48} style={{ color: 'var(--accent-blue)' }} />
                </div>
                
                <h3 className="h3 mb-4">{service.title}</h3>
                <p className="body-md mb-6">{service.description}</p>
                
                <div className="mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                      <span className="body-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pad-2xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Featured Projects</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Showcasing impactful Salesforce implementations and business transformations.
            </p>
          </div>
          
          <div className="card-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="feature-card hover-lift">
                <div className="mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs rounded hover-lift" style={{ 
                      backgroundColor: 'var(--accent-blue-bg)', 
                      color: 'var(--accent-blue)' 
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="h3 mb-2">{project.title}</h3>
                <p className="body-sm mb-4" style={{ color: 'var(--accent-blue)' }}>{project.subtitle}</p>
                <p className="body-md mb-6">{project.problem}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center glass-card hover-lift">
                      <p className="h4" style={{ color: 'var(--accent-blue)' }}>{value}</p>
                      <p className="body-sm">{key}</p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Profile Section */}
      <section className="pad-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Professional Network</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Connect with me on LinkedIn to stay updated with my professional journey and insights.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="linkedin-embed feature-card hover-lift text-center">
              <div className="flex items-center justify-center mb-6">
                <Linkedin size={48} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="h3 mb-4">Connect on LinkedIn</h3>
              <p className="body-md mb-8">
                Follow my professional journey, connect with my network, and stay updated with the latest insights 
                in Salesforce and business analysis.
              </p>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary hover-lift"
              >
                <Linkedin size={20} />
                View LinkedIn Profile
              </a>
              <div className="mt-8">
                <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                  🌟 7+ Professional Certifications | 1.5+ Years Experience | 50+ Connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pad-2xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1 mb-6">Let's Work Together</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Ready to transform your business processes with Salesforce? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="feature-card hover-lift">
              <h3 className="h3 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center glass-card" style={{ backgroundColor: 'var(--accent-blue-bg)' }}>
                    <Mail size={24} style={{ color: 'var(--accent-blue)' }} />
                  </div>
                  <div>
                    <p className="body-sm" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <p className="body-md">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center glass-card" style={{ backgroundColor: 'var(--accent-blue-bg)' }}>
                    <Linkedin size={24} style={{ color: 'var(--accent-blue)' }} />
                  </div>
                  <div>
                    <p className="body-sm" style={{ color: 'var(--text-muted)' }}>LinkedIn</p>
                    <p className="body-md">Connect with me</p>
                  </div>
                </div>
              </div>
              
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary hover-lift">
                  <Mail size={20} />
                  Send Email
                </a>
                <a href={personalInfo.calendlyUrl} className="btn-secondary hover-lift">
                  <Calendar size={20} />
                  Schedule Call
                </a>
              </div>
            </div>
            
            <div className="feature-card hover-lift">
              <h3 className="h3 mb-6">Quick Contact</h3>
              <form className="space-y-6">
                <div>
                  <label className="block body-sm mb-2">Name *</label>
                  <input 
                    type="text" 
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block body-sm mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="input-field"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block body-sm mb-2">Project Type</label>
                  <select className="input-field">
                    <option>Salesforce Implementation</option>
                    <option>Business Process Optimization</option>
                    <option>AI Training & Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block body-sm mb-2">Message *</label>
                  <textarea 
                    rows={4}
                    className="input-field"
                    placeholder="Tell me about your project requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full hover-lift">
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pad-2xl border-t" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="h3 mb-4">{personalInfo.name}</h3>
              <p className="body-md mb-6" style={{ color: 'var(--text-secondary)' }}>
                Salesforce Business Analyst specializing in transforming complex business requirements 
                into scalable, user-centric CRM solutions.
              </p>
                <div className="flex gap-4">
                <a href={`mailto:${personalInfo.email}`} className="btn-ghost hover-lift">
                  <Mail size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost hover-lift">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="h4 mb-4">Services</h4>
              <div className="space-y-2">
                <p className="body-sm hover:text-accent-blue cursor-pointer transition-colors">Salesforce Implementation</p>
                <p className="body-sm hover:text-accent-blue cursor-pointer transition-colors">Business Analysis</p>
                <p className="body-sm hover:text-accent-blue cursor-pointer transition-colors">Process Optimization</p>
                <p className="body-sm hover:text-accent-blue cursor-pointer transition-colors">AI Training</p>
              </div>
            </div>
            
            <div>
              <h4 className="h4 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="body-sm hover:text-accent-blue cursor-pointer block transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="body-sm hover:text-accent-blue cursor-pointer block transition-colors">Projects</button>
                <button onClick={() => scrollToSection('services')} className="body-sm hover:text-accent-blue cursor-pointer block transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="body-sm hover:text-accent-blue cursor-pointer block transition-colors">Contact</button>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--border-subtle)' }}>
            <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
              © 2024 {personalInfo.name}. All rights reserved. Built with passion for Salesforce excellence.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Portfolio;
