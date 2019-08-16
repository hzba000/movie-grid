import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar'
import Results from './Results'
import Guide from './Guide'



import './Homepage.css';

export class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        if(this.props.data===null){
            return(
                <div className="homepage-base">
                    <div>
                    <SearchBar storeQuery={this.props.storeQuery}/>
                    <Results />
                    <Guide />
                    </div>
                </div>
            ); 
        }
        return(
            <div className="homepage-base">
                <div>
                <SearchBar storeQuery={this.props.storeQuery}/>
                <Results />
                </div>
            </div>
        );
    }

    
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Homepage);