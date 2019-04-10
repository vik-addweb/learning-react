import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Main from './routes/index';
import 'react-dropdown/style.css';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Welcome to the Website!</h1>
                </header>
                <section>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="tab-content">
                        <Main />
                    </div>
                </section>
                <footer></footer>
            </div >

        );
    }
}