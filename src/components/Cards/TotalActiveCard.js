import React from "react";
import active from '../../img/Active.png'
import { addComma } from '../../resource/Common'

class TotalActiveCard extends React.Component {

  render() {
    var { totalActive, newActive } = this.props
    newActive = addComma(newActive)
    totalActive = addComma(totalActive)
    return (
      <div className="card-icon red">
        <img alt="" src={active} className="icon"></img>
        <div className="title grid-column-2">Total Active</div>
        <span className="count grid-column-2" style={{ color: 'red' }}>{totalActive}</span>
        <div className="newcount grid-column-2">{newActive} New Active</div>
      </div>
    )
  }

  componentDidMount() { }
}

export default TotalActiveCard;
