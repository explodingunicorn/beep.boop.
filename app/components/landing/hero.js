import React, {Component} from 'react';
import contentful from '../../helpers/api_builder';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Loading',
            backgroundStyle: {
                backgroundImage: 'none'
            }
        }
    }

    componentWillReceiveProps(props) {
        if (props.post) {
            this.setState({
                title: props.post.fields.title
            });
            
            contentful.getImage(props.post.fields.featuredImage.sys.id)
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
    }

    render() {
        return (
            <div className="hero fluid-container" style={this.state.backgroundStyle}>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}