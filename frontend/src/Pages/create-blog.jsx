import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/create-blog.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !excerpt || !content) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('You must be logged in to create a blog.');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('excerpt', excerpt);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch('http://127.0.0.1:8000/api/blogs/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // don't set Content-Type here
        },
        body: formData,
      });

      if (response.ok) {
        setSuccess('Blog created successfully!');
        setTimeout(() => {
          navigate('/Blog');
        }, 1500);
      } else {
        const data = await response.json();
        // If backend returns validation errors in object form, show first error
        const errorMsg =
          data.detail ||
          (data && typeof data === 'object' && Object.values(data)[0][0]) ||
          'Failed to create blog';
        setError(errorMsg);
      }
    } catch (error) {
      setError('Something went wrong, please try again later.');
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 create-blog-container">
        <h2 className="mb-4 text-warning">Create New Blog Post</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="excerpt" className="form-label">Excerpt</label>
            <textarea
              id="excerpt"
              className="form-control"
              rows="3"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              id="content"
              className="form-control"
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Blog Image (optional)</label>
            <input
              type="file"
              id="image"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button type="submit" className="btn btn-success">Create Blog</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateBlog;
