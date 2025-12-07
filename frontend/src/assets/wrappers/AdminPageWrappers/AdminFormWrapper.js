import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fafc;

  .page-header {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .page-header h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 0.5rem 0;
  }

  .page-header .subtitle {
    font-size: 0.9375rem;
    color: #718096;
    margin: 0;
  }

  .form-container {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    max-width: 1200px;
    margin: 0 auto;
  }

  .form-section {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e2e8f0;
  }

  .form-section:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #0f5132;
    margin: 0 0 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .section-note {
    font-size: 0.875rem;
    font-weight: 400;
    color: #718096;
    margin-left: auto;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group.span-full {
    grid-column: 1 / -1;
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
    display: block;
  }

  .required {
    color: #e53e3e;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.9375rem;
    color: #2d3748;
    transition: all 0.2s;
    font-family: inherit;
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #0f5132;
    box-shadow: 0 0 0 3px rgba(15, 81, 50, 0.1);
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #a0aec0;
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .field-hint {
    font-size: 0.8125rem;
    color: #718096;
    margin-top: 0.375rem;
  }

  .upload-area {
    margin-bottom: 1.5rem;
  }

  .file-input {
    display: none;
  }

  .upload-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    border: 2px dashed #cbd5e0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    background: #f7fafc;
  }

  .upload-label:hover {
    border-color: #0f5132;
    background: #f0fdf4;
  }

  .upload-icon {
    width: 48px;
    height: 48px;
    color: #0f5132;
    margin-bottom: 1rem;
  }

  .upload-text {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.25rem;
  }

  .upload-hint {
    font-size: 0.875rem;
    color: #718096;
  }

  .image-preview {
    margin-top: 1.5rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #f7fafc;
  }

  .image-preview img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 6px;
    margin-bottom: 1rem;
    display: block;
  }

  .btn-delete-image {
    padding: 0.625rem 1.25rem;
    background: #e53e3e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-delete-image:hover {
    background: #c53030;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }

  .media-section {
    margin-top: 2rem;
  }

  .media-title {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 1rem 0;
  }

  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }

  .media-item {
    position: relative;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    background: white;
    transition: all 0.2s;
  }

  .media-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .media-item img,
  .media-item video {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
  }

  .btn-delete-media {
    width: 100%;
    padding: 0.5rem;
    background: #e53e3e;
    color: white;
    border: none;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-delete-media:hover {
    background: #c53030;
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    transition: all 0.2s;
  }

  .checkbox-label:hover {
    border-color: #0f5132;
    background: #f0fdf4;
  }

  .checkbox-label input[type='checkbox'] {
    margin-top: 0.125rem;
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #0f5132;
  }

  .checkbox-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .checkbox-text strong {
    font-size: 0.9375rem;
    color: #2d3748;
  }

  .checkbox-hint {
    font-size: 0.8125rem;
    color: #718096;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid #e2e8f0;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 6px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-primary {
    background: #0f5132;
    color: white;
  }

  .btn-primary:hover {
    background: #1a7f4f;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.3);
  }

  .btn-secondary {
    background: #e2e8f0;
    color: #4a5568;
  }

  .btn-secondary:hover {
    background: #cbd5e0;
    transform: translateY(-1px);
  }

  .btn-add-section {
    margin-left: auto;
    padding: 0.625rem 1.25rem;
    background: #0f5132;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-add-section:hover {
    background: #1a7f4f;
    transform: translateY(-1px);
  }

  .section-editor {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    background: #f7fafc;
  }

  .section-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .section-number {
    font-size: 1rem;
    font-weight: 600;
    color: #0f5132;
    margin: 0;
  }

  .btn-remove-section {
    padding: 0.5rem 1rem;
    background: #e53e3e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-remove-section:hover {
    background: #c53030;
    transform: translateY(-1px);
  }

  .section-editor .form-group {
    margin-bottom: 1rem;
  }

  .section-editor .form-group:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-actions {
      flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
    }

    .media-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
  }
`;

export default Wrapper;
