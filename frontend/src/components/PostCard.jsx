import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='card'>
      <Link className='post-image-box' to={`/blog/${post.slug}`}>
        <img
          className='post-image'
          src={post.coverImage}
          alt={post.title}
          loading='lazy'
          decoding='async'
        />
      </Link>
      <div className='card-body'>
        <small className='post-date'>
          {post.publishedAt &&
            new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
        </small>
        <h3 className='post-title'>{post.title}</h3>

        <p className='post-body'>{post.content}</p>
        <Link className='post-link' to={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}
