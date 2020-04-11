import React from "react";
import axios from "axios";

class Map extends React.Component {
  render() {
    return <div>Map Component</div>;
  }

  componentDidMount() {
    try {
      axios
        .get("https://corona.lmao.ninja/countries")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

export default Map;
