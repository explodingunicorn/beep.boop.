import React, { Component } from 'react';
import PostList from '../postList';

export default class PostSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 0,
            types: 0
        }
    }

    getTypes(props) {
        let str = props.match.params.types;
        let types;

        if (str.includes('-')) {
            types = props.match.params.types.split('-');
        }
        else {
            types = [str];
        }

        return types;
    }

    loadParams(props) {
        let newTypes = this.getTypes(props);

        this.setState({
            pageNumber: parseInt(props.match.params.start),
            types: newTypes
        }, () => {
            console.log(this.state);
        });
    }

    componentWillMount() {
        this.loadParams(this.props);
    }

    componentWillReceiveProps(props) {
        this.loadParams(props);
    }

    render() {
        return (
            <div className="only main-container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <PostList postAmount={15} postStart={this.state.pageNumber} types={this.state.types} text='Review Search'/>
                    </div>
                </div>
            </div>
        )
    }
}