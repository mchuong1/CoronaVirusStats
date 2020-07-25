import React from "react";
import virus from '../img/virus.png'

class Map extends React.Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }

  render() {
    return (
      <div>
        <img alt="" src={virus}></img>
      </div>
    )
  }

  componentDidMount() {}
}

export default Map;
