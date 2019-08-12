import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './components/Homepage'
import Results from './components/Results'

// import Component from './components/Component'
import {storeQuery} from './actions'
import {storeData} from './actions'




import {test} from './actions'
let dataArray = [];


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:null,
        };
        this.changeMonkey = this.changeMonkey.bind(this);
        this.checkQuery = this.checkQuery.bind(this);
        this.checkData = this.checkData.bind(this);
        this.storeQuery = this.storeQuery.bind(this);
        this.getMovieData = this.getMovieData.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(test("monkey"));
    }

    changeMonkey(){
        console.log(this.props.test)
    }

    checkQuery(){
        console.log(this.props.query)
    }

    checkData(){
        console.log(this.props.data)

    }

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
          dataArray.length = 0;

          for(let i=0; i<myJson.results.length; i++){
            dataArray.push({"title":myJson.results[i].title,"overview":myJson.results[i].overview,"releasedate":myJson.results[i].release_date})
          }
          console.log(dataArray);
        })
        this.props.dispatch(storeData(dataArray))
        this.setState({data:this.props.data})
        console.log(this.props.data)
    }
    
    render(){
        // if(this.props.data === null){
        //     return(
        //         <div>
        //         <button onClick={this.getMovieData}> Test of Main </button>
        //         <button onClick={this.checkQuery}> Check Query </button>
        //         <button onClick={this.checkData}> Check Data </button>
        //         <Homepage storeQuery={this.storeQuery}/>
        //         </div>
        //     )
        // }
        // return(
        //     <div>
        //     <button onClick={this.getMovieData}> Test of Main </button>
        //     <button onClick={this.checkQuery}> Check Query </button>
        //     <button onClick={this.checkData}> Check Data </button>
        //     <Homepage storeQuery={this.storeQuery}/>
        //     <Results />
        //     </div>
        // )
        let dataProp = [...dataArray]
        let display = (this.props.data)?<div><Homepage storeQuery={this.storeQuery}/><Results dataProp={dataProp}/></div>:<Homepage storeQuery={this.storeQuery}/>
        return display;
    }
}

// Main.defaultProps = {data:[]}
const mapStateToProps = state => ({
    test: state.test,
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Main); 
