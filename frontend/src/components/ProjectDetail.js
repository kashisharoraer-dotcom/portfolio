import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="h1 mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Header */}
      <header className="pad-xl border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="container">
          <Link to="/" className="btn-ghost mb-8 inline-flex">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm rounded-lg" style={{ 
                  backgroundColor: 'var(--accent-bg)', 
                  color: 'var(--accent-primary)' 
                }}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="display-md mb-4">{project.title}</h1>
            <p className="h3 mb-6" style={{ color: 'var(--accent-primary)' }}>{project.subtitle}</p>
            
            <div className="flex items-center gap-8 body-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="pad-xl">
        <div className="container">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="pad-xl">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Problem Statement */}
              <div>
                <h2 className="h2 mb-6">The Challenge</h2>
                <p className="body-lg mb-6">{project.problem}</p>
                <p className="body-md">
                  This project required deep understanding of financial services regulations, 
                  complex user journey mapping, and seamless integration between multiple Salesforce clouds. 
                  The client needed a solution that could scale with their growing customer base while 
                  maintaining strict compliance and security standards.
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="h2 mb-6">Our Approach</h2>
                <p className="body-lg mb-6">{project.approach}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="feature-card">
                    <Users size={32} style={{ color: 'var(--accent-primary)' }} className="mb-4" />
                    <h3 className="h4 mb-3">Discovery Workshops</h3>
                    <p className="body-sm">
                      Conducted comprehensive stakeholder interviews and requirement gathering sessions 
                      to understand complex business needs.
                    </p>
                  </div>
                  
                  <div className="feature-card">
                    <TrendingUp size={32} style={{ color: 'var(--accent-primary)' }} className="mb-4" />
                    <h3 className="h4 mb-3">Agile Methodology</h3>
                    <p className="body-sm">
                      Implemented sprint-based development with regular client feedback loops 
                      and iterative improvements.
                    </p>
                  </div>
                </div>

                <h3 className="h3 mb-4">Key Implementation Steps</h3>
                <div className="space-y-4">
                  {[
                    "Conducted comprehensive business requirement analysis",
                    "Designed user journey maps and process flows",
                    "Created detailed technical documentation and BRD",
                    "Developed custom Experience Cloud portals with responsive design",
                    "Implemented data migration and integration workflows",
                    "Conducted extensive UAT and performance testing",
                    "Delivered comprehensive user training and documentation"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} style={{ color: 'var(--accent-primary)' }} className="mt-1 flex-shrink-0" />
                      <p className="body-md">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="h2 mb-6">Results & Impact</h2>
                <p className="body-lg mb-8">{project.outcome}</p>
                
                <div className="feature-card">
                  <h3 className="h3 mb-6">Quantifiable Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="h4 mb-3">Operational Improvements</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          40% reduction in customer service requests
                        </li>
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          65% faster onboarding process
                        </li>
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          90% improvement in data accuracy
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="h4 mb-3">Business Value</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          $150K annual cost savings
                        </li>
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          95% user satisfaction rate
                        </li>
                        <li className="flex items-center gap-2 body-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                          6-month ROI achievement
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="feature-card">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                  ))}
                </div>
                <p className="body-lg mb-6 italic">
                  "Kashish's expertise in Salesforce FSC implementation was exceptional. The dual portal solution 
                  exceeded our expectations and significantly improved our customer experience. The project was 
                  delivered on time and within budget."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'var(--accent-bg)' }}></div>
                  <div>
                    <h4 className="h4">Rajesh Kumar</h4>
                    <p className="body-sm">CTO, FinTech Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Metrics */}
              <div className="feature-card">
                <h3 className="h3 mb-6">Project Metrics</h3>
                <div className="space-y-6">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="body-sm">{key}</span>
                        <span className="h4" style={{ color: 'var(--accent-primary)' }}>{value}</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'var(--border-primary)' }}>
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            backgroundColor: 'var(--accent-primary)',
                            width: value.includes('%') ? value : '85%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="feature-card">
                <h3 className="h3 mb-6">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-2 rounded-lg body-sm" style={{ 
                      backgroundColor: 'var(--bg-tertiary)', 
                      color: 'var(--text-primary)' 
                    }}>
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-2 rounded-lg body-sm" style={{ 
                    backgroundColor: 'var(--bg-tertiary)', 
                    color: 'var(--text-primary)' 
                  }}>
                    JIRA
                  </span>
                  <span className="px-3 py-2 rounded-lg body-sm" style={{ 
                    backgroundColor: 'var(--bg-tertiary)', 
                    color: 'var(--text-primary)' 
                  }}>
                    Figma
                  </span>
                  <span className="px-3 py-2 rounded-lg body-sm" style={{ 
                    backgroundColor: 'var(--bg-tertiary)', 
                    color: 'var(--text-primary)' 
                  }}>
                    Miro
                  </span>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="feature-card text-center">
                <h3 className="h3 mb-4">Interested in Similar Results?</h3>
                <p className="body-md mb-6">
                  Let's discuss how I can help transform your business processes.
                </p>
                <Link to="/#contact" className="btn-primary w-full">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="pad-xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="h2 mb-12 text-center">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject, index) => (
              <Link key={relatedProject.id} to={`/project/${relatedProject.id}`} className="feature-card hover-lift block">
                <img 
                  src={relatedProject.image} 
                  alt={relatedProject.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center gap-2 mb-4">
                  {relatedProject.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs rounded" style={{ 
                      backgroundColor: 'var(--accent-bg)', 
                      color: 'var(--accent-primary)' 
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="h3 mb-3">{relatedProject.title}</h3>
                <p className="body-md">{relatedProject.problem.substring(0, 150)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;