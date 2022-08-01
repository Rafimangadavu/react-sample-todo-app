import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <h4 className="collapse navbar-collapse text-center text-light text-lg-start">
              My Todos
            </h4>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/api">
                    List from Api
                  </Link>
                </li>
              </ul>
              {props.showSearch === 'true' ? (
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
