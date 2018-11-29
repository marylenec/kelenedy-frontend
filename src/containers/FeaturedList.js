import React, {Component} from 'react'
import ProductCard from "../components/ProductCard";

class FeaturedList extends Component {

  allFeatured = () => {
    // console.log(this.props)
    return this.props.products.map(product => {
      return <div key={product.id} className="col-lg-3 col-md-4 mb-3 col-sm-6 col-xs-12"><ProductCard key={product.id} product={product} addProductToFavList={this.props.addProductToFavList} addProductToCart={this.props.addProductToCart} /></div>
    })
  }

  render(){
    return (
      <div className="row">
        {this.allFeatured()}
      </div>
    );
  }
}

export default FeaturedList;
