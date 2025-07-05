import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

// ✅ Wrapper for search query to pass as prop
const SearchNewsWrapper = () => {
  const { query } = useParams();
  return <News key={`search-${query}`} query={query} />;
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          {/* Category-based News routes with unique keys */}
          <Route path="/" element={<News key="general" category="general" />} />
          <Route path="/general" element={<News key="general-again" category="general" />} />
          <Route path="/business" element={<News key="business" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News key="health" category="health" />} />
          <Route path="/science" element={<News key="science" category="science" />} />
          <Route path="/sports" element={<News key="sports" category="sports" />} />
          <Route path="/technology" element={<News key="technology" category="technology" />} />

          {/* Static Page */}
          <Route path="/about" element={<About />} />

          {/* Search route using wrapper */}
          <Route path="/search/:query" element={<SearchNewsWrapper />} />
        </Routes>
      </Router>
    );
  }
}
