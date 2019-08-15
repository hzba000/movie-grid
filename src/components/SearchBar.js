import React from 'react';

import {connect} from 'react-redux';
import MagGlass from './images/magnifying_glass.png'
import Guide from './Guide' 
import {setName} from './actions'

import './SearchBar.css';



export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // query: null,
        };
        this.onSubmitNewQuery = this.onSubmitNewQuery.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
    };

    onSubmitNewQuery(event){
        event.preventDefault();
        let newQuery = this.query.value;
        this.query.value = '';
        // this.setState({query:newQuery});
        this.props.storeQuery(newQuery)
        this.scrollTop();
    };

    scrollTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    render(){
            return(
                <div className="flex-search-holder">
                    <div className="welcome-holder"> Movie Time</div>
                    <div className="search-holder">
                        <form className="search-form" action="#" onSubmit={this.onSubmitNewQuery}>
                            <label htmlFor="newQueryForm"></label>
                            <button type="image" className="search-button"><img src={MagGlass} alt="magnifer" className="button-image"/></button>
                            <input type="text" name="newQueryForm" id="newQueryForm" placeholder={this.props.query} ref={input => this.query = input}/>
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
