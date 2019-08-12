import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchBar from './SearchBar'
import Results from './Results'



import './Homepage.css';

export class Homepage extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className="homepage-base">
                <div>
                <SearchBar storeQuery={this.props.storeQuery}/>
                <Results />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Homepage);