import React from "react"
import "./styles.css"
import ActiveCaseGraph from "./components/ActiveCaseGraph"
import DeathGraph from './components/DeathGraph'
import RecoveredGraph from './components/RecoveredGraph'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Matt's Corona Virus Tracker</h1>
        <h2>See daily live stats about corona virus</h2>
        <div>
          <select>
            <option value="united-states">United States</option>
          </select>
          <ActiveCaseGraph />
          <DeathGraph />
          <RecoveredGraph />
        </div>
      </div>
    );
  }
  componentDidMount() {

  }
}

export default App;
