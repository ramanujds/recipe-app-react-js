import React, { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';


const Header = () => {

    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Easy Recipes</h1>
            {/* Create a nav bar with links use bootstrap styling */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Easy Recipes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">Favorites</Link>
                                </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/lazy">Get Lazy</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <p className="nav-link text-dark">{user}</p>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

};

export default Header;
