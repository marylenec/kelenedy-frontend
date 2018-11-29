import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    },()=>console.log(this.state))
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" id="current-search" placeholder="Search Brand" value={this.state.searchTerm} onChange={(e) => this.handleChange(e.target.value) }></input>
        <button onClick={()=>this.props.fetchProducts(this.state.searchTerm)}><i className="fa fa-search"/> Search</button>
      </React.Fragment>
    )
  }
}

export default SearchBar;
