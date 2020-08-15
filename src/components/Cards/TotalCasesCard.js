import React from "react";
import virus from '../../img/virus.png'
import { addComma } from '../../resource/Common'

class TotalCasesCard extends React.Component {

  render() {
    var { totalConfirmed, newConfirmed } = this.props
    totalConfirmed = addComma(totalConfirmed)
    newConfirmed = addComma(newConfirmed)
    return (
      <div className="card-icon orange">
        <img alt="" src={virus} className="icon"></img>
        <div className="title grid-column-2">Total Confirmed</div>
        <span className="count grid-column-2" style={{ color: "rgba(255,128,0)" }}>{totalConfirmed}</span>
        <div className="newcount grid-column-2">{newConfirmed} New Cases</div>
      </div>
    )
  }

  componentDidMount() { }
}

export default TotalCasesCard;
