import React from "react";
import { Link } from 'react-router-dom'

class SideNavBar extends React.Component {
  render() {
    return (
        <nav>
           <h2>Matt's Corona Virus Stats</h2>
           <div className="sidenavbar">
           <ul>
               <Link to="/" style={{textDecoration: 'none', color: "black"}}>
                <li>Country</li>
               </Link>
               <Link to="/Map" style={{textDecoration: 'none', color: "black"}}>
                <li>Map</li>
               </Link>
           </ul>
           </div>
        </nav>
    )
  }

  componentDidMount() {}
}

export default SideNavBar;
