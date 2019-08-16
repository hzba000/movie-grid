import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions'
import MagGlass from './images/magnifying_glass.png'

import './Guide.css';

export class Guide extends React.Component{
        constructor(props){
            super(props)
            this.state={
                showguide:true,
                goodresponse: "If you can live with that, I guess I can too. Search for movies in the corner!",
            }
            this.setName = this.setName.bind(this);
            this.hideGuide = this.hideGuide.bind(this);
        }
            setName(newName){
                this.props.dispatch(setName(newName));
            }

            hideGuide(){
                this.setState({showguide:false})
            }

            render(){
                return(
                    <div class="landing-information-holder"><div class="landing-image-holder" alt="landing"></div><div class="landing-information"><img src={MagGlass} alt="landing" /><h2>{this.props.name} is a tool to let you search for movies, release dates and summaries</h2></div></div>
                )
                
        }
    }

const mapStateToProps = state => ({
    query: state.query,
    data: state.data,
    name:state.name
});

export default connect(mapStateToProps)(Guide);