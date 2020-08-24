import React, { Component } from 'react';

class Thankyou extends Component {
    state = {  }

    newFeedback = () => {
        this.props.history.push('/');
    }
    render() { 
        return (  
            <div>
            <p>Thankyou</p>
            <button onClick={this.newFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}
 
export default Thankyou;