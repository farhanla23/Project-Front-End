import React, { Component } from 'react';
import {Button,Icon} from '@material-ui/core'



class Womencategories extends Component {
    render(){
        return (
            <div>
                
              <div className="row">


<div className="col-lg-4 col-md-6 mb-4 ">
  <div className="card cardstyle"> <center>
    <a href="#product"><img className="myimg img-responsive card-img-top" src="data:image/jpeg;base64,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" alt=""/></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#product">Women Bag 1</a>
      </h4>
      <h5>Rp 1,500,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
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
        <a href="#product">Women Bag 2</a>
      </h4>
      <h5>Rp 1,000,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
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
        <a href="#product">Women Bag 3</a>
      </h4>
      <h5>Rp 2,100,999</h5> <Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon><Icon>star_rate</Icon>
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

export default Womencategories;
