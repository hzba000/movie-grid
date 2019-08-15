import React from 'react';
import {connect} from 'react-redux';
import {setName} from './actions'

// import './Guide.css';

export class Guide extends React.Component() {
        constructor(props){
            super(props),
            this.state={

            }
            this.setName = this.setName.bind(this);
            setName(newName){
                this.props.dispatch(setName(newName));
            }
            render(){
                return(
                    <div>
                        <div>
                            <input type="text" value={this.state.text} onChange={e => this.setName(e.target.value)} />
                        </div>
                    </div>
                );
            }
        }

    
};

const mapStateToProps = state => ({
    query: state.query,
    data: state.data
});

export default connect(mapStateToProps)(Guide);