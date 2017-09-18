import React, { Component } from 'react';
import contentful from '../../helpers/api_builder';

export default class PostHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundStyle: {
                backgroundImage: 'none'
            }
        }
    }

    setImage(url) {
        this.setState({
            backgroundStyle: {
                backgroundImage: 'url(https://' + url + ')'
            }
        })
    }

    componentWillReceiveProps(props) {
        if (props.image) {
            contentful.getImage(props.image.sys.id)
                .then((res) => {
                    this.setImage(res.data.fields.file.url);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            <div className="hero fluid-container" style={this.state.backgroundStyle}></div>
        )
    }
}