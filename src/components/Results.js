import React from 'react';
import {connect} from 'react-redux';
import './Results.css';




export class Results extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    };



    render(){
        if(this.props.data === null || undefined){
           return(
            <div></div>
           )
        }

        if(this.props.data.length >= 1){
            // let formatSummary = this.props.data.map((entry, index)=>{return <div class="ind-results-flex-container"key={index}>{this.props.data[index].overview}</div>})
            // let formatTitle = this.props.data.map((entry, index)=>{return <div class="ind-results-flex-container"key={index}>{this.props.data[index].title}</div>})
            // let formatDate= this.props.data.map((entry, index)=>{return <div class="ind-results-flex-container"key={index}>{this.props.data[index].releasedate}</div>})
            let formatData = this.props.data.map((entry, index)=>{return <div className="flex-row" style ={ { backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.data[index].backdrop})`,backgroundSize: 'cover',backgroundColor:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.random()*1})`} } key={index + "container"}><div className="title-box" key={index+"title"}>{this.props.data[index].title}</div><div className="date-box" key={index+"date"}>{this.props.data[index].releasedate}</div><div className="summary-box" key={index + "summary"}>{this.props.data[index].overview}</div></div>})

            return(
                    <div>
                        <div className="flex-row legend hidden">
                            <div className="title-box title-box-legend">Title</div>
                            <div className="date-box date-box-legend">Release Date</div>
                            <div className="summary-box summary-box-legend">Summary</div>
                        </div>
                        <div className="data-wrapper">{formatData}</div>
                    </div>

            );
        }

        else {
            return <div id="nothing-found-text">Sorry, we didn't find anything. Try another search!</div>
        }

    };
};
Results.defaultProps = {data:[{},{},{}]}

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Results);