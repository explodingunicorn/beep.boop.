import React, { Component } from 'react';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation green">
                <h5>Beep.</h5>
                <h5>Boop.</h5>

                <div className="navigation-list">
                    <div className="navigation-button">
                        <img src="./img/menu.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}