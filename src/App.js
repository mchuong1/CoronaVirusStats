import React from "react";
import "./styles.css";
import Map from "./components/Map";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Corona Virus Tracker</h1>
        <h2>See live stats about corona virus</h2>
        <Map />
      </div>
    );
  }
  componentDidMount() {}
}

export default App;
