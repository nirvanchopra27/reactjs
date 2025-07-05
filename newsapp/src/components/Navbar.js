// Navbar.js
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark', // 'dark' or 'light'
      query: ''
    };
  }

  handleCategoryClick = (category) => {
    this.props.navigate(`/${category}`);
  };

  handleThemeToggle = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme: newTheme });
    document.body.className = newTheme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim()) {
      this.props.navigate(`/search/${encodeURIComponent(query.trim())}`);
      this.setState({ query: '' }); // clear input
    }
  };

  render() {
    const { theme, query } = this.state;
    const navThemeClass = theme === 'dark' ? 'navbar-dark bg-primary' : 'navbar-light bg-warning text-dark';

    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${navThemeClass} shadow-sm fixed-top`}>
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">📰 NewsSphere</a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={() => this.handleCategoryClick('general')}>Home</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    {["business", "entertainment", "health", "science", "sports", "technology", "general"].map(category => (
                      <li key={category}>
                        <a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick(category)}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

              {/* Search Bar */}
              <form className="d-flex me-2" role="search" onSubmit={this.handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search news..."
                  aria-label="Search"
                  value={query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>

              {/* Theme Toggle */}
              <button className="btn btn-outline-light" onClick={this.handleThemeToggle}>
                Toggle Theme
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function NavbarWithNavigation(props) {
  const navigate = useNavigate();
  return <Navbar {...props} navigate={navigate} />;
}

export default NavbarWithNavigation;
