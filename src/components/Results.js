import React from 'react';
import {connect} from 'react-redux';


import './Homepage.css';

export class Homepage extends React.Component{
    constructor(props){
        super(props)
    };

    componentWillReceiveProps(){
        console.log("got new stuff")
        console.log(this.props.data)
    }

    render(){
        if(this.props.data === null){
           return <div>Type in a search to find movies</div>
        }

        if(this.props.data.length > 1){
            let formatResults = this.props.data.map((entry, index)=>{return <p key={index}>{this.props.data[index].title}</p>})
            return(
                <div className="homepage-base">
                {formatResults}
                </div>
            );
        }

        else {
            return <div>Nothing here yey</div>
        }

    };
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Homepage);