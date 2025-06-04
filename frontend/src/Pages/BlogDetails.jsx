import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/blogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}/`)  // Adjust base URL as needed
      .then((res) => {
        if (!res.ok) {
          throw new Error('Blog not found');
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container my-5 text-center text-white">
          <p>Loading blog...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container my-5 text-center text-white">
          <h2>{error}</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5 blog-details">
        <h1 className="text-warning mb-3">{blog.title}</h1>
        <p className="text-muted mb-4 blog-head">Written by {blog.author}</p>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="img-fluid rounded mb-4 blog-image"
            style={{ objectFit: 'cover', maxHeight: '400px' }}
          />
        )}
        <p className="blog-content">{blog.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
