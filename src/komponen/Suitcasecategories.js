import React, { Component } from 'react';
import {Button,Icon} from '@material-ui/core'



class Suitcasecategories extends Component {
    render(){
        return (
            <div>
                
              <div className="row">

<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product"><img className="myimg img-responsive card-img-top" src="https://slimages.macysassets.com/is/image/MCY/products/8/optimized/3325618_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product1">Pink Suit Case</a>
      </h4>
      <h5>Rp 700,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
    </div>
    <div className="card-footer">
      <Button variant='raised' className='favoritebutton' color='secondary'><Icon>favorite</Icon></Button>
      <Button variant='raised' color='primary'><Icon>shopping_cart</Icon>Add to Cart</Button>
    </div>
    </center>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product"><img className="myimg img-responsive card-img-top" src="https://www.tripp.co.uk/images/products/standard/2888.jpg" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product2">Silver Suit Case</a>
      </h4>
      <h5>Rp 2,322,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
    </div>
    <div className="card-footer">
      <Button variant='raised' className='favoritebutton' color='secondary'><Icon>favorite</Icon></Button>
      <Button variant='raised' color='primary'><Icon>shopping_cart</Icon>Add to Cart</Button>
    </div>
    </center>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product3"><img className="myimg img-responsive card-img-top" src="data:image/jpeg;base64,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" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product">Black Suit Case</a>
      </h4>
      <h5>Rp 820,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
    </div>
    <div className="card-footer">
      <Button variant='raised' className='favoritebutton' color='secondary'><Icon>favorite</Icon></Button>
      <Button variant='raised' color='primary'><Icon>shopping_cart</Icon>Add to Cart</Button>
    </div>
    </center>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product4"><img className="myimg img-responsive card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOBH4XVWcCgXEjy0STumnpxmQwcMvvzL-EZ9_J3hKyTmWmvviWg" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product">White Suit Case</a>
      </h4>
      <h5>Rp 3,100,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
    </div>
    <div className="card-footer">
      <Button variant='raised' className='favoritebutton' color='secondary'><Icon>favorite</Icon></Button>
      <Button variant='raised' color='primary'><Icon>shopping_cart</Icon>Add to Cart</Button>
    </div>
    </center>
  </div>
</div>


<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product"><img className="myimg img-responsive card-img-top" src="data:image/jpeg;base64,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" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product">Suit case</a>
      </h4>
      <h5>Rp 1,100,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
    </div>
    <div className="card-footer">
      <Button variant='raised' className='favoritebutton' color='secondary'><Icon>favorite</Icon></Button>
      <Button variant='raised' color='primary'><Icon>shopping_cart</Icon>Add to Cart</Button>
    </div>
    </center>
  </div>
</div>
</div>

            </div>
        )
    }

}

export default Suitcasecategories;
