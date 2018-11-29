import React from 'react'

const ProductCardFav = (props) => {
  const {product} = props;
  return (
    <div className="card h-100 override">
      <div className="row">
        <div className="col-md-6">
          <img className="card-img-top" src={product.image_link} alt="Product Image"/>
        </div>
        <div className="col-md-6">
          <div className="card-body-fav">
            <strong className="card-text">{product.name}</strong>
            <br/><small className="fav-me-small"><i className="fa fa-heart" onClick={(e) => props.removeProductToFavList(product)}/>Remove Fav
            </small>
            <button className="btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>)
}

export default ProductCardFav;
