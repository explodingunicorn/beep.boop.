import React, { Component } from 'react';
import PostPreview from '../postPreview';
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
        let color = {
            Game: 'green',
            Movie: 'blue',
            Book: 'purple',
            Opinion: 'red'
        }

        this.setState({color: color[type]});
    }

    componentWillMount() {
        this.setColor(this.props.types[0]);
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
            <div className="post-list-container">
                <h2 className={"text-" + this.state.color}>Recent {this.props.text}</h2>
                {this.renderPostPreviews()}
            </div>
        )
    }
}