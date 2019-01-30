import React, { Component } from "react";
import "./style.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      retypepassword: "",
    };
  }

  validateForm() {
    // need more work here
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
    console.log("handle signup submit");
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
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Re-type Password</label>
            <input className="form-control password" name="retypepassword"  placeholder="Password"
              value={this.state.retypepassword}
              type="password"
              onChange={this.handleChange}
              required />
          </div>
          <div className="button col-form-label text-center confirm-btn"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
          >
            Sign up
          </div>
        </form>
      </div>
    );
  }
}


export default Signup;