// src/components/AudioUploader.js
import React, { useState } from 'react';

export default function AudioUploader({ showAlert, mode }) {
  const [fileName, setFileName] = useState(null);
  const [summary, setSummary] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setFileName(file.name);
      setSummary("🔍 Generating summary... (mock)");
      setTimeout(() => {
        setSummary("✅ This is a demo summary of your uploaded audio file.");
        showAlert("Audio processed successfully", "success");
      }, 2000);
    } else {
      showAlert("Please upload a valid audio file", "danger");
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-4">🎧 Audio Summary Tool</h2>
      <input
        type="file"
        className="form-control mb-3"
        accept="audio/*"
        onChange={handleUpload}
      />
      {fileName && <p className="text-muted">Selected File: <strong>{fileName}</strong></p>}
      {summary && (
        <div className={`alert alert-${mode === 'light' ? 'secondary' : 'info'} mt-3 shadow`}>
          <h5>Summary:</h5>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
