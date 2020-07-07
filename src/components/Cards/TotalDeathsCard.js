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
          <h2>Total Deaths</h2>
          <h2>{totalDeaths}</h2>
          <div>{newDeaths} New Deaths</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalDeathsCard;
