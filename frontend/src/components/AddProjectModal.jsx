import React, { useState, useEffect } from 'react';
import './AddProjectModal.css';

function AddProjectModal({ item, mode, onClose, onSave }) {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [path, setPath] = useState('');
  const [errors, setErrors] = useState({ image: '', url: '', path: '' });

  useEffect(() => {
    if (item) {
      setImage(item.image || '');
      setUrl(item.url || '');
      setPath(item.path || '');
    }
  }, [item]);

  const validate = () => {
    let isValid = true;
    const newErrors = { image: '', url: '', path: '' };

    if (!image.trim()) {
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
    if (field === 'image') {
      setImage(value);
    } else if (field === 'url') {
      setUrl(value);
    } else if (field === 'path') {
      setPath(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const updatedItem = { ...item, image, url, path };
      onSave(updatedItem);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{mode === 'add' ? 'Add New Item' : 'Update Item'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Image:
            <input
              type="text"
              value={image}
              onChange={(e) => handleInputChange(e, 'image')}
              style={{ borderColor: errors.image ? 'red' : 'initial' }}
            />
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
          <button type="submit">{mode === 'add' ? 'Add Item' : 'Update Item'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;
