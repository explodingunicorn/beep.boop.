import React, {Component} from 'react';
import Title from '../title';
import { getColor } from '../../helpers/helpers';
import contentful from '../../helpers/api_builder';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: 0,
            title: 0,
            color: 0,
            slug: 0,
            backgroundStyle: {
                backgroundImage: 'none'
            }
        }
    }

    getImage() {
        contentful.getImage(this.state.post.fields.featuredImage.sys.id)
            .then((res) => {
                this.setState({
                    backgroundStyle: {
                        backgroundImage: 'url(https:' + res.data.fields.file.url + ')'
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentWillMount() {
        contentful.getPosts(1, 0)
            .then((res) => {
                this.setState({
                    post: res.data.items[0], 
                    title: res.data.items[0].fields.title,
                    color: getColor(res.data.items[0].fields.type),
                    slug: res.data.items[0].fields.slug
                });
                this.getImage();
            })
    }

    render() {
        return (
            <div className="hero fluid-container" style={this.state.backgroundStyle}>
                <div className="main-container">
                    <Title title={this.state.title} color={this.state.color} readMore={this.state.slug}/>
                </div>
            </div>
        )
    }
}