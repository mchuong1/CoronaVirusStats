import React from "react";

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
          <h2>Total Recovered</h2>
          <h2>{totalRecovered}</h2>
          <div>{newRecovered} New Recovered</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalRecoveredCard;