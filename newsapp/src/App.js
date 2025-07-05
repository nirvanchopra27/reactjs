import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // this should be the wrapped version
import News from './components/News';
import About from './components/About';

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
        </Routes>
      </Router>
    );
  }
}
