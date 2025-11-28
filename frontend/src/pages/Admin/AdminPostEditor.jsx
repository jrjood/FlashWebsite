import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import AdminNav from '../../components/AdminNav';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminFormWrapper';

export default function AdminPostEditor() {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    author: 'Admin',
    coverImage: '',
    tags: '',
    sections: [{ title: '', content: '' }],
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      api
        .getPost(id)
        .then((r) => {
          const post = r.data;
          setData({
            title: post.title || '',
            slug: post.slug || '',
            excerpt: post.excerpt || '',
            author: post.author || 'Admin',
            coverImage: post.coverImage || '',
            tags: post.tags || '',
            sections: post.sections || [{ title: '', content: '' }],
          });
        })
        .catch(() => {
          alert('Failed to load post');
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  async function save(e) {
    e.preventDefault();
    try {
      if (id) {
        await api.updatePost(id, data);
        alert('Post updated successfully');
      } else {
        await api.createPost(data);
        alert('Post created successfully');
      }
      nav('/admin/posts');
    } catch (err) {
      console.error('Save failed:', err);
      alert('Save failed: ' + (err.response?.data?.message || err.message));
    }
  }

  async function uploadCover(ev) {
    const f = ev.target.files[0];
    if (!f) return;
    const fd = new FormData();
    fd.append('file', f);
    try {
      const res = await api.uploadCover(fd);
      setData((d) => ({ ...d, coverImage: res.data.url }));
    } catch (err) {
      alert('Cover upload failed');
    }
  }

  async function deleteCover() {
    if (!confirm('Remove cover image?')) return;
    setData((d) => ({ ...d, coverImage: '' }));
  }

  function addSection() {
    setData((d) => ({
      ...d,
      sections: [...d.sections, { title: '', content: '' }],
    }));
  }

  function removeSection(index) {
    if (data.sections.length <= 1) {
      alert('You must have at least one section');
      return;
    }
    if (!confirm('Remove this section?')) return;
    setData((d) => ({
      ...d,
      sections: d.sections.filter((_, i) => i !== index),
    }));
  }

  function updateSection(index, field, value) {
    setData((d) => ({
      ...d,
      sections: d.sections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      ),
    }));
  }

  if (loading) {
    return (
      <Wrapper>
        <AdminNav />
        <div className='page-header'>
          <h1>Loading...</h1>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AdminNav />
      <div className='page-header'>
        <h1>{id ? 'Edit' : 'Create New'} Blog Post</h1>
        <p className='subtitle'>
          {id
            ? 'Update blog post content and details'
            : 'Fill in the details below to create a new blog post'}
        </p>
      </div>

      <form onSubmit={save} className='form-container'>
        <div className='form-section'>
          <h2 className='section-title'>Basic Information</h2>
          <div className='form-grid'>
            <div className='form-group span-full'>
              <label htmlFor='title'>
                Post Title <span className='required'>*</span>
              </label>
              <input
                id='title'
                type='text'
                className='form-input'
                placeholder='e.g., Top 10 Real Estate Investment Tips for 2024'
                value={data.title}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '');
                  setData((d) => ({ ...d, title, slug }));
                }}
                required
              />
            </div>

            <div className='form-group span-full'>
              <label htmlFor='slug'>
                URL Slug <span className='required'>*</span>
              </label>
              <input
                id='slug'
                type='text'
                className='form-input'
                placeholder='auto-generated-from-title'
                value={data.slug}
                onChange={(e) =>
                  setData((d) => ({ ...d, slug: e.target.value }))
                }
                required
              />
              <span className='field-hint'>
                Auto-generated from title, but you can customize it
              </span>
            </div>

            <div className='form-group'>
              <label htmlFor='author'>Author Name</label>
              <input
                id='author'
                type='text'
                className='form-input'
                placeholder='Admin'
                value={data.author}
                onChange={(e) =>
                  setData((d) => ({ ...d, author: e.target.value }))
                }
              />
            </div>

            <div className='form-group'>
              <label htmlFor='tags'>Tags</label>
              <input
                id='tags'
                type='text'
                className='form-input'
                placeholder='real estate, investment, tips'
                value={data.tags}
                onChange={(e) =>
                  setData((d) => ({ ...d, tags: e.target.value }))
                }
              />
              <span className='field-hint'>
                Comma-separated tags for categorization
              </span>
            </div>

            <div className='form-group span-full'>
              <label htmlFor='excerpt'>Short Excerpt</label>
              <textarea
                id='excerpt'
                className='form-textarea'
                placeholder='A brief summary of the post (shown in post cards)'
                rows='3'
                value={data.excerpt}
                onChange={(e) =>
                  setData((d) => ({ ...d, excerpt: e.target.value }))
                }
              />
            </div>
          </div>
        </div>

        <div className='form-section'>
          <h2 className='section-title'>Cover Image</h2>
          <div className='upload-area'>
            <input
              type='file'
              id='cover-upload'
              className='file-input'
              onChange={uploadCover}
              accept='image/*'
            />
            <label htmlFor='cover-upload' className='upload-label'>
              <svg
                className='upload-icon'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <span className='upload-text'>
                Click to upload or drag and drop
              </span>
              <span className='upload-hint'>PNG, JPG up to 10MB</span>
            </label>
          </div>

          {data.coverImage && (
            <div className='image-preview'>
              <img src={data.coverImage} alt='Cover preview' />
              <button
                type='button'
                className='btn-delete-image'
                onClick={deleteCover}
              >
                Remove Cover Image
              </button>
            </div>
          )}
        </div>

        <div className='form-section'>
          <h2 className='section-title'>
            Content Sections
            <button
              type='button'
              className='btn-add-section'
              onClick={addSection}
            >
              + Add Section
            </button>
          </h2>

          {data.sections.map((section, index) => (
            <div key={index} className='section-editor'>
              <div className='section-header-row'>
                <h3 className='section-number'>Section {index + 1}</h3>
                {data.sections.length > 1 && (
                  <button
                    type='button'
                    className='btn-remove-section'
                    onClick={() => removeSection(index)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor={`section-title-${index}`}>Section Title</label>
                <input
                  id={`section-title-${index}`}
                  type='text'
                  className='form-input'
                  placeholder='e.g., Understanding Market Trends'
                  value={section.title}
                  onChange={(e) =>
                    updateSection(index, 'title', e.target.value)
                  }
                />
              </div>

              <div className='form-group'>
                <label htmlFor={`section-content-${index}`}>
                  Section Content
                </label>
                <textarea
                  id={`section-content-${index}`}
                  className='form-textarea'
                  placeholder='Write the content for this section...'
                  rows='8'
                  value={section.content}
                  onChange={(e) =>
                    updateSection(index, 'content', e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div className='form-actions'>
          <button
            type='button'
            className='btn-secondary'
            onClick={() => nav('/admin/posts')}
          >
            Cancel
          </button>
          <button type='submit' className='btn-primary'>
            {id ? 'Update Post' : 'Publish Post'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
