import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PreviewButton extends Component {
    constructor(props) {
        super(props);
    }

    generateTaunt() {
        let choices = [
            "pls",
            "you won't!",
            "I dare you",
            "we need views",
            "you know you want too",
            "do it"
        ]

        let rand = Math.floor(Math.random() * (choices.length - 1));

        return choices[rand];
    }

    generateDecoColor() {
        let colorsMatch = {
            green: 'blue',
            red: 'purple',
            purple: 'green',
            blue: 'red'
        }

        return colorsMatch[this.props.color];
    }

    render() {
        return (
            <Link to={"/post/" + this.props.slug} className={"preview-button "}>
                <h4 className={this.props.color + " text-shadow-" + this.props.color}>Read more</h4>
                <div className={"deco " + this.generateDecoColor()}>
                    <h4>{this.generateTaunt()} 	&#9656;</h4>
                </div>
            </Link>
        );
    }
}