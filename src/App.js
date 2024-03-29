import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import  axios from  "axios";
import React from 'react';
import  { ToastContainer, toast } from  'react-toastify';
import  'react-toastify/dist/ReactToastify.css';
import { Last } from 'react-bootstrap/esm/PageItem';

const baseURL = "https://ipgeolocation.abstractapi.com/v1/?api_key=9fc3081c7a24494daf1593b7037a4ca1";
const SunriseSunsetAPI  = "https://api.sunrise-sunset.org/json";
const countryStateCityAPI = 'https://api.countrystatecity.in/v1/';
const timeZoneAPI         = 'https://timezone.abstractapi.com/v1/current_time?api_key=8795447fd6f644cfb22ab1294911e749';

class App extends React.Component {
  date  = new Date();
  states  = [];

  // like constructor in Angular
  constructor(props) {

    super(props);

    this.state  = {
      data  : {},
      time  : null,
      error : null,
      date  : null,
      sunriseData : {},
      flag  : null,
      states  : []
    };

  }

  // like ngOnInit in Angular
  componentDidMount() {
    axios.get(baseURL).then((response)  =>  {
      this.setState({
        data  : response.data
      });

      console.log(response.data);

      this.getState(response.data);
      this.setState(  { time  : this.state.data.timezone.current_time });
      this.calcTime(this.state.data.city, this.state.data.timezone.gmt_offset);
      this.getSunriseSunset(this.state.data.latitude, this.state.data.longitude);
      this.setState({ flag  : this.state.data.flag.svg  });

    }).catch(error  =>  {
      this.setState(  { error : error.message });
      toast.error(error.message);
    },[]);

    
  }

  calcTime(city,  offset)  {
    let  d  = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset()  * 60000);
    let nd  = new Date(utc  + (3600000  * offset));

    this.date = nd;
    this.currentTime();
  }

  currentTime() {

    let date  = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours  < 10) ? "0" + hours : hours;
    minutes = (minutes  < 10) ? "0" + minutes : minutes;
    seconds = (seconds  < 10) ? "0" + seconds : seconds;

    let time  = hours + ":" + minutes + ":" + seconds;

    // This will tick the clock in 1 seconds
    this.setState({ time  : time  });
    let t = setTimeout(() => {
      this.currentTime();
    }, 1000);

  }

  getSunriseSunset(lat, lng)  {

    axios.get(SunriseSunsetAPI + '?lat='  + lat + '&lng=' +lng).then((response) =>  {
      this.setState({sunriseData  : response.data.results});

    }).catch((error)  =>  {
      toast(error.message);
    });
  }

  getState(data)  {
    console.log('data'  , data);
    console.log('country_code'  , data.country_code);

    console.log(countryStateCityAPI);

    let config  = {
      method  : 'GET',
      url : countryStateCityAPI + `countries/` + data.country_code + `/states`,
      headers : { 
        "X-CSCAPI-KEY" :  "dXIyRERERVd3bTBBc0tDalBzbXNXWnRUcDQ2enRpNXJQblNFcmF1cw==" 
      },
      redirect  : 'follow'
    }

    axios(config)
      .then((response)  =>  {
        if(response.status  ==  200)  {
          let state = [];

          // set an in terval of 2 seconds due to API limitation.
          // this.getTimeByState(response.data[i], i,  data.country_code);
          
          
        }
      })
      .catch((error)  =>  {
        toast(error.message);
      })
  }



  getTimeByState(data, i, country_code)  {
    let state = [];

    console.log(data);
    console.log(i);
    console.log(country_code);

    // get the time of the state  & push it into state array
    let config  = {
      method  : 'GET',
      url : timeZoneAPI + `&location=` + data.name + ',' + country_code,
      redirect  : 'follow',
    };

    

    // axios(config)
    //   .then((response)  =>  {
    //     if(response.status  ==  200)  {
    //       console.log(response);
    //       console.log(response.datetime.toString().split(" "))
    //     }
    //   })
    //   .catch((error)  =>  {
    //     toast(error.message);
    //   })

    
    // state.push( {'name' : data.data[i]['name']} );

    // in the end when all data is pushed
    // this.setState({ states : state });

  }


  render()  {
    
    let url = "";

    return (
      <div>
        {/* toast START */}
        <ToastContainer />
        {/* toast END */}

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
  
          <p>Time in <a href={url}>{this.state.data.city}, {this.state.data.country_code}</a> now:</p>
          
          <div>
            <p className="time">{this.state.time}</p>
  
            <div className="right-text">
  
              <div className="container">
                {this.state.date}
                <br />
                <a> <img width="5%" src={this.state.flag} />  </a>
                <p>Sun : Sunrise: {this.state.sunriseData.sunrise} Sunset {this.state.sunriseData.sunset} <a href={url}>More Info</a></p>
                <div className="row">
                  {this.state.states.map((singleState)  =>  
                    <div className="col-sm">
                      {singleState.name}
                    </div>
                  )}

                  {/* For reference */}

                  {/* <div className="col-sm">
                    One of three columns
                    One of three columns
                    One of three columns
                  </div> */}
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
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href={url}>Lorem Ipsum</a></p>
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
}

export default App;
