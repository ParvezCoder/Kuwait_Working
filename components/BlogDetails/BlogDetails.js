import React from 'react';
import Image from 'next/image';

const BlogDetails = ({ blog }) => {
    if (!blog) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                paddingTop: '60px'
            }}>
                <div style={{
                    textAlign: 'center',
                    padding: '3rem',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0'
                }}>
                    <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '0.5rem'
                    }}>Blog post not found</h2>
                    <p style={{ color: '#64748b' }}>The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            paddingTop: '60px',
            paddingBottom: '4rem'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '0 1.5rem'
            }}>
                {/* Hero Image */}
                <div style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '2.5rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}>
                    <Image 
                        src={blog.images.single} 
                        alt={blog.title} 
                        width={1200}
                        height={600}
                        layout="responsive"
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>

                {/* Article Content */}
                <article style={{
                    backgroundColor: '#ffffff',
                    padding: '0'
                }}>
                    {/* Meta Information */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid #e2e8f0'
                    }}>
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            By {blog.author}
                        </span>
                        
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            {blog.date}
                        </span>
                        
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            {blog.comment} Comments
                        </span>
                        
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                                <line x1="7" y1="7" x2="7.01" y2="7"/>
                            </svg>
                            {blog.thumb}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        lineHeight: '1.1',
                        marginBottom: '3rem',
                        letterSpacing: '-0.02em'
                    }}>
                        {blog.title}
                    </h1>

                    {/* Content */}
                    <div style={{
                        lineHeight: '1.8',
                        fontSize: '1.125rem',
                        color: '#334155'
                    }}>
                        {blog.content.map((block, index) => (
                            <div key={index} style={{ marginBottom: '2rem' }}>
                                {block.type === 'paragraph' && (
                                    <p style={{
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.8',
                                        fontSize: '1.125rem',
                                        color: '#334155',
                                        ...(index === 0 && {
                                            fontSize: '1.25rem',
                                            fontWeight: '400',
                                            color: '#1e293b'
                                        })
                                    }}>
                                        {block.text}
                                    </p>
                                )}
                                {block.type === 'heading' && block.level === 2 && (
                                    <h2 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: '#0f172a',
                                        marginTop: '3rem',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.2',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {block.text}
                                    </h2>
                                )}
                                {block.type === 'heading' && block.level === 3 && (
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        color: '#1e293b',
                                        marginTop: '2.5rem',
                                        marginBottom: '1rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {block.text}
                                    </h3>
                                )}
                                {block.type === 'list' && (
                                    <ul style={{
                                        paddingLeft: '0',
                                        listStyle: 'none',
                                        marginBottom: '2rem'
                                    }}>
                                        {block.items.map((item, i) => (
                                            <li key={i} style={{
                                                position: 'relative',
                                                paddingLeft: '2rem',
                                                marginBottom: '0.75rem',
                                                lineHeight: '1.7',
                                                fontSize: '1.125rem',
                                                color: '#334155'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '0.75rem',
                                                    width: '6px',
                                                    height: '6px',
                                                    backgroundColor: '#3b82f6',
                                                    borderRadius: '50%'
                                                }}></span>
                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Author Box */}
                    <div style={{
                        marginTop: '4rem',
                        padding: '2rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: '#1e293b',
                            marginBottom: '1rem'
                        }}>
                            About the Author
                        </h3>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                backgroundColor: '#3b82f6',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: '0'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#334155',
                                    margin: '0',
                                    lineHeight: '1.5'
                                }}>
                                    <strong style={{ color: '#1e293b', fontWeight: '600' }}>{blog.author}</strong>
                                    {blog.authorTitle && <span>, {blog.authorTitle}</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetails;