import React, {Component} from 'react'

class Cart extends Component {

  sumProducts = () => {
    return (
      <tfoot>
        <tr>
          <td>
            <a href="#" className="btn">
              <i className="fa fa-angle-left"></i>
              Continue Shopping</a>
          </td>
          <td colSpan="2" className="hidden-xs text-center">
            <strong>Total $1.99</strong>
          </td>
          <td>
            <a href="#" className="btn">Checkout
              <i className="fa fa-angle-right"></i>
            </a>
          </td>
        </tr>
      </tfoot>
    )
  }

  setQuantity = (e) => {
    console.log(e.target.value)
    return (
      parseInt(e.target.value)
    )
  }

  cartProducts = () => {
    return this.props.cart.map(item => {
      return (
        <tbody key={item.id}>
          <tr>
            <td data-th="Product">
              <img src={item.image_link} alt="{item.name}" className="img-responsive" style={{width:'150px'}}/>
              <h4 className="nomargin">{item.name}</h4>
              <p>{item.description}</p>
            </td>
            <td data-th="Price">{item.price}</td>
            <td data-th="Quantity">
            <select className="form-control" id="exampleFormControlSelect1" style={{width:'40px'}} onChange={(e) => this.setQuantity(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </td>
            <td data-th="Subtotal" className="text-center">{item.price}{this.setQuantity}</td>
            <td className="actions" data-th="">
              <i className="fa fa-trash" />
            </td>
          </tr>
        </tbody>
      )
    })
  }

  render() {
    console.log(this.props)

    return (
      <div className='container cart'>
          {this.props.cart.length > 0
          ?
          <table id="cart" className="table table-hover table-condensed">
          {this.cartProducts()}
          {this.sumProducts()}
          </table>
          : <table id="cart" className="table table-condensed">
          <tbody>
          <tr><td>Your Cart is Empty.</td></tr>
          </tbody>
          </table>
          }
      </div>
      )
    }
  }

export default Cart;
