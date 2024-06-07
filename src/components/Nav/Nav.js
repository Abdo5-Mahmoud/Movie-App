import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.scss";
function Nav({ userData, logout }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-md ${styles.navBg} navbar-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="">
            Nox
          </Link>
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
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tvshows">
                    Tvshows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>

                {/* <li className="nav-item">
                         <Link className="nav-link" to="details">
                           Details
                         </Link>
                       </li> */}
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="social-media align-items-center    d-flex">
                <i className=" mx-2 fab fa-facebook"></i>
                <i className=" mx-2 fab fa-instagram"></i>
                <i className=" mx-2 fab fa-spotify"></i>
                <i className=" mx-2 fab fa-youtube"></i>
              </div>
              {userData ? (
                <li className="nav-item">
                  <div className="d-flex align-items-center">
                    <Link className="nav-link" to="profile">
                      Hello : {userData.first_name}
                    </Link>

                    <Link className="nav-link" onClick={logout}>
                      Logout
                    </Link>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
