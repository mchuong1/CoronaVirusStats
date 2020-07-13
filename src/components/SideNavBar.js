import React from "react";
import { Link } from 'react-router-dom'
import virus from '../img/virus.png'

class SideNavBar extends React.Component {
  render() {
    return (
        <nav>
          <img alt="" src={virus} style={{maxWidth: '20%', float: 'left'}}/>
          <h2>Coronavirus Stats</h2>
          <div className="sidenavbar">
          <ul>
              <Link to="/" style={{textDecoration: 'none', color: "black"}}>
              <li>Lookup by Country</li>
              </Link>
              <Link to="/Map" style={{textDecoration: 'none', color: "black"}}>
              <li>Map</li>
              </Link>
          </ul>
          </div>
          <div className="footer">
            <p>{"Made with "}
              <a href="https://covid19api.com/">COVID19 API</a>{" and "} 
            <a href="https://www.chartjs.org/">ChartJs</a></p>
          </div>
        </nav>
    )
  }

  componentDidMount() {}
}

export default SideNavBar;
