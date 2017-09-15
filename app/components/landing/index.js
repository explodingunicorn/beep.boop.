import React, { Component } from 'react';
import Hero from './hero';
import RecentPosts from './recentPosts';
import contentful from '../../helpers/api_builder';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPost: 0
        }
    }

    componentWillMount() {
        let app = this;

        contentful.getPost('divinity-2-surprises-and-delights')
            .then((res) => {
                console.log(res.data.items[0]);
                app.setState({firstPost: res.data.items[0]});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='Menu'>
                <Hero post={this.state.firstPost} />
                <div className="main-container">
                    <div className="row">
                        <div className="col-md-8">
                            <RecentPosts/>
                        </div>
                        <div className="col-md-4">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}