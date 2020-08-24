import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments : ''
   }

   handleComments = (event) => {
    this.setState({
        comments : event.target.value
    })
    console.log(this.state);
    //this.props.dispatch({ type: 'COMMENTS', payload: this.state });
   }
    nextPage = () => {
        this.props.history.push('/Review')
        this.props.dispatch({ type: 'COMMENTS', payload: this.state });
    }
    render() { 
        return (  
            <div>
            <p>Is there anything else you would like us to know?</p>
            <input placeholder="" type="text" value={this.state.comments} onChange={(event) => this.handleComments(event)} />
            <button onClick={this.nextPage}>Next</button>  
            </div>
        );
    }
}
 
export default connect()(Comments);