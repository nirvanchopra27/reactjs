import React, { useState } from 'react';

export default function Textform(props) {
  // ✅ useState hook to track user input
  const [text, setText] = useState('');

  // ✅ Handle changes in the textarea
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // ✅ Convert text to uppercase
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // ✅ Convert text to lowercase
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // ✅ Count words (excluding extra spaces)
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Enter your text below</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleChange} // ✅ bind the textarea to state
        ></textarea>
      </div>

      <button className="btn btn-success me-2" onClick={handleUpperCase}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-warning me-2" onClick={handleLowerCase}>
        Convert to lowercase
      </button>

      <div className="mt-4">
        <h4>Your Text Summary</h4>
        <p>Words: {wordCount} | Characters: {text.length}</p>
        <p>Estimated Reading Time: {0.008 * wordCount} minutes</p>
      </div>
    </div>
  );
}
