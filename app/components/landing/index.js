import React, { Component } from 'react';
import Hero from './hero';
import PostList from '../postList';
import contentful from '../../helpers/api_builder';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='Menu'>
                <Hero/>
                <div className="main-container">
                    <div className="row">
                        <div className="col-md-8">
                            <PostList postAmount={3} types={['Game', 'Music', 'Book', 'Movie']} text="Reviews"/>
                            <PostList postAmount={3} types={['Opinion']} text="Opinions"/>
                        </div>
                        <div className="col-md-4">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}