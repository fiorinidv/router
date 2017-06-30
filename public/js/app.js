var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;


class Home extends React.Component {
 
  constructor() {
    super();
  }

  render() {

    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
               
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand page-scroll" to="#page-top">SweetCake</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <Link to="#page-top"></Link>
                        </li>
                        <li>
                            <Link className="page-scroll" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="page-scroll" to="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <header className="container">
        <p className="text-center">Monday - Friday <strong>11AM to 2PM</strong>, Saturday - Sunday <strong>9Am to 2PM</strong></p>
      
        <div className="row">
          
          <img src="images/banner3.jpg" alt="..."/>
          <div className="header-text hidden-xs header-text">
            <h1>Great taste</h1><br />
            <p>Eat cake and learn React ;) <br/>Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,
    ut consequat tellus posuere vel.</p>
          </div>
        </div>	

         
      </header>

      <div id="page-content">

        <section className="box-content box-1">
          <div className="container">
            <div className="heading">
              <h2>
                <span className="hr">Welcome!</span>
              </h2>
              <div className="intro">Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,<br/> ut consequat tellus posuere vel.</div>
            </div>
            <div className="row">
              <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin, sagittis sem nibh id elit. Duis sed odio sit.amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
            </div>
          </div>
        </section>
      
        <section className="box-content box-3 box-style-3">
          <div className="container">
            <div className="heading">
              <h2>
                <span className="hr client-say">Clients Say</span>
              </h2>
            </div>
            <div className="row">
              <div className="item text-center">
                  <img src="images/partner1.png" className="img-circle" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  <span>Catherine Grace - America</span>
                </div>
            </div>
          </div>
        </section>
        
        <section className="box-content box-4 box-style-1" id="services">
          <div className="container">
            <div className="heading">
              <h2>
                <span className="hr">Infomation</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="service">
                  <img src="images/icon1.png" title="icon-name" />
                  <h3>Sucess Story</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service">
                  <img src="images/icon3.png" title="icon-name" />
                  <h3>Map</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service">
                  <Link to="/menu"><img src="images/icon2.png" title="icon-name" /></Link>
                  <h3>Food Menu</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>	
            </div>
          </div>
        </section>
       </div> 
      
      <footer>
      
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>Copyright 2015</p>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li><Link to="#"><i className="fa fa-twitter"></i></Link>
                  </li>
                  <li><Link to="#"><i className="fa fa-facebook"></i></Link>
                  </li>
                  <li><Link to="#"><i className="fa fa-linkedin"></i></Link>
                  </li>
                  <li><Link to="#"><i className="fa fa-pinterest"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li><Link to="#">Privacy Policy</Link>
                  </li>
                  <li><Link to="#">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </div>
    );

  }

}


class Menu extends React.Component {
 
  constructor() {
    super();
  }

  render() {

    return (
     <div>
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand page-scroll" to="#page-top">SweetCake</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden">
                          <Link to="#page-top"></Link>
                      </li>
                      <li>
                          <Link className="page-scroll" to="/">Home</Link>
                      </li>
                      <li>
                          <Link className="page-scroll" to="/menu">Menu</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <header className="container">
      <p className="text-center">Monday - Friday <strong>11AM to 2PM</strong>, Saturday - Sunday <strong>9Am to 2PM</strong></p>

      <div className="row">
        
        <img src="images/banner2.jpg" alt="..." />
        <div className="header-text hidden-xs header-text">
          <h1>Great taste</h1><br />
          <p>Eat cake and learn React ;) <br />Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,
      ut consequat tellus posuere vel.</p>
        </div>
      </div>	

       
      </header>


      <div id="page-content">
      <div id="main-content">
        <div className="container">
          <article>
            <div className="heading">
              <h2>
                <span className="hr">Cupcakes</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="#">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-10.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-2.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-6.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="./panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-11.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-12.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-6.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <hr />
          <article>
            <div className="heading">
              <h2>
                <span className="hr">Donuts</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-13.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-14.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-1.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-15.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-16.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-12.jpg" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-15.jpg" />
                  </Link>
                </div>
                <div className="item-container">
                  <Link to="/panier">
                    <div className="item-caption">
                      <div className="item-caption-inner">
                        <div className="item-caption-inner1">
                          <h3>$45</h3>
                          <span>Only</span>
                        </div>
                      </div>
                    </div>
                    <img src="images/menu-9.jpg" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>

      <footer>

      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Copyright 2015</p>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li><Link to="#"><i className="fa fa-twitter"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-facebook"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-linkedin"></i></Link>
                </li>
                <li><Link to="#"><i className="fa fa-pinterest"></i></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li><Link to="#">Privacy Policy</Link>
                </li>
                <li><Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
    );

  }

}


ReactDOM.render(  
  <Router>
    <div> 
        <Route exact path="/" component={Home}/>        
        <Route path="/menu" component={Menu}/> 
    </div>  
  </Router>
  ,
  document.getElementById('container')
);