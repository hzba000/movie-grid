import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions'
import Ticket from './images/ticket.png'

import './Guide.css';

export class Guide extends React.Component{
        constructor(props){
            super(props)
            this.state={}
            this.setName = this.setName.bind(this);
        }
        setName(newName){
            this.props.dispatch(setName(newName));
        }

        render(){
            return(
                <div className="landing-information-holder">
                    <div className="landing-image-holder" alt="landing"></div>
                        <div className="landing-information">
                            <h2>{this.props.name} </h2>
                            <img className="guide-image" src={Ticket} alt="ticket" />
                            <h3> Search for movies, release dates and summaries </h3>
                        </div>
                    </div>
            )
        }
}

const mapStateToProps = state => ({
    name:state.name
});

export default connect(mapStateToProps)(Guide);