import React from "react";
import rip from '../../img/rip.png'
import { addComma } from '../../resource/Common'

class TotalDeathsCard extends React.Component {

  render() {
    var { totalDeath, newDeath } = this.props
    totalDeath = addComma(totalDeath)
    newDeath = addComma(newDeath)
    return (
        <div className="card darkgreen">
          <img alt="" src={rip} className="icon"></img>
          <div className="title">Total Deaths</div>
          <span className="count" style={{color: "#085f63"}}>{totalDeath}</span>
          <div className="newcount">{newDeath} New Deaths</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalDeathsCard;
