import React from "react";

class Top5Confirmed extends React.Component {
  constructor(){
    super()
    this.state = {
      confirmedArray: []
    }
  }

  sortByConfirmed() {
    var { Countries } = this.props.data
    var temp
    for(var i = 0; i < Countries.length; i++){

    }
  }

  mergeSort = () => {
    var temp
    for(var i = 0; i < this.props.data.length; i++){
      console.log(this.props.data[i])
    }
     
  }

  componentDidMount() {
    this.mergeSort()
  }

  render() {
    return (
      <div className="card orange">
        <div className="title">Top 5 Confirmed</div>
        <ol>
          <li>United States</li>
          <li>Brazil</li>
          <li>India</li>
        </ol>
      </div>
    )
  }
}

export default Top5Confirmed;
