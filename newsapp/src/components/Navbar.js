// Navbar.js
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Navbar extends Component {
  handleCategoryClick = (category) => {
    this.props.navigate(`/${category}`);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
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
                  <a className="nav-link active" aria-current="page" href="#" onClick={() => this.handleCategoryClick('general')}>Home</a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('business')}>Business</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('entertainment')}>Entertainment</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('health')}>Health</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('science')}>Science</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('sports')}>Sports</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('technology')}>Technology</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.handleCategoryClick('general')}>General</a></li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search news..." aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// ✅ Wrap the class component with a hook-compatible component
function NavbarWithNavigation(props) {
  const navigate = useNavigate();
  return <Navbar {...props} navigate={navigate} />;
}

export default NavbarWithNavigation;
