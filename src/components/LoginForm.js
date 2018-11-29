import React, {Component} from 'react'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.state.username || !this.state.password)
      return
    this.props.onSubmit(this.state)
  }

path1 = require(`../images/lipstick.jpg`)
path2 = require(`../images/blush.jpg`)
path3 = require(`../images/eyeshadow.jpg`)

  render() {
    return (
      <div className="container login">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xs-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                Username
                <input className="form-control" id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
              </label>
            </div>
            <div className="form-group">
              <label>
                Password
                <input className="form-control" id="password" name="password" type="password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-submit" type="submit">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    <div class="row profile">
    <div class="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path1} alt="lipstick" />
    </div></div>
    <div class="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path2} alt="blush" /></div></div>
    <div class="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path3} alt="eyeshadow" /></div></div>
    </div>
    </div>

  );
  }
}

export default LoginForm;
