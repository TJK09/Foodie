import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/Contact.css';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  const [contactStatus, setContactStatus] = useState('');
  const [contactError, setContactError] = useState('');

  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [subscriptionError, setSubscriptionError] = useState('');

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('');
    setContactError('');
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', contactForm);
      setContactStatus('Message sent successfully!');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setContactError('Failed to send message. Please try again later.');
    }
  };

  const handleSubscriptionSubmit = async (e) => {
    e.preventDefault();
    setSubscriptionStatus('');
    setSubscriptionError('');
    try {
      await axios.post('http://127.0.0.1:8000/api/subscribe/', { email: subscriptionEmail });
      setSubscriptionStatus('Subscribed successfully!');
      setSubscriptionEmail('');
    } catch (err) {
      setSubscriptionError('Subscription failed. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            {contactStatus && <div className="alert alert-success">{contactStatus}</div>}
            {contactError && <div className="alert alert-danger">{contactError}</div>}
            <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Suggestion</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning">Send Message</button>
            </form>
          </div>

          {/* Subscription Form */}
          <div className="col-md-6 mt-5 mt-md-0">
            <h4>Subscribe to Our Daily Mails</h4>
            {subscriptionStatus && <div className="alert alert-success">{subscriptionStatus}</div>}
            {subscriptionError && <div className="alert alert-danger">{subscriptionError}</div>}
            <form onSubmit={handleSubscriptionSubmit} className="mt-3">
              <div className="mb-3">
                <label htmlFor="subscriptionEmail" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="subscriptionEmail"
                  value={subscriptionEmail}
                  onChange={(e) => setSubscriptionEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
