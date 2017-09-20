import React, { Component } from 'react';
import PreviewButton from '../previewButton';
import { Link } from 'react-router-dom';

export default class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Loading',
            backgroundColor: 'green',
            slug: ''
        }
    }

    componentWillReceiveProps(props) {
        if (props.color) {
            this.setState({backgroundColor: props.color})
        }

        if (props.title) {
            this.setState({title: props.title});
        }
    }

    isHero() {
        if (this.props.readMore) {
            return 'text'
        }
        else {
            return this.state.backgroundColor;
        }
    }

    render() {
        let readMore = <div></div>;
        if (this.props.readMore) {
            return (
                <div className={"title-container"}>
                    <Link to={"/post/" + this.props.slug}>
                        <h1 className={"text-" + this.state.backgroundColor}>{this.state.title}</h1>
                    </Link>
                    <PreviewButton color={this.state.backgroundColor} slug={this.props.readMore}/>
                </div>
            )

        }
        else {
            return (
                <div className={"title-container " + this.state.backgroundColor}>
                    <h1>{this.state.title}</h1>
                </div>
            )
        }
    }
}