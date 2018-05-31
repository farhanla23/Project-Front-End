import React, { Component } from 'react';
import './App.css';
import Home from './komponen/Home'
import Mencategories from './komponen/Mencategories'
import Womencategories from './komponen/Womencategories'
import Suitcasecategories from './komponen/Suitcasecategories'
import {Link,Route} from 'react-router-dom'
import {Button,Icon,Menu,MenuItem} from '@material-ui/core'

class App extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
    
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/home"><h2 className='brandname'>My Bag</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#productnavbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mr-auto">
                <li className='nav-item '>
                  <select className='form-control'>
                    <option value="0">All Categories</option>
								    <option value="1">For Men</option>
							      <option value="2">For Women</option>
							      <option value="3">Suit Case</option>
						    	</select>
                </li>
                <li className="nav-item">
                  <input type='text' className='form-control' placeholder='Search Product'/>
                </li>
                <li className='nav-item'> 
                  <Button  variant='raised' color='primary'><Icon>search</Icon>Search  </Button>
                </li>
              </ul>
              <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Button className='mycart'variant='raised'><Icon>shopping_cart</Icon>My Cart </Button> </li>
              <li className='nav-item'> 
              <Button
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  variant='raised' color='primary'
                > <Icon> account_circle </Icon> &nbsp;My Account
              </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Setting</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
              </li>
              </ul>
              
            </div>
          </div>
        </nav>

        <div className="container bodyweb">

          <div className="row">

            <div className="col-lg-3">

              <div className="list-group"> <h4 className='list-group-item'>Categories</h4>
                <Link to="/men" className="list-group-item">For Men</Link>
                <Link to="/women" className="list-group-item">For Women</Link>
                <Link to="/suitcase" className="list-group-item">Suit Case</Link>
              </div>

            </div>
            
            <div className="col-lg-9">

              <div className="mycarousel carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="mycarousel" data-slide-to="0" className="active"></li>
                  <li data-target="mycarousel" data-slide-to="1"></li>
                  <li data-target="mycarousel" data-slide-to="2"></li>
                </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="http://freedacreations.com/wp-content/uploads/2015/07/WOMEN-BAG-BANNER.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUQExIWFRUVGBkXGBUXFRgYFRUVGRUWFhoWFxUYHyggGRolHRkVITEhJSkrLi4uGB81ODMtNygtLisBCgoKDg0OFw8QFy0dHR4rLS0tLS0tLS0tLS0rLS0rLS0tLS0tLS0tKy0tNi0tLS0tLS0tLSstLTctLS0tLS0tLf/AABEIAIEBhQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABMEAABAwIEAwUEBAgKCgMAAAABAAIDBBEFEiExBkFRBxMiYXEyQoGRFJKhwSMzUmJysdHwFRYXQ1NUc4KT4TREY2R0o7PCw/EIJDb/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQEBAAMAAwAAAAAAAAAAAAERAhIhMQNBUf/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVmpqo4xmke1jernBo+ZWPjmKMpoJKh9y2Nt7Ddx2a0eZcQPivnvHn4jicpkcxzmX0aXgRtvrYB3QEDQHbdGuedfQ1DilPNfuZo5Lb5Htdb1ynRZi+ZqThmupnCoyPaYzcPiN3N+LNbdeSnHs/4ldW0570ATxENkGxNx4Xlvu3s7Tq020TZ+qdcWOoRERkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQcZ2lzXZDTEAtmf4ru5MykDLu4XIPlb0UR1/E89JUvYyON0DXWDAzIAAADlI21ubG+/IKZO0Omi7hlQ4eOFx7t1yLF7S0jzBFviAomqaWFzbFjXyn2Q51s2u3msXN9+478TefTqMM43pJGtu/uXuAIZL4SQdiCdHDoRuth2cSulxKulb+KbHDGSPZdJdztDsSBe/qOq4PGuH31U8JawBz2xwtiLvZLbgEkA+HW5ttrupp4I4Xjw6lFMw5nEmSR+wfK4AEge62wa0Do0bm5U445nuH5ermVv0RF0cBERAREQEREBERAREQEREBERAREQEREBauuwoyzskdLK2NjCBHHNJG173OHieGEZsobYa+8dNltEQRjSTSniKahM8/wBHbSiQR/SJrB/4LxXz35nnzXR41g74oa6R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" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXuob-qJuqUrZoWIpANdZ95kXOxhVqUGoOuisHC_rPXB3bpFy" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href=".mycarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href=".mycarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div>   
              <Route path='/home' component={Home} />
              <Route path="/men" component={Mencategories}/>
              <Route path="/women" component={Womencategories}/>
              <Route path="/suitcase" component={Suitcasecategories} />
            </div>
              
            
        </div>

      </div>

     </div>
    </div>
    );
  }
}

export default App;
