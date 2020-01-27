import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import "../pages/Login.css"
import { Auth } from "aws-amplify";
import Button from 'react-bootstrap/Button'
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div className="Login">
        <center><h1>Login</h1></center>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              type="email"
              placeholder="Enter email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              placeholer="Password..."
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button variant="primary" size="lg" href="/" type="submit" onClick={() => alert("Signed in")} block>
            Login
            </Button>
        </Form>
      </div>
    );
  }
}

