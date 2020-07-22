import React from "react";
import rip from '../../img/rip.png'
import { addComma } from '../../resource/Common'

class TotalDeathsCard extends React.Component {

  render() {
    var { data } = this.props
    var totalDeaths
    var newDeaths
    if(data[1]){
      totalDeaths = data[data.length-1].Deaths
      newDeaths = totalDeaths - data[data.length-2].Deaths
    }
    totalDeaths = addComma(totalDeaths)
    newDeaths = addComma(newDeaths)
    return (
        <div className="card darkgreen">
          <img alt="" src={rip} className="icon"></img>
          <div className="title">Total Deaths</div>
          <span className="count" style={{color: "#085f63"}}>{totalDeaths}</span>
          <div className="newcount">{newDeaths} New Deaths</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalDeathsCard;
