import React, { Component } from 'react';

class Home extends Component {
    state = {  }

    startFeedback = () => {
        console.log('clicked start button');
        this.props.history.push('/Feeling');
    }

    render() { 
        return (
            <>
            <p>Please give us some feedback!</p>
            <div>
                <button onClick={this.startFeedback}>Start</button>
            </div>
            </>
        );
    }
}
 
export default Home;