import React from "react"
import "./styles.css"
import CountryStats from './components/CountryStats'
import SideNaveBar from './components/SideNavBar'
import World from './components/World'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="left">
            <SideNaveBar />
          </div>
          <div className="center">
            <Switch>
              {/* <Route exact path="/CoronaVirusStats" component={World}/> */}
              <Route path="/CoronaVirusStats/Country"  component={CountryStats}/>
            </Switch>
          </div>
          <div className="right">            
          </div>
        </div>
      </Router>
    );
  }
  componentDidMount() {}
}

export default App;
