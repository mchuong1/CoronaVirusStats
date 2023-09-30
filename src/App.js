import React from "react"
import "./styles.css"
import SideNaveBar from './components/SideNavBar'
import CountryStats from './pages/CountryStats'
import World from './pages/World'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="left">
            <SideNaveBar />
          </div>
          <div className="center grid-column-2">
            <Switch>
              <Route exact path="/" component={World}/>
              <Route path="/Country"  component={CountryStats}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  componentDidMount() {}
}

export default App;
