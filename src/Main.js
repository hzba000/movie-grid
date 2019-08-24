import React from 'react';
import {connect} from 'react-redux';

import Homepage from './components/Homepage'

import {storeQuery} from './actions'
import {storeData} from './actions'
import {checkApi} from './actions'

const API_KEY = process.env.REACT_APP_API_KEY;


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apiworking: true,
        };
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
            if(response){
                return response.json();
            }
            else{
                this.setState({apiworking:false})
                return Error;
            }
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
                    dataArray.push({"title":myJson.results[i].title||"Title not available",
                                    "overview":myJson.results[i].overview||"Summary not available",
                                    "releasedate":myJson.results[i].release_date||"Date not available", 
                                    "backdrop":myJson.results[i].backdrop_path, 
                                    "poster":myJson.results[i].poster_path})
                }
                this.props.dispatch(storeData(dataArray))
            }
        })
        .catch(()=> {
            console.log("API not working, sorry boss!");
            this.props.dispatch(checkApi(false))
        })
    }
    
    render(){
        if(this.state.apiworking === false){
            return(
                <div>
                <Homepage storeQuery={this.storeQuery}/>
                <p id="nothing-found-text">Doesn't look like the API is sending a response, sorry! </p>
                </div>
            ) 
        }
        else{
            return <Homepage storeQuery={this.storeQuery}/>
        }
    }
}

const mapStateToProps = state => ({
    test: state.test,
    query: state.query,
    data: state.data,
    apiworking: state.apiworking,
});

export default connect(mapStateToProps)(Main); 
