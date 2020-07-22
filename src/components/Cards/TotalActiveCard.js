import React from "react";
import active from '../../img/Active.png'
import { addComma } from '../../resource/Common'

class TotalActiveCard extends React.Component {

  render() {
    var { data } = this.props
    var totalActive
    var newActive
    if(data[1]){
      totalActive = data[data.length-1].Active
      newActive = totalActive - data[data.length-2].Active
    }
    newActive = addComma(newActive)
    totalActive = addComma(totalActive)
    return (
        <div className="card red">
          <img alt="" src={active} className="icon"></img>
          <div className="title">Total Active</div>
          <span className="count" style={{color:'red'}}>{totalActive}</span>
          <div className="newcount">{newActive} New Active</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalActiveCard;
