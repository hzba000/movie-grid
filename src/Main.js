import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './components/Homepage'

// import Component from './components/Component'


import {test} from './actions'

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.changeMonkey = this.changeMonkey.bind(this);
        this.checkQuery = this.checkQuery.bind(this);
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

    // getMovieData(){
    //     fetch('https://api.themoviedb.org/3/search/movie?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&query=Jack+Reacher')
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //     //   console.log(myJson.results[0].title);
    //     //   console.log(myJson.results[0].release_date);
    //     //   console.log(myJson.results[0].overview);

    //       for(let i=0; i<myJson.results.length; i++){
    //         console.log(myJson.results[i].title, myJson.results[i].release_date, myJson.results[i].overview)
    //       }


    //     });
    // }

    

    render(){
        return(
            <div>
            {/* <button onClick={this.getMovieData}> Test of Main </button>
            <button onClick={this.checkQuery}> Check Query </button> */}
            <Homepage />
            </div>
        )
    }
}

Main.defaultProps = {}
const mapStateToProps = state => ({
    test: state.test,
    query: state.query
});

export default connect(mapStateToProps)(Main); 
