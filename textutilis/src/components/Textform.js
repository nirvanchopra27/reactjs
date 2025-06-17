import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  // Handle changes in the textarea
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Convert text to uppercase
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to UPPERCASE', 'success');
  };

  // Convert text to lowercase
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'warning');
  };

  // Remove extra spaces
  const handleRemoveExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra spaces removed', 'secondary');
  };

  // Copy text to clipboard
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard!', 'info');
  };

  // Word count logic
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn btn-success me-2" onClick={handleUpperCase}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-warning me-2" onClick={handleLowerCase}>
        Convert to lowercase
      </button>
      <button className="btn btn-secondary me-2" onClick={handleRemoveExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-info text-white me-2" onClick={handleCopyText}>
        Copy Text
      </button>

      <div className="mt-4">
        <h4>Your Text Summary</h4>
        <p>Words: {wordCount} | Characters: {text.length}</p>
        <p>Estimated Reading Time: {0.008 * wordCount} minutes</p>
      </div>
    </div>
  );
}
