import React from "react";
import recovered from '../../img/recovered.png'

class TotalRecoveredCard extends React.Component {

  render() {
    var { data } = this.props
    var totalRecovered
    var newRecovered
    if(data[1]){
      totalRecovered = data[data.length-1].Recovered
      newRecovered = totalRecovered - data[data.length-2].Recovered
    }
    return (
        <div className="card green">
          <img alt="" src={recovered} className="icon"></img>
          <div className="title">Total Recovered</div>
          <span className="count" style={{color: "rgba(0,204,0)"}}>{totalRecovered}</span>
          <div className="newcount">{newRecovered} New Recovered</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalRecoveredCard;
