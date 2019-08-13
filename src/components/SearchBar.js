import React from 'react';

import {connect} from 'react-redux';

import './SearchBar.css';

import MagGlass from './images/magnifying_glass.png'


export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // query: null,
        };
        this.onSubmitNewQuery = this.onSubmitNewQuery.bind(this);
    };

    onSubmitNewQuery(event){
        event.preventDefault();
        let newQuery = this.query.value;
        this.query.value = '';
        // this.setState({query:newQuery});
        this.props.storeQuery(newQuery)
    };

    render(){
            return(
                <div className="flex-search-holder">
                    <div className="welcome-holder"> Movies for Jeff!!</div>
                    <div className="search-holder">
                        <form action="#" onSubmit={this.onSubmitNewQuery}>
                            <label htmlFor="newQueryForm"></label>
                            <button type="image"> Submit </button>
                            <input type="text" name="newQueryForm" id="newQueryForm" ref={input => this.query = input}/>
                        </form>  
                    </div>
                </div>
       
                    
            );   
    };
};

const mapStateToProps = state => ({
    query:state.query,
    data: state.data
});

export default connect(mapStateToProps)(SearchBar);
