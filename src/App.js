import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  
  let url = "";

  return (
    <div>
      {/* Header Start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={url}>Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={url}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href={url}>Action</a></li>
                  <li><a className="dropdown-item" href={url}>Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href={url}>Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href={url}>Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
      {/* Header END */}

      {/* Content START */}
      <div className="content">
        <h2> <b> Your clock is 0.5 seconds behind. </b> </h2>

        <p>Accuracy of synchronization was ± 0.513 seconds.</p>

        <p>Timein <a href={url}>Jaipur, India</a> now:</p>
        
        <div>
          <p className="time">11:15:10</p>

          <div className="right-text">

            <div className="container">
              Sunday, October 3, 2021, week 39
              <br />
              <a href={url}>Day of German Unity</a>
              <p>Sun : Sunrise: 06:20 Sunset 18:11 <a href={url}>More Info</a></p>
              <div className="row">

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div className="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

              </div>
            </div>
            <br/>


        </div>
        </div>
      </div>
      {/* Content END */}

      {/* Citites START */}
      <div className="black-bg">
              <div className="row">

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

                <div className="col-sm-1">
                  Jaipur
                </div>

                <div className="col-sm-1">
                  Delhi
                </div>

                <div className="col-sm-1">
                  Hyderabad
                </div>

                <div className="col-sm-1">
                  Mumbai
                </div>

                <div className="col-sm-1">
                  Pune
                </div>

              </div>
            </div>
      {/* Citites END */}

      <br />

      {/* Quote Section START */}
      <div className="purple-bg">
          <div className="row">
            <div  className="container">
              <p className="padding">
                <blockquote>
                  "Today is the only day. Yesterday is gone."
                </blockquote>
                - John Wooden
              </p>
            </div>
          </div>
          </div>
      {/* Quote Section END */}

      {/* Footer START */}
      <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
              <div className="row gy-4 gx-5">
                  <div className="col-lg-4 col-md-6">
                      <h5 className="h1 text-white">FB.</h5>
                      <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                      <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href={url}>Bootstrapious.com</a></p>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="text-white mb-3">Quick links</h5>
                      <ul className="list-unstyled text-muted">
                          <li><a href={url}>Home</a></li>
                          <li><a href={url}>About</a></li>
                          <li><a href={url}>Get started</a></li>
                          <li><a href={url}>FAQ</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">
                      <h5 className="text-white mb-3">Quick links</h5>
                      <ul className="list-unstyled text-muted">
                          <li><a href={url}>Home</a></li>
                          <li><a href={url}>About</a></li>
                          <li><a href={url}>Get started</a></li>
                          <li><a href={url}>FAQ</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <h5 className="text-white mb-3">Newsletter</h5>
                      <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                      <form action="#">
                          <div className="input-group mb-3">
                              <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                              <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </footer>
      {/* Footer END */}
    </div>
  );
}

export default App;
