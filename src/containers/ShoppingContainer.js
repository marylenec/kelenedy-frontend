import React, {Component} from 'react'
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "./ProductList";
import FavoritedList from "./FavoritedList";
import FeaturedList from "./FeaturedList";
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Cart from './Cart';
import LoginForm from "../components/LoginForm";
import ProductSpecs from '../components/ProductSpecs';
import Footer from '../components/Footer';
import './ShoppingContainer.css';
// import LoginForm from "../components/LoginForm";

class ShoppingContainer extends Component {

  constructor() {
    super();
    this.products = []
    this.state = {
      reviews: [],
      username: "",
      password: "",
      currentUser: {},
      loginError: "",
      selectedReview: null,
      newReview: {},
      displayStatus: 'default',
      searchTerm: "",
      createUser: false,
      newUser: {},
      products: [],
      favoritedProducts: [],
      featuredProducts: 'None',
      showDetails: null,
      filterBy: 'None',
      productType: [],
      cart: []
    }
  }

  componentDidMount = () => {
    this.fetchProducts()
    this.fetchUser()
    // this.scrollFunction()
  }

  fetchProducts = (searchTerm) => {
    // console.log(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_tags=${searchTerm}`)

    if (searchTerm === undefined) {
      fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)
        .then(res => res.json())
        .then(products => {
          this.products = products;
          this.addProductToState(products)
          this.addProductTypeToState(products)
    }
  )
} else
fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchTerm}`)
.then(res => res.json())
.then(products => {
  this.products = products;
  this.addProductToState(products)
  this.addProductTypeToState(products)
  }
)
}

  fetchUser = () => {
    const token = localStorage.token;

    if (this.state.currentUser) { fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (!data.error) {
        this.setState({
          currentUser: data
        });
      }
    })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/login', {
      method: "POST",
      body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      headers: {
        "Content-Type": "application/json"
      }
    }, alert("Welcome Back!"))
  }

  handleUserChange = (e) => {
    let value = e.target.value
    let keyName = e.target.name
    this.setState(state => {
      state.newUser[keyName] = value
      return state
    })
  }

  displayCreateUser = () => {
    this.setState({
      createUser: true,
      displayStatus: 'createUser'
      }, () => console.log(this.state))
  }

  handleCreateUser = (e, newUser) => {
    e.preventDefault()

    fetch('http://localhost:3000/users/', {
      method: "POST",
      body: JSON.stringify(
        newUser
      ),
      headers: {
        "Content-Type": "application/json"
      }
    })
     .then(res => res.json())
     .then(data => {
       if (!data.error) {
         localStorage.token = data.token;
         this.setState({
           currentUser: data.user,
           createUser: false,
           displayStatus: 'confirmNewUser'
         },()=>console.log(data.token));
       }
     })
  }

  handleLogOut = (e) => {
    localStorage.token = "";
  }

  addProductToState = (products) => {
    this.setState({products: products})
    console.log(this.state.products.map(product => product.brand))
  }

  addProductTypeToState = (products) => {
    let product_type = this.state.products.map(product => product.product_type)
    let options = [...new Set(product_type)]
    options.unshift('None')

    this.setState({productType: options})
  }

  addProductToFavList = (product) => {
    console.log(product)
    if (!this.state.favoritedProducts.includes(product)) {
      this.setState(state => {
        state.favoritedProducts.push(product)
        return state
      })
    }
  }

  removeProductToFavList = (product) => {
    this.setState(state => {
      let index = state.favoritedProducts.indexOf(product)
      state.favoritedProducts.splice(index, 1)
      return state
    })
  }

  addProductToCart = (product) => {
    console.log(product)
    if (!this.state.cart.includes(product)) {
      this.setState(state => {
        state.cart.push(product)
        return state
      })
    }
  }

  removeProductToCart = (product) => {
    this.setState(state => {
      let index = state.cart.indexOf(product)
      state.cart.splice(index, 1)
      return state
    })
  }

  onFilterChange = (filterBy) => {
    // destructive
    // this.setState({
    //   filterBy: filterBy,
    //   products: this.state.products.filter(product => product.product_type === filterBy)
    // },() => console.log(this.state))
    this.setState({
      filterBy: filterBy
    }, () => console.log(this.state))
  }

  filterProducts = () => {
    let productResults = [...this.state.products]
    this.state.filterBy === 'None'
      ? productResults = [...this.state.products]
      : productResults = productResults.filter(product => product.product_type === this.state.filterBy)
    return productResults
    // console.log(productResults)
  }

  featuredProducts = () => {
    // return this.state.products.filter(product => product.rating == 5)
    let productResults = this.state.products.filter(product => product.rating === 5)
    return productResults
    // console.log(productResults)
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// passing in the object when the callback is invoked at the child level
  // handleSelectedProduct = (product) => {
  //   this.setState({
  //     selectedProduct: product
  //   },() => console.log(product))
  // }

  // setQuantity = (e) => {
  //   console.log(e.target.value)
  // }

  render() {
    return (
      <div className="main-content">
      <NavBar cartCount={this.state.cart}/>
      <Route exact path ="/" render={() => {
        return (<div className="container-fluid">
        <h3 className="Shop-header"></h3>
        <i className="fa fa-arrow-up" onClick={this.topFunction} id="scrollBtn"/>
        <section className="products">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12">
            <h4 className="subtitle">Featured Products</h4>
        {
            this.state.featuredProducts.length > 0
          ? <FeaturedList products={this.featuredProducts()} addProductToFavList={this.addProductToFavList} addProductToCart={this.addProductToCart} />
          : <p>Loading products with rating of 5 could take a sec...</p>
        }
        </div>
      </div>
    </section>
          </div>
        )
        }} />
      <Switch>
      <Route exact path='/shop' render={() => {
        return (<div className="container-fluid">
        <h3 className="Shop-header"></h3>
        <i className="fa fa-arrow-up" onClick={this.topFunction} id="scrollBtn"/>
        <section className="searchfilter">
          <div className="row">
            <div className="col-md-12">
              <span className="options">
              <SearchBar fetchProducts={this.fetchProducts}/></span>
              <span className="options"><Filters products={this.state.products} productType={this.state.productType} onFilterChange={this.onFilterChange}/></span>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              {
                this.state.products.length > 0
                  ? <ProductList products={this.filterProducts()}
                  addProductToCart={this.addProductToCart} addProductToFavList={this.addProductToFavList} />
                  : <p>Loading products from another API could take a sec...</p>
              }
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="subtitle">Favorite List</h4>
              {
                this.state.favoritedProducts.length > 0
                  ? <FavoritedList
                  addProductToCart={this.addProductToCart} favList={this.state.favoritedProducts} removeProductToFavList={this.removeProductToFavList}/>
                  : <p>Currently No Favorites</p>
              }
            </div>
          </div>
        </section>
        </div>
      )
    }} />
        <Route path="/shop/:id" render = {(props) => {
          // debugger
          let productId = parseInt(props.match.params.id)
          return <ProductSpecs product={this.products.find(product => product.id === productId)}/>
        }} />
        </Switch>
        <Route exact path="/cart" render={() => {
          return (
              <Cart cart={this.state.cart}  removeProductToCart={this.removeProductToCart} />
          )
        }}/>
        <Route exact path="/login" render = {() => {
          return (
            <LoginForm
              handleChange={this.handleChange} handleSubmit={this.handleSubmit}
              handleUserChange={this.handleUserChange} currentUser={this.state.currentUser} handleLogOut={this.handleLogOut} displayCreateUser={this.displayCreateUser}
              handleCreateUser={this.handleCreateUser}
              displayState={this.state.displayStatus}
              />
          )
        }} />

    </div>
  )
  }
}


export default ShoppingContainer;
