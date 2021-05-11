import React, { Component } from 'react';
import Quiz from './QuizComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { QUESTIONS } from '../shared/questions';
import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QUESTIONS,
    }
  }

  render() {

    return(
      <div>
         <div className="container">
            <h1 className="head">Quiz App</h1>
            <Switch>
              <Route path="/home" component={ Home } />
              <Route path="/quiz" component={()=> <Quiz questions={this.state.questions} /> } />
              <Redirect to="/home" />
            </Switch>
         </div>
      </div>
    );
  }
}

export default Main;

//<Route path="/home" component={() => <Home nameCallback={this.nameCallback} /> } />
