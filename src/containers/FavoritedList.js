import React, { Component } from 'react'
import ProductCardFav from "../components/ProductCardFav";

class FavoritedList extends Component {

  addFav = () => {
    return this.props.favList.map(fav => {
      return <ProductCardFav product={fav} key={fav.id} removeProductToFavList={this.props.removeProductToFavList} />

    })
  }

  render() {
    return (
      <div>
        {this.addFav()}
      </div>
    )
  }
}

export default FavoritedList;
