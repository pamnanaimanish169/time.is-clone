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

            {/* cards START*/}
            <div class="container">
              Sunday, October 3, 2021, week 39
              <br />
              <a href={url}>Day of German Unity</a>
              <p>Sun : Sunrise: 06:20 Sunset 18:11 <a href={url}>More Info</a></p>
              <div class="row">

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

                <div class="col-sm">
                  One of three columns
                  One of three columns
                  One of three columns
                </div>

              </div>
            </div>
            
            {/* cards END */}


        </div>
        </div>
      </div>
      {/* Content END */}
    </div>
  );
}

export default App;
