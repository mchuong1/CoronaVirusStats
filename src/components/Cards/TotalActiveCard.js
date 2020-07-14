import React from "react";

class TotalActiveCard extends React.Component {

  render() {
    var { data } = this.props
    var totalActive
    var newActive
    if(data[1]){
      totalActive = data[data.length-1].Active
      newActive = totalActive - data[data.length-2].Active
    }
    return (
        <div className="card red">
          <h2>Total Active</h2>
          <span className="count" style={{color:'red'}}>{totalActive}</span>
          <div>{newActive} New Active</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalActiveCard;
