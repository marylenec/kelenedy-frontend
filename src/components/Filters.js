import React from 'react'

const Filters = (props) => {

  this.optionsProductType = () => {
    return props.productType.map(option => <option key={option}>{option}</option>)
  }

  return (
    <React.Fragment>
      <label>Filter By Product Type:&nbsp;</label>
      <select onChange={(e) => {props.onFilterChange(e.target.value)}}>
      {this.optionsProductType()}
      </select>
    </React.Fragment>
  )
}

export default Filters;
