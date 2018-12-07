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

        { this.props.currentUser.id ?
          <form className="right">
          <div className="form-group mx-sm-3"><button className="btn btn-primary" onClick={(e) => this.props.handleLogOut()}>Log Out</button></div></form> :
        <form className ="form-inline right" onSubmit={(e) => this.props.handleSubmit(e)}>
          <div className="form-group mx-sm-3">
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" placeholder="Username" type="text" onChange={(e) => this.props.handleChange(e)}/>
          </div>
          <div className="form-group mx-sm-3">
            <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" placeholder="Password" onChange={(e) => this.props.handleChange(e)} />
          </div>
          <div className="form-group mx-sm-3">
            <button className="btn btn-primary" type="submit">Log In</button>
          </div>
          <div className="form-group mx-sm-3" style={{cursor:'pointer'}}>
            <small onClick={(e) => this.props.displayCreateUser()} >Create an Account</small>
          </div>
        </form>}
        { this.props.displayState === 'createUser' ?
          <div className='ReviewCard'>
          <h4 className='subtitle'>Enter Log In Information</h4>
          <form className="user form-group mx-sm-3" onSubmit={(e)=> this.props.handleCreateUser(e, this.props.newUser)}>
          <div className="form-row mx-sm-3">
            <div className="col">
              <label htmlFor="username">Username: </label>
              <input name="username" id="username" className="form-control" type="text" onChange={(e) => this.props.handleUserChange(e)} />
            </div>
            <div className="col">
              <label htmlFor="password">Password: </label>
              <input name="password" id="password" className="form-control" type="text" onChange={(e) => this.props.handleUserChange(e)} />
            </div>
          </div>
          <br/>
          <br/>
          <div className="form-row mx-sm-3">
            <div className="col">
              <label htmlFor="first name">First Name: </label>
              <input name="first_name" id="first_name" className="form-control" type="text" onChange={(e) => this.props.handleUserChange(e)} />
            </div>
            <div className="col">
              <label htmlFor="last name">Last Name: </label>
              <input name="last_name" id="last_name" className="form-control" type="text" onChange={(e) => this.props.handleUserChange(e)} />
            </div>
          </div>
          <div className="form-row mx-sm-3">
            <div className="col">
              <label htmlFor="bio">Bio: </label>
              <input name="bio" id="bio" className="form-control" type="text" onChange={(e) => this.props.handleUserChange(e)} /><br/>
          <button className="btn btn-primary" onClick={(e) => this.props.handleCreateUser(e, this.props.newUser)}>Save</button>
          </div>
          </div>
          </form>
        </div> : null}
        </div>
      </div>
    <div className="row profile">
    <div className="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path1} alt="lipstick" />
    </div></div>
    <div className="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path2} alt="blush" /></div></div>
    <div className="col-md-4"><div className="card h-100">
    <img className="card-img-default" src={this.path3} alt="eyeshadow" /></div></div>
    </div>
    </div>

  );
  }
}

export default LoginForm;
