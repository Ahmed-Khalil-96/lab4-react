import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">ReactLab4</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/home">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/add">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/comments">Comments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/commentsTable">commentsTable</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}
