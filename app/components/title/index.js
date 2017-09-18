import React, { Component } from 'react';

export default class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Loading',
            backgroundColor: 'green'
        }
    }

    determineColor(type) {
        let colors = {
            Game: 'green',
            Movie: 'blue',
            Book: 'purple',
            Opinion: 'red'
        }

        this.setState({backgroundColor: colors[type]});
    }

    componentWillReceiveProps(props) {
        if (props.type) {
            this.determineColor(props.type);
        }

        if (props.title) {
            this.setState({title: props.title});
        }
    }

    render() {
        return (
            <div className={"title-container " + this.state.backgroundColor}>
                <h1 className={"text-shadow-" + this.state.backgroundColor}>{this.state.title}</h1>
            </div>
        )
    }
}