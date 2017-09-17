import React, {Component} from 'react';
import contentful from '../../helpers/api_builder';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: 0,
            title: 'Loading',
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
                this.setState({post: res.data.items[0], title: res.data.items[0].fields.title});
                this.getImage();
            })
    }

    render() {
        return (
            <div className="hero fluid-container" style={this.state.backgroundStyle}>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}