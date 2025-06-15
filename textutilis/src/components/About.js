// src/components/About.js
import React from 'react';

function About({ mode }) {
  const bgClass = mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light';

  return (
    <div className={`p-4 rounded ${bgClass}`}>
      <h2>About TextUtils</h2>
      <p className="lead">
        TextUtils is a modern React-based utility web app built to enhance your text productivity. Whether you want to convert your text to uppercase or lowercase, count words and characters, or even upload an audio file to get its transcript and summary — TextUtils has you covered.
      </p>
      <p>
        Created with ❤️ by <strong>Nirvan</strong> (CSE NIT Jalandhar, 2026 Batch). Keen developer with interests in Deep Learning, Machine Learning, PHP, React, and Low-Level Design.
      </p>
    </div>
  );
}

export default About;