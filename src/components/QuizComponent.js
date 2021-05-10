import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class  Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: this.props.options.correctIndex,
      score: null,
    }
  }

  checkAnswer= (e) => {
    const target = e.target;
    const value = target.value;
    //console.log(value, this.state.correctAnswer);
    if(value == this.state.correctAnswer){
      this.setState({
        score: this.state.score + 1,
      })
      console.log(this.state.score);
    }
  }

  render() {
    return(
      <div>
      <Button type="button" value='0' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.options.answers[0]}</Button>
      <Button type="button" value='1' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.options.answers[1]}</Button>
      <Button type="button" value='2' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.options.answers[2]}</Button>
      <Button type="button" value='3' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.options.answers[3]}</Button>
      </div>
    );
  }
};



class Quiz extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubmit: false,
        questionId : 1,
      }
    };

    submitQuiz = () => {
      this.setState({
        isSubmit: true,
      })
    }

    handlePrev = () => {
      this.setState({
        questionId: this.state.questionId - 1,
      })
    };

    handleNext = () => {
      this.setState({
        questionId: this.state.questionId + 1,
      })
    };

    componentDidMount(){
      console.log(this.props)
    }

    render() {
      let nextButton = <Button type="button" onClick={this.handleNext} className="bg-primary  ml-auto"><b>Next</b> <span className="fa fa-arrow-right"></span></Button>
      if(this.state.questionId === 6){
        nextButton = <Button type="button" onClick={this.submitQuiz} className="bg-primary  ml-auto"><b>Submit Quiz</b></Button>
      }
      return(
        <div>
          <div className="row">
            <div className="col-12">
              <h1 className="head2">Hey XYZ, Good Luck!</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <Card>
                <CardBody className="cardbody">
                  <CardTitle>
                    <h4>Question: {this.state.questionId}</h4><br/>
                    <h6>{this.props.questions.[this.state.questionId-1].question}</h6>
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>


          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <Card>
                <CardBody className="cardbody">
                  <CardTitle>
                    <Options options={this.props.questions[this.state.questionId-1]}
                      score={this.state.score} />
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
              <div className="col-12  col-md-6 offset-md-3 btn-pn">
               {this.state.questionId > 1 ? <Button type="button" onClick={this.handlePrev} className="bg-primary"><b><span className="fa fa-arrow-left"></span> Previous</b></Button> : null }
               <Button type="button" className="bg-danger ml-4"><Link to="/home" className="link"><b><span className="fa fa-times-circle"></span> Quit</b></Link></Button>
                { nextButton }
              </div>
          </div>
        </div>
      );
    }
}

export default Quiz;
