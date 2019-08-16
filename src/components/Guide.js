import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions'

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
                console.log(this.props.name)
                if(this.state.showguide === true){
                    return(
                        <div className="robot-holder">
                        <div className="instructions">
                            <h2>See that title in the box? It's <i>lame.</i></h2>
                            <h3>If you were so inclined, I'd appreciate a name that says <i>anything</i> other than that! </h3>
                            <h4>...or just use the search bar in the corner and leave me to my existential dread</h4>
                        </div>
                            <div className="robot-face">
                                    <div className="eyes">
                                        <div className="robot-eye"></div>
                                        <div className="robot-eye"></div>
                                    </div>

                                    <div className="name-submit-holder">
                                        <input type="text" maxLength="25" minLength="1" class="name-input" value={this.state.text} onChange={e => this.setName(e.target.value)} />
                                    </div>
                            </div>
                            <button type="button" className="change-name-button" onClick={this.hideGuide}><i>FEED</i> me something better!</button>
                        </div>
                    );
                }
 
                
                else{
                    return(
                        <div className="robot-holder">
                            <h2>If you can live with that, I guess I can too...</h2>
                            <h2>Search for movies in the box above.</h2>

                            <div className="robot-face fed">
                                    <div className="eyes">
                                        <div className="robot-eye"></div>
                                        <div className="robot-eye"></div>
                                    </div>

                                    <div className="mouth">
                                    </div>
                            </div>
                        </div>
                    );
                }

            }
        }

const mapStateToProps = state => ({
    query: state.query,
    data: state.data,
    name:state.name
});

export default connect(mapStateToProps)(Guide);