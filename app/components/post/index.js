import React, { Component } from 'react';
import PostHeader from './postHeader';
import Title from '../title';
import contentful from '../../helpers/api_builder';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: 'Loading',
            postType: 0,
            postImage: 0,
            postBody: 0,
            postAuthor: 0
        }
    }

    loadComponents(post) {
        this.setState({
            postTitle: post.fields.title,
            postType: post.fields.type,
            postImage: post.fields.featuredImage,
            postBody: post.fields.body,
            postAuthor: post.fields.author
        });
    }

    componentWillMount() {
        contentful.getPost(this.props.match.params.slug)
            .then((res) => {
                this.loadComponents(res.data.items[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <PostHeader image={this.state.postImage}/>
                <div className="post-container">
                    <Title title={this.state.postTitle} type={this.state.postType}/>
                    <div className="full-text" dangerouslySetInnerHTML={{__html: this.state.postBody}}>
                    </div>
                </div>
            </div>
        )
    }
}