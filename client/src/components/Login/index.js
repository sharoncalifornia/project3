import React, { Component } from "react";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    // need more work
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("handle login submit");
  }

  render() {
    return (
      <div className="Login">
        <form className="dest-form">
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input className="form-control" name="email" placeholder="Email"
              value={this.state.email}
              type="email"
              onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input className="form-control password" name="password" placeholder="Password"
              value={this.state.password}
              type="password"
              onChange={this.handleChange}
              required />
          </div>
          <div className="button col-form-label text-center confirm-btn"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
          >
            Login
          </div>
        </form>
      </div>
    );
  }
}


export default Login;