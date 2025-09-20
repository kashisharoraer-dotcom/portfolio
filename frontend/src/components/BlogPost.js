import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/mock';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="h1 mb-4">Blog Post Not Found</h1>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm rounded-lg" style={{ 
                  backgroundColor: 'var(--accent-bg)', 
                  color: 'var(--accent-primary)' 
                }}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="display-md mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-8 body-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="pad-xl">
        <div className="container">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="pad-xl">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="body-lg mb-8">{post.excerpt}</p>
              
              <p className="body-md mb-6">
                This is a placeholder for the full blog post content. In a real implementation, 
                this would contain the complete article content from a CMS or markdown files.
              </p>
              
              <h2 className="h2 mb-6">Coming Soon</h2>
              <p className="body-md mb-8">
                This blog section is currently under development. I'll be sharing insights about:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                  <span className="body-md">Salesforce best practices and implementation strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                  <span className="body-md">AI-powered business analysis techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                  <span className="body-md">Process optimization methodologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                  <span className="body-md">Industry trends and insights</span>
                </li>
              </ul>
              
              <div className="feature-card text-center">
                <h3 className="h3 mb-4">Stay Updated</h3>
                <p className="body-md mb-6">
                  Get notified when I publish new articles and insights.
                </p>
                <a href="mailto:kashisharora.er@gmail.com" className="btn-primary">
                  Subscribe to Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;