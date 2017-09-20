import React, { Component } from 'react';
import PostPreview from '../postPreview';
import { getColor } from '../../helpers/helpers';
import { Link } from 'react-router-dom';
import contentful from '../../helpers/api_builder';

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            color: 0
        }
    }

    setColor(type) {
        this.setState({color: getColor(type)});
    }

    getPosts(props) {
        contentful.getPosts(props.postAmount, props.postStart, props.types)
            .then((res) => {
                this.setState({posts: res.data.items})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentWillMount() {
        this.setColor(this.props.types[0]);
        this.getPosts(this.props);
    }

    componentWillReceiveProps(props) {
        this.setColor(props.types[0]);
        this.getPosts(props);
    }

    renderPostPreviews() {
        return this.state.posts.map((post) => {
            return <PostPreview post={post} key={post.fields.slug}/>
        })
    }

    render() {

        return (
            <div className="post-list-container">
                <h2 className={"text-" + this.state.color}>{this.props.text}</h2>
                <div className={"seperator " + this.state.color}>
                    <div className="seperator-deco"></div>
                </div>
                <div className="list">
                    {this.renderPostPreviews()}
                </div>
            </div>
        )
    }
}