import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewItems from '../ReviewItems/ReviewItems';
import axios from 'axios';

class Review extends Component {
    state = {  }

    componentDidMount() {
        console.log(this.props.feedbackReducer);
    }

    handleSubmit = (feedbackResults) => {
        //console.log('clicked on submit');
        this.props.history.push('/Thankyou');
        //axios.post
        axios.post('/feedback',feedbackResults)
        .then(response => {
            console.log('POST feedback');
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() { 

        let feedbackResults = this.props.feedbackReducer;

        return (  
            <div>
            <p>Review</p>
            {this.props.feedbackReducer.map( (item, i) => 
                <>
                <ReviewItems key={i} item={item} />
                </>
            )}
            <button onClick={() => this.handleSubmit(feedbackResults)}>Submit Feedback</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return{
        feedbackReducer: reduxState.feedbackReducer
    }
}
 
export default connect(mapStateToProps)(Review);