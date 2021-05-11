import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Button , CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import Timer from './timerComponent';


class Quiz extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubmit: false,
        questionId : 1,
        score: 0,
      }
      this.checkAnswer = this.checkAnswer.bind(this);
      this.submitQuiz = this.submitQuiz.bind(this);
      this.handlePrev = this.handlePrev.bind(this);
      this.handleNext = this.handleNext.bind(this);

    }

    checkAnswer(e){
      const target = e.target;
      const value = target.value;
      const correctAnswer = this.props.questions[this.state.questionId-1].correctIndex;

      if (this.state.questionId != 6) {
        this.setState({
          questionId: this.state.questionId + 1,
        })

      }

      console.log(value, correctAnswer);
      if(value == correctAnswer ){
        this.setState({
          score: this.state.score + 1,
        },() => console.log(this.state.score))
      };
    }

    submitQuiz(){
      this.setState({
        isSubmit: true,
      })
    }

    handlePrev(){
      this.setState({
        questionId: this.state.questionId - 1,
      })
    };

    handleNext() {
      this.setState({
        questionId: this.state.questionId + 1,
      })
    };

    render() {
      let nextButton = <Button type="button" onClick={this.handleNext} className="bg-primary  ml-auto"><b>Next</b> <span className="fa fa-arrow-right"></span></Button>
      if(this.state.questionId === 6){
        nextButton = <Button type="button" onClick={this.submitQuiz} className="bg-primary  ml-auto"><b>Submit Quiz</b></Button>
      }

      let scoreView = '';
      if(this.state.isSubmit){
        scoreView = 'Score : ' + this.state.score;
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
               <Timer />
              </CardBody>
             </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <Card>
                <CardBody className="cardbody">
                  <CardTitle>
                    <h4>Question: {this.state.questionId}</h4><br/>
                    <h6>{this.props.questions[this.state.questionId-1].question}</h6>
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
                    <Button type="button" value='0'  className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.questions[this.state.questionId-1].answers[0]}</Button>
                    <Button type="button" value='1' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.questions[this.state.questionId-1].answers[1]}</Button>
                    <Button type="button" value='2' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.questions[this.state.questionId-1].answers[2]}</Button>
                    <Button type="button" value='3' className="bg-secondary btn-block" onClick={this.checkAnswer}>{this.props.questions[this.state.questionId-1].answers[3]}</Button>
                  </CardTitle>
                  <CardFooter><h4>{scoreView}</h4></CardFooter>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
              <div className="col-12  col-md-6 offset-md-3 btn-pn">

               <Button type="button" className="bg-danger"><Link to="/home" className="link"><b><span className="fa fa-times-circle"></span> Quit</b></Link></Button>
               {nextButton}
              </div>
          </div>

        </div>
      );
    }
}

export default Quiz;

//{this.state.questionId > 1 && !this.state.isSubmit ? <Button type="button" onClick={this.handlePrev} className="bg-primary"><b><span className="fa fa-arrow-left"></span> Previous</b></Button> : null }
//{ nextButton }
