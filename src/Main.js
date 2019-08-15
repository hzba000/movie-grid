import React from 'react';
import {connect} from 'react-redux';

import Homepage from './components/Homepage'

import {storeQuery} from './actions'
import {storeData} from './actions'

const API_KEY = process.env.REACT_APP_API_KEY;


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.storeQuery = this.storeQuery.bind(this);
        this.getMovieData = this.getMovieData.bind(this);
    }

    storeQuery(newQuery){
        if(newQuery.length >= 1){
            this.props.dispatch(storeQuery(newQuery))
            this.getMovieData(newQuery);
        }
    }

    getMovieData(newQuery){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${newQuery}`)
        .then(response=> {
          return response.json();
        })
        .then(myJson=>{
        //reset our data for each search
        let dataArray = []
          dataArray.length = 0;
          if(myJson.results === undefined){
              //do nothing
          }
          else{
            for(let i=0; i<myJson.results.length; i++){
                dataArray.push({"title":myJson.results[i].title,"overview":myJson.results[i].overview,"releasedate":myJson.results[i].release_date})
              }
              console.log(dataArray);
              this.props.dispatch(storeData(dataArray))
          }
        })
    }
    
    render(){
        return <Homepage storeQuery={this.storeQuery}/>
    }
}

// Main.defaultProps = {data:[]}
const mapStateToProps = state => ({
    test: state.test,
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Main); 
