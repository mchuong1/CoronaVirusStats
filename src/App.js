import React from "react";
import "./styles.css";
import CaseGraph from "./components/CaseGraph";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Matt's Corona Virus Tracker</h1>
        <h2>See daily live stats about corona virus</h2>
        <CaseGraph />
      </div>
    );
  }
  componentDidMount() {}
}

export default App;
