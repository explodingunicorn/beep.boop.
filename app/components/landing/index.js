import React, { Component } from 'react';
import Hero from './hero';
import PostList from '../postList';
import Queue from './queue';
import { Link } from 'react-router-dom';
import contentful from '../../helpers/api_builder';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className='Menu'>
                <Hero/>
                <div className="main-container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <PostList postAmount={3} postStart={0} types={['Game', 'Music', 'Book', 'Movie']} text="Recent Reviews" viewMore={true}/>
                            <Link to="/posts/Game-Movie-Book-Music/0" className="inverted-button game"><h4 className="text-green">View more reviews</h4></Link>

                            <PostList postAmount={3} postStart={0} types={['Opinion']} text="Recent Opinions"/>
                            <Link to="/posts/Opinion/0" className="inverted-button opinion"><h4 className="text-red">View more opinions</h4></Link>
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12">
                            <Queue/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}