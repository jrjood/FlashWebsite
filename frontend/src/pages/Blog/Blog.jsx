import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import Wrapper from '../../assets/wrappers/BlogPageWrappers/BlogWrapper';

export default function Blog() {
  const { t } = useTranslation('blog');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 9;

  useEffect(() => {
    setLoading(true);
    api.getPosts({ page, limit }).then((r) => {
      if (page === 1) {
        setPosts(r.data.data);
      } else {
        setPosts((prev) => [...prev, ...r.data.data]);
      }
      setTotal(r.data.total);
      setLoading(false);
    });
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMore = posts.length < total;

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
      <section id='hero' className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>{t('hero.title')}</h1>
          <p className='hero-subtitle'>{t('hero.subtitle')}</p>
        </div>
      </section>

      <div className='blog-container'>
        {posts.length === 0 ? (
          <div className='empty-state'>
            <h2>{t('empty_state.title')}</h2>
            <p>{t('empty_state.description')}</p>
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

            {hasMore && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '3rem',
                }}
              >
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'white',
                    color: '#0f5132',
                    border: '2px solid #0f5132',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontFamily: 'EB Garamond',
                    textTransform: 'uppercase',
                    fontSize: '1rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: loading ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.background = '#0f5132';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow =
                        '0 4px 12px rgba(15, 81, 50, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#0f5132';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {loading ? t('loading') : t('load_more')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
}
