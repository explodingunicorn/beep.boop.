import React, { Component } from 'react';

export default class PostPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post-preview">
                <h3>{this.props.post.fields.title}</h3>
                <p>{this.props.post.fields.reviewDescription}</p>
            </div>
        );
    }
}