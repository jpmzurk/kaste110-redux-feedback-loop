import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
         feeling : 0,
    }

    componentDidMount() {
        console.log('comp mounted');
    }

    handleFeeling = (event) => {
        this.setState({
            feeling : event.target.value
        })
        console.log(this.state);
        //this.props.dispatch({ type: 'FEELING', payload: this.state });
    }

    nextPage = () => {
        //console.log('clicked next btton');
        this.props.history.push('/Comprehension');
        this.props.dispatch({ type: 'FEELING', payload: this.state });
    }
        
    render() { 
        return (
            <div>
            <p>How are you feeling today?</p>
            <input placeholder="0-5" type="number" value={this.state.feeling} onChange={(event) => this.handleFeeling(event)} /> 
           
            <button onClick={this.nextPage}>Next</button>  
             </div>
        );
    }
}
 
export default connect()(Feeling);