import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

// ✅ Wrapper to pass query param to News
const SearchNewsWrapper = () => {
  const { query } = useParams();
  return <News key={query} query={query} />;
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
          <Route path="/general" element={<News category="general" />} />
          <Route path="/about" element={<About />} />

          {/* ✅ Use wrapper to pass query */}
          <Route path="/search/:query" element={<SearchNewsWrapper />} />
        </Routes>
      </Router>
    );
  }
}
