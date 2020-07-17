import React from "react";

class TotalDeathsCard extends React.Component {

  render() {
    var { data } = this.props
    var totalDeaths
    var newDeaths
    if(data[1]){
      totalDeaths = data[data.length-1].Deaths
      newDeaths = totalDeaths - data[data.length-2].Deaths
    }
    return (
        <div className="card darkred">
          <div className="title">Total Deaths</div>
          <span className="count" style={{color: "rgba(153,0,0)"}}>{totalDeaths}</span>
          <div className="newcount">{newDeaths} New Deaths</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalDeathsCard;
