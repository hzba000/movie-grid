import React from 'react';

import {connect} from 'react-redux';

import {storeData} from '../actions'


export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            query: null,
        };
        this.onSubmitNewQuery = this.onSubmitNewQuery.bind(this);
    };

    onSubmitNewQuery(event){
        event.preventDefault();
        let newQuery = this.query.value;
        this.query.value = '';
        this.setState({query:newQuery});
        this.props.storeQuery(newQuery)
    };

    render(){
            return(
                
                    <form action="#" onSubmit={this.onSubmitNewQuery}>
                        <label htmlFor="newQueryForm">Enter a new query</label>
                        <input type="text" name="newQueryForm" id="newQueryForm" ref={input => this.query = input}/>
                        <button type="submit"> Submit </button>
                    </form>         
                    
            );   
    };
};

const mapStateToProps = state => ({
    query:state.query,
    data: state.data
});

export default connect(mapStateToProps)(SearchBar);
