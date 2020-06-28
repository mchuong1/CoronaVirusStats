import React from "react"
import "./styles.css"
import { getDayOneTotalAllStatus, getCountries } from "./resource/covid19"
import ActiveCaseGraph from "./components/Graphs/ActiveCaseGraph"
import DeathGraph from './components/Graphs/DeathGraph'
import RecoveredGraph from './components/Graphs/RecoveredGraph'
import ConfirmedGraph from './components/Graphs/ConfirmedGraph'
import NewCasesGraph from './components/Graphs/NewCasesGraph'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        dayOneStatus: {
            labels: ["5/20","5/21","5/22","5/23","5/24"],
            datasets: [
              {
                label: 'Covid-19 Active Cases',
                backgroundColor: 'rgba(255,0,0)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [0, 50, 100, 200, 300]
              }
            ]
        },
        data: [],
        country: 'United States',
        countries: []
    }
    this.getCountryStats = this.getCountryStats.bind(this)
}

  render() {
    var countriesSlugList = this.state.countries.map(function(country){
      if(country.Slug !== 'united-states'){
        return <option key={country.ISO2} value={country.Slug}>{country.Country}</option>
      }
    })
    countriesSlugList.sort()
    return (
      <div className="App">
        <div className="center">
          <div className="header">
            <h1>Matt's Corona Virus Tracker</h1>
            <h2>See daily live stats about corona virus</h2>
          <select className="country-select" onChange={this.getCountryStats}>
              <option value="united-states" selected>United States</option>
              {countriesSlugList}
            </select>
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
    getDayOneTotalAllStatus(event.target.value)
    .then(response => this.setState({data: response}))
    .catch(err => console.log(err))
  }
}

export default App;
