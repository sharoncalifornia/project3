import React, { Component } from "react";
import "./style.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      retypepassword: "",
      errorMsg: ""
    };
  }

  validateForm = () => {
    let status = false;
    const { email, password, retypepassword } = this.state;
    if (email.length > 0 && password.length > 0 && retypepassword.length > 0) {
      if (password === retypepassword) {
        status = true;
      }
    }
    return status;
  }

  handleSignup = event => {
    event.preventDefault();
    console.log("handle signup submit");
    if (this.validateForm()) {
      console.log("call signup API");
    }
    else {
      this.setState({ errorMsg: "Password not match" });
      console.log("error");
    }
  }

  render() {
    return (
    <div class="fill signup-image">
      <div className="Login">
        <form className="dest-form">
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input className="form-control" name="email" placeholder="Email"
              type="email"
              onChange={event => this.setState({ email: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input className="form-control password" name="password" placeholder="Password"
              type="password"
              onChange={event => this.setState({ errorMsg: "", password: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Re-type Password</label>
            <input className="form-control password" name="retypepassword" placeholder="Password"
              type="password"
              onChange={event => this.setState({ errorMsg: "", retypepassword: event.target.value })} required />
          </div>
          <div className="button col-form-label text-center confirm-btn"
            onClick={this.handleSignup}
          >
            Sign up
          </div>
          <div id="ErrorMsg">{this.state.errorMsg}</div>
        </form>
      </div>
    </div>
    );
  }
}


export default Signup;