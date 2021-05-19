import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link class="navbar-brand company" to="/"><h1>Portfolio</h1></Link> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active navbar-brand link" to="/">Home</Link>
                        <Link class="nav-item nav-link navbar-brand link" to="/about">About</Link>
                        <Link class="nav-item nav-link navbar-brand link" to="/projects">Projects</Link>
                        <Link class="nav-item nav-link navbar-brand link" to="/resume">Resume</Link>
                        <Link class="nav-item nav-link navbar-brand link" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopBar;