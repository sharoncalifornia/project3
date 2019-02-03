import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMsg:""
    };
  }

  validateForm = () => {
    let status = false;
    const { email, password } = this.state;
    if (email.length > 0 && password.length > 0) {
        status = true;
    }
    return status;
  }

  handleLogin = event => {
    event.preventDefault();
    console.log("handle login submit");
    if (this.validateForm()) {
      console.log("call login API");
      API.login({
        "email": this.state.email,
        "password": this.state.password
      })
    }
    else {
      this.setState({ errorMsg: "Password not match" });
      console.log("error");
    }
  }

  render() {
    return (
      <div class="fill login-image">
      <div className="Login">
        <form className="dest-form">
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input className="form-control" name="email" placeholder="Email"
              value={this.state.email}
              type="email"
              onChange={event => this.setState({ email: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input className="form-control password" name="password" placeholder="Password"
              value={this.state.password}
              type="password"
              onChange={event => this.setState({ errorMsg: "", password: event.target.value })} required />
          </div>
          <div className="button col-form-label text-center confirm-btn"
            onClick={this.handleLogin}
          >
            Log in
          </div>
          <div id="ErrorMsg">{this.state.errorMsg}</div>
        </form>
      </div>
      </div>
    );
  }
}


export default Login;