import React from "react"
import "./styles.css"
import { getDayOneTotalAllStatus, getCountries } from "./resource/covid19"
import ActiveCaseGraph from "./components/Graphs/ActiveCaseGraph"
import DeathGraph from './components/Graphs/DeathGraph'
import RecoveredGraph from './components/Graphs/RecoveredGraph'
import ConfirmedGraph from './components/Graphs/ConfirmedGraph'
import NewCasesGraph from './components/Graphs/NewCasesGraph'
import CountryList from './components/CountryList'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        data: [],
        country: 'United States of America',
        countries: []
    }
    this.getCountryStats = this.getCountryStats.bind(this)
}

  render() {
    return (
      <div className="App">
        <div className="center">
          <div className="header">
            <h1>Matt's Corona Virus Tracker</h1>
            <h2>See daily live stats about corona virus</h2>
            <CountryList countries={this.state.countries} getCountryStats={this.getCountryStats}/>
            <h3>{this.state.country}</h3>
          </div>
          <div className='column-1'>
            <ConfirmedGraph data={this.state.data}/>
            <ActiveCaseGraph data={this.state.data}/>
          </div>
          <div className='column-2'>
            <NewCasesGraph data={this.state.data}/>
            <RecoveredGraph data={this.state.data}/>
            <DeathGraph data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    getDayOneTotalAllStatus("united-states")
    .then(response => this.setState({data: response}))
    .catch(err => console.log(err))

    getCountries()
    .then(response => this.setState({countries:response}))
    .catch(err => console.log(err))
  }
  getCountryStats(event){
    getDayOneTotalAllStatus(event.Slug)
    .then(response => this.setState({data: response, country: event.Country}))
    .catch(err => console.log(err))
  }
}

export default App;
