import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    renderReadMore() {

    }

    render() {
        let readMore = <div></div>;
        if (this.props.readMore) {
            readMore = <Link to={"/post/" + this.props.slug} className={"preview-button "}>
                            <h4 className={"text-" + this.state.backgroundColor + " text-shadow-"}>Read more</h4>
                            <div className="deco">
                                <h4>pls?</h4>
                            </div>
                        </Link>
        }

        return (
            <div className={"title-container " + this.state.backgroundColor}>
                <h1 className={"text-shadow-" + this.state.backgroundColor}>{this.state.title}</h1>
                {readMore}
            </div>
        )
    }
}