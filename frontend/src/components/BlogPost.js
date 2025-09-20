import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="blog-post">
      {/* Header */}
      <header className="pad-xl border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="container">
          <Link to="/" className="btn-ghost mb-8 inline-flex">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="display-md mb-6">Blog Post Coming Soon</h1>
            
            <div className="flex items-center gap-8 body-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Stay Tuned</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pad-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="feature-card text-center">
              <h2 className="h2 mb-6">Blog Section Under Development</h2>
              <p className="body-lg mb-8">
                I'm working on creating valuable content about Salesforce, business analysis, and AI tools. 
                Stay tuned for upcoming articles and insights!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                  <span className="body-md">Salesforce best practices and implementation strategies</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                  <span className="body-md">AI-powered business analysis techniques</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
                  <span className="body-md">Process optimization methodologies</span>
                </div>
              </div>
              
              <a href="mailto:kashisharora.er@gmail.com" className="btn-primary">
                Get Notified When Published
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;