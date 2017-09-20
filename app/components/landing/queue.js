import React, { Component } from 'react';
import contentful from '../../helpers/api_builder';

export default class Queue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        contentful.getQueue()
            .then((res) => {
                console.log('Queue res: ', res);
                this.setState({items: res.data.items[0].fields.queueList});
            })
            .catch((err) => {
                console.log('error');
            })
    }

    renderItems() {
        return this.state.items.map((item) => {
            return <h6 key={item}>{item}</h6>
        })
    }

    render() {
        return(
            <div className="sidebar">
                <div className="title purple">
                    <h2>Up to bat</h2>
                </div>
                <div className="seperator purple">
                    <div className="seperator-deco"></div>
                </div>
                <div className="main">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}