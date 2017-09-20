import React, { Component } from 'react';
import contentful from '../helpers/api_builder';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './landing';
import Post from './post';
import PostSearch from './postSearch';
import Navigation from './navigation';
import Footer from './footer';
import '../styles/main.less';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter onUpdate={() => document.body.scrollTop = 0}>
                <div>
                    <Route path="/" component={Navigation}/>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/post/:slug" component={Post}/>
                    <Route path="/posts/:types/:start" component={PostSearch}/>
                    <Route path="/" component={Footer}/>
                </div>
            </HashRouter>
        );
    }
}