import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar'
import Results from './Results'

import './Homepage.css';

export function Homepage(props) {
        return(
            <div className="homepage-base">
                <div>
                <SearchBar storeQuery={props.storeQuery}/>
                <Results />
                </div>
            </div>
        );
    
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Homepage);