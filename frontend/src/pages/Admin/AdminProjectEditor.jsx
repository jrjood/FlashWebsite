import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import AdminNav from '../../components/AdminNav';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminFormWrapper';

export default function AdminProjectEditor() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({
    title: '',
    type: '',
    developer: '',
    description: '',
    area: '',
    isFeatured: false,
    coverImage: '',
  });
  const [existingMedia, setExistingMedia] = useState([]);
  const [tempMedia, setTempMedia] = useState([]); // For new project media before save
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      api
        .getProjectById(id)
        .then((res) => {
          const project = res.data;
          setData({
            title: project.title || '',
            type: project.type || '',
            developer: project.developer || '',
            description: project.description || '',
            area: project.area || '',
            isFeatured: project.isFeatured || false,
            coverImage: project.coverImage || '',
          });
          setExistingMedia(project.media || []);
        })
        .catch((err) => {
          console.error('Failed to load project:', err);
          alert('Failed to load project');
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  async function save(e) {
    e.preventDefault();
    try {
      if (id) {
        // Update existing project
        await api.updateProject(id, data);
        alert('Project updated successfully');
      } else {
        // Create new project
        const res = await api.createProject(data);
        const newProjectId = res.data.id;

        // If there are temporary media files, associate them with the new project
        if (tempMedia.length > 0) {
          // Group temp media by their upload batch to avoid duplicates
          const filenames = tempMedia.map((m) => m.filename).filter(Boolean);
          if (filenames.length > 0) {
            // Send filenames to backend to link existing temp files
            await api.linkTempMedia(newProjectId, { filenames });
          }
        }

        alert('Project created successfully');
      }
      nav('/admin/projects');
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

  async function uploadGallery(ev) {
    const files = Array.from(ev.target.files || []);
    if (!files.length) return;
    const fd = new FormData();
    files.forEach((f) => fd.append('files', f));

    try {
      if (id) {
        // Project exists, upload directly
        const res = await api.addProjectMedia(id, fd);
        setExistingMedia((prev) => [...prev, ...res.data.media]);
        alert('Uploaded ' + res.data.media.length + ' files');
      } else {
        // New project, upload to temp and store for later
        const res = await api.addProjectMedia('temp', fd);
        // Store each media item without formData - we'll upload them individually later
        setTempMedia((prev) => [...prev, ...res.data.media]);
        alert('Files ready for upload. Save the project to finalize.');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed');
    }
  }

  async function deleteMedia(mediaId) {
    if (!confirm('Delete this media?')) return;
    try {
      await api.deleteProjectMedia(id, mediaId);
      setExistingMedia((prev) => prev.filter((m) => m.id !== mediaId));
      alert('Media deleted');
    } catch (err) {
      alert('Delete failed');
    }
  }

  function removeTempMedia(index) {
    setTempMedia((prev) => prev.filter((_, i) => i !== index));
  }

  async function deleteCover() {
    if (!confirm('Remove cover image?')) return;
    setData((d) => ({ ...d, coverImage: '' }));
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
        <h1>{id ? 'Edit' : 'Create New'} Project</h1>
        <p className='subtitle'>
          {id
            ? 'Update project details and media'
            : 'Fill in the details below to create a new project'}
        </p>
      </div>

      <form onSubmit={save} className='form-container'>
        <div className='form-section'>
          <h2 className='section-title'>Basic Information</h2>
          <div className='form-grid'>
            <div className='form-group span-full'>
              <label htmlFor='title'>
                Project Title <span className='required'>*</span>
              </label>
              <input
                id='title'
                type='text'
                className='form-input'
                placeholder='e.g., Eastown Residences, La Vista Bay, Cairo Festival City'
                value={data.title}
                onChange={(e) =>
                  setData((d) => ({ ...d, title: e.target.value }))
                }
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='type'>Property Type</label>
              <input
                id='type'
                type='text'
                className='form-input'
                placeholder='e.g., Residential, Commercial, Mixed-Use'
                value={data.type}
                onChange={(e) =>
                  setData((d) => ({ ...d, type: e.target.value }))
                }
              />
              <span className='field-hint'>
                Residential, Commercial, Mixed-Use, Retail, etc.
              </span>
            </div>

            <div className='form-group'>
              <label htmlFor='area'>Location</label>
              <input
                id='area'
                type='text'
                className='form-input'
                placeholder='e.g., New Cairo, North Coast, 6th of October'
                value={data.area}
                onChange={(e) =>
                  setData((d) => ({ ...d, area: e.target.value }))
                }
              />
              <span className='field-hint'>Area or district location</span>
            </div>

            <div className='form-group'>
              <label htmlFor='developer'>Developer Name</label>
              <input
                id='developer'
                type='text'
                className='form-input'
                placeholder='e.g., Sodic, Palm Hills, Emaar'
                value={data.developer}
                onChange={(e) =>
                  setData((d) => ({ ...d, developer: e.target.value }))
                }
              />
              <span className='field-hint'>
                Real estate development company
              </span>
            </div>

            <div className='form-group span-full'>
              <label htmlFor='description'>Project Description</label>
              <textarea
                id='description'
                className='form-textarea'
                placeholder='Describe the property features, amenities, units available, payment plans, and key selling points...'
                rows='6'
                value={data.description}
                onChange={(e) =>
                  setData((d) => ({ ...d, description: e.target.value }))
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
            Gallery Media
            {!id && (
              <span className='section-note'>
                Files will be uploaded when you save
              </span>
            )}
          </h2>
          <div className='upload-area'>
            <input
              type='file'
              id='gallery-upload'
              className='file-input'
              multiple
              onChange={uploadGallery}
              accept='image/*,video/*'
            />
            <label htmlFor='gallery-upload' className='upload-label'>
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
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <span className='upload-text'>Upload gallery images/videos</span>
              <span className='upload-hint'>
                Multiple files allowed - Images and videos
              </span>
            </label>
          </div>

          {id && existingMedia.length > 0 && (
            <div className='media-section'>
              <h3 className='media-title'>Existing Media</h3>
              <div className='media-grid'>
                {existingMedia.map((media) => (
                  <div key={media.id} className='media-item'>
                    {media.type === 'image' ? (
                      <img src={media.url} alt='Gallery item' />
                    ) : (
                      <video src={media.url} controls />
                    )}
                    <button
                      type='button'
                      className='btn-delete-media'
                      onClick={() => deleteMedia(media.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!id && tempMedia.length > 0 && (
            <div className='media-section'>
              <h3 className='media-title'>Ready to Upload</h3>
              <div className='media-grid'>
                {tempMedia.map((media, index) => (
                  <div key={index} className='media-item'>
                    {media.type === 'image' ? (
                      <img src={media.url} alt='Temp gallery item' />
                    ) : (
                      <video src={media.url} controls />
                    )}
                    <button
                      type='button'
                      className='btn-delete-media'
                      onClick={() => removeTempMedia(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='form-section'>
          <h2 className='section-title'>Options</h2>
          <div className='checkbox-group'>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                checked={data.isFeatured}
                onChange={(e) =>
                  setData((d) => ({ ...d, isFeatured: e.target.checked }))
                }
              />
              <span className='checkbox-text'>
                <strong>Featured Project</strong>
                <span className='checkbox-hint'>
                  Showcase this property prominently on the homepage as a
                  premium listing
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className='form-actions'>
          <button
            type='button'
            className='btn-secondary'
            onClick={() => nav('/admin/projects')}
          >
            Cancel
          </button>
          <button type='submit' className='btn-primary'>
            {id ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
