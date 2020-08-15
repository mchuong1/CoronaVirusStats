import React from "react";
import recovered from '../../img/recovered.png'
import { addComma } from '../../resource/Common'

class TotalRecoveredCard extends React.Component {

  render() {
    var { totalRecovered, newRecovered } = this.props
    totalRecovered = addComma(totalRecovered)
    newRecovered = addComma(newRecovered)
    return (
      <div className="card-icon green">
        <img alt="" src={recovered} className="icon"></img>
        <div className="title grid-column-2">Total Recovered</div>
        <span className="count grid-column-2" style={{ color: "rgba(0,204,0)" }}>{totalRecovered}</span>
        <div className="newcount grid-column-2">{newRecovered} New Recovered</div>
      </div>
    )
  }

  componentDidMount() { }
}

export default TotalRecoveredCard;
