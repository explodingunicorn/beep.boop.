import React, { Component } from 'react';
import PostHeader from './postHeader';
import PostFooter from './postFooter';
import Title from '../title';
import { getColor } from '../../helpers/helpers';
import contentful from '../../helpers/api_builder';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: 'Loading',
            postType: 0,
            postImage: 0,
            postBody: 0,
            postAuthor: 0,
            postDate: 0,
        }
    }

    loadComponents(post) {
        this.setState({
            postTitle: post.fields.title,
            postColor: getColor(post.fields.type),
            postImage: post.fields.featuredImage,
            postBody: post.fields.body,
            postAuthor: post.fields.author,
            postDate: post.fields.date.split('-')
        });
    }

    componentWillMount() {
        window.scrollTo(0,0);
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
                    <Title title={this.state.postTitle} color={this.state.postColor}/>
                    <h2 className={"text-"+this.state.postColor}>{this.state.postDate[1]}-{this.state.postDate[2]}-{this.state.postDate[0]}</h2>
                    <div className={"seperator " + this.state.postColor}>
                        <div className="seperator-deco"></div>
                    </div>
                    <div className="full-text" dangerouslySetInnerHTML={{__html: this.state.postBody}}>
                    </div>
                </div>
            </div>
        )
    }
}