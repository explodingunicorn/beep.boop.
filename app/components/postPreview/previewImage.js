import React, { Component } from 'react';
import contentful from '../../helpers/api_builder';

export default class PreviewImage extends Component {
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

    componentWillMount() {
        if (this.props.image) {
            contentful.getImage(this.props.image.sys.id)
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
            <div className="pic-container">
                <div className="pic" style={this.state.backgroundStyle}></div>
                <div className={"deco " + this.props.color}></div>
            </div>
        );
    }
}