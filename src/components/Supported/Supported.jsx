import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Supported extends Component {
    state = {
        support : 0,
    }

    handleSupport = (event) => {
        this.setState({
            support : event.target.value
        })
        console.log(this.state);
        //this.props.dispatch({ type: 'SUPPORT', payload: this.state });
    }

    nextPage = () => {
        this.props.history.push('/Comments');
        this.props.dispatch({ type: 'SUPPORT', payload: this.state });
    }

    render() { 
        return (  
            <div>
            <p>How well do you feel you are being supported?</p>
            <input placeholder="0-5" type="number" value={this.state.support} onChange={(event) => this.handleSupport(event)} />
            <button onClick={this.nextPage}>Next</button>  
            </div>
        );
    }
}
 
export default connect()(Supported);