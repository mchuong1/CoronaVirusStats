import React from "react";
import { getDayOneTotalAllStatus, getCountries, transformISODate, getSummary } from "../resource/covid19"
import ActiveCaseGraph from "./Graphs/ActiveCaseGraph"
import DeathGraph from './Graphs/DeathGraph'
import RecoveredGraph from './Graphs/RecoveredGraph'
import NewCasesGraph from './Graphs/NewCasesGraph'
import TotalCasesCard from './Cards/TotalCasesCard'
import TotalRecoveredCard from './Cards/TotalRecoveredCard'
import TotalDeathsCard from './Cards/TotalDeathsCard'
import TotalActiveCard from './Cards/TotalActiveCard'

class CountryStats extends React.Component {
	constructor(){
			super()
			this.state = {
          data: [],
          worlddata: [],
          country: 'United States of America',
          slug: 'united-states',
          countries: [],
          activeCases: [],
          newCases: [],
          recoveredCases: [],
          deathCases: [],
          dates: []
			}
  }
  componentDidMount() {
    getDayOneTotalAllStatus(this.state.slug)
    .then(response => this.setState({data: response}))
    .then(() => {
      this.getDates()
      this.getDailyActiveCases()
      this.getDailyNewCases()
      this.getDailyRecoveredCases()
      this.getDailyDeathCases()
    })
    .catch(err => console.log(err))

    getCountries()
    .then(response => this.setState({countries:response}))
    .catch(err => console.log(err))

    getSummary()
    .then(response => this.setState({worlddata: response}))
    .catch(err => console.log(err))
  }
  getCountryStats = (event) => {
    getDayOneTotalAllStatus(event.Slug)
    .then(response => this.setState({data: response, country: event.Country, slug: event.Slug}))
    .catch(err => console.log(err))
  }
  getDates = () => {
    var { data, dates } = this.state
    data.forEach(item =>{
      dates.push(transformISODate(item.Date))
    })
  }
  getDailyActiveCases = () => {
    var { data } = this.state
    var cases = []
    var dailyCase
    for(var i = 1; i <= data.length-1; i++){
      dailyCase = data[i].Active - data[i-1].Active
      if(dailyCase > 0) 
        cases.push(dailyCase)
      else
        cases.push(0)
    }
    this.setState({activeCases: cases})
  }
  getDailyNewCases = () => {
    var { data } = this.state
    var cases = []
    var dailyCase
    for(var i = 1; i <= data.length-1; i++){
      dailyCase = data[i].Confirmed - data[i-1].Confirmed
      if(dailyCase > 0) 
        cases.push(dailyCase)
      else
        cases.push(0)
    }
    this.setState({newCases: cases})
  }
  getDailyRecoveredCases = () => {
    var { data } = this.state
    var cases = []
    var dailyCase
    for(var i = 1; i <= data.length-1; i++){
      dailyCase = data[i].Recovered - data[i-1].Recovered
      if(dailyCase > 0) 
        cases.push(dailyCase)
      else
        cases.push(0)
    }
    this.setState({recoveredCases: cases})
  }
  getDailyDeathCases = () => {
    var { data } = this.state
    var cases = []
    var dailyCase
    for(var i = 1; i <= data.length-1; i++){
      dailyCase = data[i].Deaths - data[i-1].Deaths
      if(dailyCase > 0) 
        cases.push(dailyCase)
      else
        cases.push(0)
    }
    this.setState({deathCases: cases})
  }

  render() {
    return (
        <div className="countrystats">
            <div className="header">
              <h1>World</h1>
            </div>
            <div className="card-row">
              <TotalCasesCard data={this.state.data}/>
              <TotalActiveCard data={this.state.data}/>
              <TotalRecoveredCard data={this.state.data}/>
              <TotalDeathsCard data={this.state.data}/>
            </div>
            <div className='column-1'>
              <NewCasesGraph data={this.state.newCases} dates={this.state.dates}/>
              <ActiveCaseGraph data={this.state.activeCases} dates={this.state.dates}/>
            </div>
            <div className='column-2'>
              <RecoveredGraph data={this.state.recoveredCases} dates={this.state.dates}/>
              <DeathGraph data={this.state.deathCases} dates={this.state.dates}/>
            </div>
        </div>
    )
  }
}

export default CountryStats;
