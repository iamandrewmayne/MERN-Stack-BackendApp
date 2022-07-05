import { Navbar, Container,Nav,Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './home.styles.scss';
const Home=()=>{
    return (
      <>
      {/* Carousel */}
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2489629.jpg" height={700}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='text-effect'>Shop From SHOPPY !!</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.pixteller.com/designs/designs-images/2018-10-31/08/fullhd-image-template-for-sales-banner-businnes-1-5bd9f48cee68d.png" height={700}
          alt="Second slide"
        />
    
        <Carousel.Caption>
        <h1 className='carousel-text'>Shop From SHOPPY !!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/4364313.jpg" height={700}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h1 className='carousel-text'>Shop From SHOPPY !!</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* Main */}
<br/><br/><br/>
<div className="container marketing">
{/* <!-- Three columns of text below the carousel --> */}
<div className="row">
  <div className="col-lg-4">
    <img className="img-circle" src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/25989/239363/Korean-Slim-Fit-Leisure-Jacket-Men-Short-Bomber-Long-Sleeve-Zipper-Spring-Men-Jacket-Fashion-Jaqueta__99035.1549625754.jpg?c=2?imbypass=on" alt="Generic placeholder image" width="170" height="170"/>
    <h3>Heading</h3>
    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
    <p><a className="download2" href="#" role="button">View details &raquo;</a></p>
  </div>
  {/* <!-- /.col-lg-4 --> */}
  <div className="col-lg-4">
    <img className="img-circle" src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/25989/239363/Korean-Slim-Fit-Leisure-Jacket-Men-Short-Bomber-Long-Sleeve-Zipper-Spring-Men-Jacket-Fashion-Jaqueta__99035.1549625754.jpg?c=2?imbypass=on" alt="Generic placeholder image" width="170" height="170"/>
    <h3>Heading</h3>
    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
    <p><a className="download2" href="#" role="button">View details &raquo;</a></p>
  </div>
  {/* <!-- /.col-lg-4 --> */}
  <div className="col-lg-4">
    <img className="img-circle" src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/25989/239363/Korean-Slim-Fit-Leisure-Jacket-Men-Short-Bomber-Long-Sleeve-Zipper-Spring-Men-Jacket-Fashion-Jaqueta__99035.1549625754.jpg?c=2?imbypass=on" alt="Generic placeholder image" width="170" height="170"/>
    <h3>Heading</h3>
    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
    <p><a className="download2" href="#" role="button">View details &raquo;</a></p>
  </div>
  {/* <!-- /.col-lg-4 --> */}
</div>
</div>



{/* Content */}
<div className="half-half-image-text">
<div className="container">
  <div className="row">
    <div className="col-12">
      <h1>Trending</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-lg-6">
      <div className="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div className="col-12 col-lg-6">
      <div className="img"/></div>
    </div>
      <br/><br/>
    <div className="row">
    <div className="col-12 col-lg-6">
      <div className="img"/></div>
      <div className="col-12 col-lg-6">
      <div className="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    </div>
    <br/><br/>

    <div className="row">
    <div className="col-12 col-lg-6">
      <div className="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div className="col-12 col-lg-6">
      <div className="img"/></div>
    </div>


  </div>
</div>




{/* Footer */}

<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="icons">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-google-plus"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Street 10/1</span> Lucknow, India</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> office@shoppy.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> SHOPPY<span></span></h2>
    <p className="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className="name"> SHOPPY &copy; 2022</p>
  </div>
</footer>


</>
    );
}

export default Home;










