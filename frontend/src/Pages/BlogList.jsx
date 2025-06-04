import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/blogList.css'; // Make sure this includes the custom button styles
import { Link, useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem('username');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    fetch(`http://127.0.0.1:8000/api/blogs/${id}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then((res) => {
        if (res.status === 204) {
          setBlogs(blogs.filter((blog) => blog.id !== id));
        } else {
          throw new Error('Failed to delete blog');
        }
      })
      .catch((err) => alert(err.message));
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Our Community Blog</h2>
          <Link to="/create-blog" className="btn btn-warning">
            Create Blog
          </Link>
        </div>

        <div className="row">
          {blogs.length === 0 && <p>No blogs available.</p>}
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card h-100 blog-card shadow-sm">
                {blog.image && (
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted mb-2">By {blog.author}</p>
                  <p className="card-text blog-excerpt">{blog.excerpt}</p>

                  <div className="mt-auto">
                    <Link to={`/Blog/${blog.id}`} className="blog-btn read">
                      Read
                    </Link>

                    {loggedInUser === blog.author && (
                      <>
                        <Link to={`/update-blog/${blog.id}`} className="blog-btn update">
                          Update
                        </Link>
                        <button
                          className="blog-btn delete"
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
