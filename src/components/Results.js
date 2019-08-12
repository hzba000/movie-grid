import React from 'react';
import {connect} from 'react-redux';
import './Results.css';



import './Homepage.css';

export class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    };



    render(){
        if(this.props.data === null){
           return(
            <div></div>
           )
        }

        if(this.props.data.length >= 1){
            let formatResults = this.props.data.map((entry, index)=>{return <p key={index}>{this.props.data[index].title}</p>})
            return(
                <div className="results-base">
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