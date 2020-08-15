import React from "react";
import rip from '../../img/rip.png'
import { addComma } from '../../resource/Common'

class TotalDeathsCard extends React.Component {

  render() {
    var { totalDeaths, newDeaths } = this.props
    totalDeaths = addComma(totalDeaths)
    newDeaths = addComma(newDeaths)
    return (
      <div className="card-icon darkgreen">
        <img alt="" src={rip} className="icon"></img>
        <div className="title grid-column-2">Total Deaths</div>
        <span className="count grid-column-2" style={{ color: "#085f63" }}>{totalDeaths}</span>
        <div className="newcount grid-column-2">{newDeaths} New Deaths</div>
      </div>
    )
  }

  componentDidMount() { }
}

export default TotalDeathsCard;
