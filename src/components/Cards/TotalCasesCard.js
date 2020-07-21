import React from "react";
import virus from '../../img/virus.png'

class TotalCasesCard extends React.Component {

  render() {
    var { data } = this.props
    var totalConfirmed
    var newConfirmed
    if(data[1]){
      totalConfirmed = data[data.length-1].Confirmed
      newConfirmed = totalConfirmed - data[data.length-2].Confirmed
    }
    return (
        <div className="card orange">
          <img alt="" src={virus} className="icon"></img>
          <div className="title">Total Cases Confirmed</div>
          <span className="count" style={{color: "rgba(255,128,0)"}}>{totalConfirmed}</span>
          <div className="newcount">{newConfirmed} New Cases</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalCasesCard;
