import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import Wrapper from '../../assets/wrappers/BlogPageWrappers/BlogWrapper';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 12;

  useEffect(() => {
    api.getPosts({ page, limit }).then((r) => {
      setPosts(r.data.data);
      setTotal(r.data.total);
    });
  }, [page]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Wrapper>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>Real Estate Insights & News</h1>
          <p className='hero-subtitle'>
            Stay updated with the latest trends, tips, and insights from the
            world of real estate
          </p>
        </div>
      </section>

      <div className='blog-container'>
        {posts.length === 0 ? (
          <div className='empty-state'>
            <h2>No posts yet</h2>
            <p>Check back soon for exciting real estate content!</p>
          </div>
        ) : (
          <>
            <div className='posts-grid'>
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className='post-card'>
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className='post-card-image'
                      />
                    )}
                    <div className='post-card-content'>
                      <div className='post-card-meta'>
                        <span className='post-card-author'>
                          <svg
                            width='16'
                            height='16'
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
                        <span className='post-card-date'>
                          <svg
                            width='16'
                            height='16'
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
                      <h2 className='post-card-title'>{post.title}</h2>
                      {post.excerpt && (
                        <p className='post-card-excerpt'>{post.excerpt}</p>
                      )}
                      {post.tags && (
                        <div className='post-card-tags'>
                          {post.tags
                            .split(',')
                            .slice(0, 3)
                            .map((tag, i) => (
                              <span key={i} className='post-tag'>
                                {tag.trim()}
                              </span>
                            ))}
                        </div>
                      )}
                      <span className='post-card-link'>
                        Read More
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className='pagination'>
              <button
                className='pagination-btn'
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                ← Previous
              </button>
              <span className='pagination-info'>
                Page {page} of {Math.ceil(total / limit)}
              </span>
              <button
                className='pagination-btn'
                disabled={page * limit >= total}
                onClick={() => setPage((p) => p + 1)}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}
