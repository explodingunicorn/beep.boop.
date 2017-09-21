import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: ''
        }
    }

    toggleNavigation() {
        if (!this.state.open) {
            this.setState({open: 'open'});
        }
        else {
            this.setState({open: ''});
        }
    }

    getButton() {
        if (!this.state.open) {
            return (
                <svg x="0px" y="0px"viewBox="0 0 100 100">
                    <rect  x="14.1" y="69.5" width="73.8" height="16.3"/>
                    <rect  x="14.1" y="42.3" width="73.8" height="16.3"/>
                    <rect  x="14.1" y="15.1" width="73.8" height="16.3"/>
                </svg>
            );
        }
        else {
            return (
                <svg x="0px" y="0px"viewBox="0 0 100 100">
                    <rect x="13.1" y="41.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.7107 50)" width="73.8" height="16.3"/>
                    <rect x="13.1" y="41.9" transform="matrix(0.7071 0.7071 -0.7071 0.7071 50 -20.7107)" width="73.8" height="16.3"/>
                </svg>
            );
        }
    }

    render() {
        return (
            <div className="navigation green">
                <Link to={'/'} className="green inline-link home">
                    <h5>Beep.Boop.</h5>
                </Link>

                <div className={"navigation-list " + this.state.open}>
                    <div className={"navigation-button " + this.state.open} onClick={() => this.toggleNavigation()}>
                        {this.getButton()}
                    </div>
                    <div className="inner" onClick={() => this.toggleNavigation()}>
                        <Link to={"/"} className="navigation-list-button">
                            <h4>Home</h4>
                        </Link>
                        <Link to={"/posts/Game-Movie-Book-Music-Opinion/0"} className="navigation-list-button">
                            <h4>All Reviews</h4>
                        </Link>
                        <Link to={"/posts/Game/0"} className="navigation-list-button">
                            <h4>Games</h4>
                        </Link>
                        <Link to={"/posts/Movie/0"} className="navigation-list-button">
                            <h4>Movies</h4>
                        </Link>
                        <Link to={"/posts/Book/0"} className="navigation-list-button">
                            <h4>Books</h4>
                        </Link>
                        <Link to={"/posts/Music/0"} className="navigation-list-button">
                            <h4>Music</h4>
                        </Link>
                        <Link to={"/posts/Opinion/0"} className="navigation-list-button">
                            <h4>Opinions</h4>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}