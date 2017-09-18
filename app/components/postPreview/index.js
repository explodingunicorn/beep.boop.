import React, { Component } from 'react';
import PreviewImage from './previewImage';
import { Link } from 'react-router-dom';

export default class PostPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 0
        }
    }

    setColor(type) {
        let color = {
            Game: 'green',
            Movie: 'blue',
            Book: 'purple',
            Opinion: 'red'
        }

        this.setState({color: color[type]});
    }

    componentWillMount() {
        this.setColor(this.props.post.fields.type);
    }

    render() {
        return (
            <div className="post-preview-container">
                <PreviewImage image={this.props.post.fields.featuredImage} color={this.state.color}/>
                <div className="info">
                    <Link to={"/post/" + this.props.post.fields.slug}>
                        <h3 className={"text-" + this.state.color}>{this.props.post.fields.title}</h3>
                    </Link>
                    <p>{this.props.post.fields.reviewDescription}</p>
                    <Link to={"/post/" + this.props.post.fields.slug} className={"preview-button "}>
                        <h4 className={this.state.color + " text-shadow-" + this.state.color}>Read more</h4>
                        <div className="deco">
                            <h4>pls?</h4>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}