import React, { Component } from 'react';
import PostPreview from '../postPreview';
import contentful from '../../helpers/api_builder';

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        console.log(this.props.types);
        contentful.getPosts(this.props.postCount, 0, this.props.types)
            .then((res) => {
                console.log(res.data);
                this.setState({posts: res.data.items})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    renderPostPreviews() {
        return this.state.posts.map((post) => {
            return <PostPreview post={post} key={post.fields.slug}/>
        })
    }

    render() {
        return (
            <div>
                <p>Post List</p>
                {this.renderPostPreviews()}
            </div>
        )
    }
}