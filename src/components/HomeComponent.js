import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state= {
      username: '',
    }
  }

  handleUser(e) {
    const target = e.target;
    const value = target.value;
    const name= target.name;

    this.setState({
      [name]: value
    }, ()=> console.log(this.state));

  }

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <Card>
            <CardBody className="cardbody">
              <CardTitle>
                <h3>Welcome Quizzer!</h3><br/>
                <Button type="button" className="bg-primary"><Link to ="/quiz" className="link">Start Quiz</Link></Button>
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;

/*<Form onSubmit={this.handleUser}>
  <FormGroup>
    <Input type="text" id="username" name="username" placeholder="Your Name" required/>
  </FormGroup>
  <Button type="submit" value="submit" className="bg-primary">Start Quiz</Button>
</Form>*/
