import * as actionTypes from './ActionTypes';

export const nextQuestion = () => {
  return {
    type: actionTypes.NEXT_QUESTION,
  }
}

export const prevQuestion = () => {
  return {
    type: actionTypes.PREV_QUESTION,
  }
}


export const setAnswer = (payload) => {
  return {
    type: actionTypes.SET_ANSWER,
    ...payload,
  }
}

/*(MainComponent)
import * as actionCreators from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        currentIndex: state.questions.selectedQuestion,
        answersInfo: state.answers.answersInfo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
        onPrevQuestion: () => dispatch(actionCreators.prevQuestion()),
        setResultAnswer: (data) => dispatch(actionCreators.setAnswer(data))
    }
}


const QuizPage= () => {
  return (
    <Quiz questions={this.state.questions}
        prevBtn={this.props.onPrevQuestion}
        nextBtn={this.props.onNextQuestion}
        setresult={this.props.setResultAnswer}
        currentIndex={this.props.currentIndex}
        answersInfo={this.props.answersInfo} />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);



*/
