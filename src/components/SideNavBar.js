import React from "react";
import { Link } from 'react-router-dom'
import virus from '../img/virus.png'
import bars from '../img/bars.png'

class SideNavBar extends React.Component {
  constructor(){
    super()
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  render() {
    return (
        <nav>
          <img className="menu" id="menu" alt="" src={bars} onClick={this.openNav}/>
          <div className="navbar" id="navbar">
            {/* <img alt="" src={virus} style={{maxWidth: '20%', position: 'absolute', left: 0, top: 5}}/> */}
            <p id="close" onClick={this.closeNav}>X</p>
            <h2>Coronavirus Stats</h2>
            <ul>
                <Link to="/" style={{textDecoration: 'none', color: "black"}}>
                <li>Lookup by Country</li>
                </Link>
                <Link to="/Map" style={{textDecoration: 'none', color: "black"}}>
                <li>Map</li>
                </Link>
            </ul>
            <div className="footer">
              <p>{"Made with "}
                <a href="https://covid19api.com/">COVID19 API</a>{" and "} 
              <a href="https://www.chartjs.org/">ChartJs</a></p>
            </div>
          </div>
        </nav>
    )
  }

  componentDidMount() {}
  openNav(){
    document.getElementById("navbar").style.display="block"
    document.getElementById("navbar").style.width="286px"
    document.getElementById("menu").style.display="none"
  }
  closeNav(){
    document.getElementById("navbar").style.display="none"
    document.getElementById("menu").style.display="block"
  }
}

export default SideNavBar;
