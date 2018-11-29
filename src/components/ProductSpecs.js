import React, {Component} from 'react';

const ProductSpec = (props) =>{
  const { product } = props
  // console.log(product)
  console.log(product)

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  return ( product ?
<div className="col-md-8 offset-md-2" >
  <div className="card mt-4 override">
    <img className="card-img-top img-fluid" src={product.image_link} style={{width:'300px', margin: '0 auto'}} alt="" />
    <div className="card-body">
      <h3 className="card-title">{product.name}</h3>
      <h4 className="subtitle">{product.product_type}</h4>
      <h4 className="subtitle">{product.category}</h4>
      <h4 className="subtitle">$24.99</h4>
      <p className="card-text">{product.description}</p>
      <p className="card-text">{product.rating}&nbsp;Star(s)</p>
      <p className="card-text">Color(s):&nbsp;{product.product_colors.map(color => color.colour_name)}</p>
    </div>
  </div>
  <div className="card card-outline-secondary my-4 override">
    <div className="card-header">
      Product Reviews
    </div>
    <div className="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
      <small className="text-muted">Posted by Anonymous on 3/1/17</small>
      <hr />
      <a href="#" className="btn">Leave a Review</a>
    </div>
  </div>
</div>
:
<div>Loading...</div>
);
};

export default ProductSpec;
