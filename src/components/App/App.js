import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Comprehension from '../Comprehension/Comprehension';
import Thankyou from '../Thankyou/Thankyou';
import Comments from '../Comments/Comments';
import Supported from '../Supported/Supported';
import Review from '../Review/Review';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';


class App extends Component {

  componentDidMount() {  
    this.getFeedback();
}

//get list of pizzas from server and send to redux
getFeedback = () => {
    axios.get('/feedback')
        .then((response) => {
            console.log('response:', response.data)
            this.props.dispatch({ type: 'FEEDBACK', payload: response.data })
        }).catch((error) => {
            console.log('error in get', error)
        })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/Feeling" component={Feeling} />
          <Route path="/Review" component={Review} />
          <Route path="/Supported" component={Supported} />
          <Route path="/Comments" component={Comments} />
          <Route path="/Thankyou" component={Thankyou} />
          <Route path="/Comprehension" component={Comprehension} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
