import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/UpdateBlog.css';

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch current blog data
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}/`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch blog');
        return res.json();
      })
      .then(data => {
        setBlog({
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          image: null, // We'll update if user selects new one
        });
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setBlog(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', blog.title);
    formData.append('excerpt', blog.excerpt);
    formData.append('content', blog.content);
    if (blog.image) {
      formData.append('image', blog.image);
    }

    fetch(`http://127.0.0.1:8000/api/blogs/${id}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: formData,
    })
      .then(res => {
        if (!res.ok) throw new Error('Update failed');
        alert('Blog updated successfully!');
        navigate(`/Blog/${id}`);
      })
      .catch(err => alert(err.message));
  };

  if (loading) return <p>Loading blog data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="page-title mb-4">Update Blog</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Excerpt</label>
            <textarea
              name="excerpt"
              value={blog.excerpt}
              onChange={handleChange}
              className="form-control"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              value={blog.content}
              onChange={handleChange}
              className="form-control"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Change Image (optional)</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="form-control"
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-success">Update Blog</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateBlog;
