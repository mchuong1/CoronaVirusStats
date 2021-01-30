import React from "react";
import { addComma } from '../../resource/Common'

class TotalCard extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    var { totalNum, newNum, png, Type, color } = this.props
    newNum = addComma(newNum)
    totalNum = addComma(totalNum)
    return (
      <div className={"card-icon " + color}>
        <img alt="" src={png} className="icon"></img>
        <div className="title grid-column-2">Total {Type}</div>
        <span className="count grid-column-2" style={{ color: color }}>{totalNum}</span>
        <div className="newcount grid-column-2">{newNum} New {Type}</div>
      </div>
    )
  }

  componentDidMount() { }
}

export default TotalCard;
