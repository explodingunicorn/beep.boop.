import React, { Component } from 'react';
import contentful from '../../helpers/api_builder';
import PostPreview from '../common/postPreview';

export default class RecentPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        contentful.getPosts(3, 0)
            .then((res) => {
                console.log('multiple posts?');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    renderPosts() {

    }

    render() {
        return (
            <div className="posts-container">
                <h3>Posts</h3>
            </div>
        );
    }
}