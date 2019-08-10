import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';


// import Component from './components/Component'


import {test} from './actions'

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.changeMonkey = this.changeMonkey.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(test("monkey"));

    }

    changeMonkey(){
        console.log(this.props.test)
    }

    

    render(){
        return(
            <button onClick={this.changeMonkey}> Test of Main </button>
        )
    }
}

Main.defaultProps = {}
const mapStateToProps = state => ({
    test: state.test,
});

export default connect(mapStateToProps)(Main); 
