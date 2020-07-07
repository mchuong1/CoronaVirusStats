import React from "react";

class TotalCasesCard extends React.Component {

  render() {
    var { data } = this.props
    var totalConfirmed
    var newConfirmed
    if(data[1]){
      totalConfirmed = data[data.length-1].Confirmed
      newConfirmed = totalConfirmed - data[data.length-2].Confirmed
    }
    return (
        <div className="card orange">
          <h2>Total Cases Confirmed</h2>
          <h2>{totalConfirmed}</h2>
          <div>{newConfirmed} New Cases</div>
        </div>
    )
  }

  componentDidMount() {}
}

export default TotalCasesCard;
