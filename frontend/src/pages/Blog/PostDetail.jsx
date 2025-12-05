import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/api';
import Wrapper from '../../assets/wrappers/BlogPageWrappers/PostDetailWrapper';

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api
      .getPost(slug)
      .then((r) => setPost(r.data))
      .catch(() => {
        alert('Failed to load post');
      });
  }, [slug]);

  if (!post) {
    return (
      <Wrapper>
        <div id='hero' className='loading'>
          Loading post...
        </div>
      </Wrapper>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const sections = post.sections || [];

  return (
    <Wrapper>
      <div id='hero' className='post-hero'>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className='post-hero-image'
          />
        )}
        <div className='post-hero-overlay'>
          <div className='post-hero-content'>
            <div className='post-meta'>
              <span className='post-meta-item'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
                {post.author || 'Admin'}
              </span>
              <span className='post-meta-item'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                {formatDate(post.publishedAt)}
              </span>
            </div>
            <h1 className='post-title'>{post.title}</h1>
          </div>
        </div>
      </div>

      <div className='post-container'>
        {post.excerpt && <div className='post-excerpt'>{post.excerpt}</div>}

        {post.tags && (
          <div className='post-tags'>
            {post.tags.split(',').map((tag, i) => (
              <span key={i} className='post-tag'>
                {tag.trim()}
              </span>
            ))}
          </div>
        )}

        {sections.length > 0
          ? sections.map((section, index) => (
              <div key={index} className='post-section'>
                {section.title && (
                  <h2 className='section-title'>{section.title}</h2>
                )}
                {section.content && (
                  <div className='section-content'>{section.content}</div>
                )}
              </div>
            ))
          : post.content && (
              <div className='post-section'>
                <div className='section-content'>{post.content}</div>
              </div>
            )}

        <Link to='/blog' className='back-to-blog'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
          Back to Blog
        </Link>
      </div>
    </Wrapper>
  );
}
