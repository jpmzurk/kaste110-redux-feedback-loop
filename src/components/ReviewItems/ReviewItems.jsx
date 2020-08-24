import React, { Component } from 'react';

class ReviewItems extends Component {
    state = {  }
    render() { 
        let key = Object.keys(this.props.item)[0]
        return ( 
        <p> {key}: {this.props.item[key]}</p> );
    }
}
 
export default ReviewItems;