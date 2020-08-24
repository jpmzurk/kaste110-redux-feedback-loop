import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comprehension extends Component {
    state = {
            comprehension : 0,
}

    nextPage = () => {
        this.props.history.push('/Supported');
        this.props.dispatch({ type: 'COMPREHENSION', payload: this.state });
    }

    handleComprehension = (event) => {
        this.setState({
            comprehension : event.target.value
        })
        console.log(this.state);
        //this.props.dispatch({ type: 'COMPREHENSION', payload: this.state });

    }

    render() { 
        return (  

            <div>
            <p>How well did you understand the material covered today?</p>
            <input placeholder="0-5" type="number" value={this.state.comprehension} onChange={(event) => this.handleComprehension(event)} />
            <button onClick={this.nextPage}>Next</button>  
            </div>

        );
    }
}
 
export default connect()(Comprehension);