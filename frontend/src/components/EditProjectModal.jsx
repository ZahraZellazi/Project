import React, { useState, useEffect } from 'react';
import './AddProjectModal.css'; // Use the same styles or modify as needed
import { toast } from 'react-toastify'; // Import Toastify

function EditProjectModal({ isOpen, onClose, onEdit, initialData }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [path, setPath] = useState('');
  const [errors, setErrors] = useState({ image: '', url: '', path: '' });

  useEffect(() => {
    if (isOpen) {
      setImage(null);
      setUrl(initialData.url);
      setPath(initialData.path);
    }
  }, [isOpen, initialData]);

  // Form validation
  const validate = () => {
    let isValid = true;
    const newErrors = { image: '', url: '', path: '' };

    if (!image && !initialData.image) {
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      image: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('url', url);
      formData.append('path', path);

      try {
        const response = await fetch(`http://localhost:7777/items/${initialData._id}`, {
          method: 'PATCH',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);

        toast.success('Project updated successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });

        onEdit(result); // Call onEdit to update the UI with the edited item
        onClose(); 
      } catch (error) {
        console.error('Error updating item:', error);
        toast.error('Error updating project. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Project</h2>
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
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditProjectModal;
