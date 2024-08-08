import React, { useState, useEffect } from 'react';
import './AddProjectModal.css';

function AddProjectModal({ isOpen, onClose, onAdd }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [path, setPath] = useState('');
  const [errors, setErrors] = useState({ image: '', url: '', path: '' });

  useEffect(() => {
    // Reset the form if the modal is closed
    if (!isOpen) {
      setImage(null);
      setUrl('');
      setPath('');
      setErrors({ image: '', url: '', path: '' });
    }
  }, [isOpen]);

  const validate = () => {
    let isValid = true;
    const newErrors = { image: '', url: '', path: '' };

    if (!image) {
      newErrors.image = 'Image is required.';
      isValid = false;
    }

    if (!url.trim()) {
      newErrors.url = 'URL is required.';
      isValid = false;
    }

    if (!path.trim()) {
      newErrors.path = 'Path is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    if (field === 'url') {
      setUrl(value);
    } else if (field === 'path') {
      setPath(value);
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: ''
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('url', url);
      formData.append('path', path);

      try {
        await onAdd(formData);
        onClose(); // Close the modal after successful addition
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Project</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Image:
            <input type="file" onChange={handleFileChange} />
            {errors.image && <div className="error-message">{errors.image}</div>}
          </label>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => handleInputChange(e, 'url')}
              style={{ borderColor: errors.url ? 'red' : 'initial' }}
            />
            {errors.url && <div className="error-message">{errors.url}</div>}
          </label>
          <label>
            Path:
            <input
              type="text"
              value={path}
              onChange={(e) => handleInputChange(e, 'path')}
              style={{ borderColor: errors.path ? 'red' : 'initial' }}
            />
            {errors.path && <div className="error-message">{errors.path}</div>}
          </label>
          <button type="submit">Add Project</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;
