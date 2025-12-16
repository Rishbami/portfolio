'use client';

import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend, so we'll just log the data
    console.log({ name, email, message });
    alert('Thank you for your message!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="Contact me through this form." />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Contact Me</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
