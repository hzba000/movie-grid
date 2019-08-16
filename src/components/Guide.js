import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions'
import Camera from './images/camera.png'

import './Guide.css';

export class Guide extends React.Component{
        constructor(props){
            super(props)
            this.state={}
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
                <div class="landing-information-holder">
                    <div class="landing-image-holder" alt="landing"></div>
                        <div class="landing-information">
                            <img src={Camera} alt="landing" />
                            <h2>{this.props.name} is a tool to let you search for movies, release dates and summaries</h2>
                        </div>
                    </div>
            )
        }
}

const mapStateToProps = state => ({
    name:state.name
});

export default connect(mapStateToProps)(Guide);