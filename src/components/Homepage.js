import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchBar from './SearchBar'

// import {storeQuery, storeData} from '../actions'
import {storeQuery} from '../actions'



import './Homepage.css';

let dataArray = [];


export class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.storeQuery = this.storeQuery.bind(this);
        this.getMovieData = this.getMovieData.bind(this);
    };

    storeQuery(newQuery){
        this.props.dispatch(storeQuery(newQuery))
        this.getMovieData(newQuery);
    }
    
    getMovieData(newQuery){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&query=${newQuery}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
        //reset our data for each search
          dataArray = [];

          for(let i=0; i<myJson.results.length; i++){
            dataArray.push({"title":myJson.results[i].title,"overview":myJson.results[i].overview,"releasedate":myJson.results[i].release_date})
            //   console.log(myJson.results[i].title);
            //   console.log(myJson.results[i].release_date);
            //   console.log(myJson.results[i].overview);
            // console.log(myJson.results[i].title, myJson.results[i].release_date, myJson.results[i].overview)
          }
          console.log(dataArray);
        })
        // this.props.dispatch(storeData(dataArray));
    }

    render(){
        return(
            <div className="homepage-base">
                <SearchBar storeQuery={this.storeQuery}/>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Homepage);