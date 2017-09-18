import React, { Component } from 'react';
import contentful from '../helpers/api_builder';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './landing';
import Post from './post';
import Navigation from './navigation';
import '../styles/main.less';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" component={Navigation}/>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/post/:slug" component={Post}/>
                </div>
            </HashRouter>
        );
    }
}