import React from "react";
import { getDayOneTotalAllStatus, getCountries, transformISODate } from "../resource/covid19"
import ActiveCaseGraph from "./Graphs/ActiveCaseGraph"
import DeathGraph from './Graphs/DeathGraph'
import RecoveredGraph from './Graphs/RecoveredGraph'
import NewCasesGraph from './Graphs/NewCasesGraph'
import CountryList from './CountryList'
import TotalCasesCard from './Cards/TotalCasesCard'
import TotalRecoveredCard from './Cards/TotalRecoveredCard'
import TotalDeathsCard from './Cards/TotalDeathsCard'
import TotalActiveCard from './Cards/TotalActiveCard'

class CountryStats extends React.Component {
	constructor(){
			super()
			this.state = {
					data: [],
          country: 'United States of America',
          slug: 'united-states',
          countries: [],
          activeCases: [],
          newCases: [],
          recoveredCases: [],
          deathCases: [],
          dates: [],
          newActive: '',
          totalActive: '',
          newConfirmed: '',
          totalConfirmed: '',
          newRecovered: '',
          totalRecovered: '',
          newDeath: '',
          totalDeath: ''
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
      this.getTotalandNewCases()
    })
    .catch(err => console.log(err))

    getCountries()
    .then(response => this.setState({countries:response}))
    .catch(err => console.log(err))

  }
  getCountryStats = (event) => {
    getDayOneTotalAllStatus(event.Slug)
    .then(response => this.setState({data: response, country: event.Country, slug: event.Slug}))
    .then(() => {
      this.getDates()
      this.getDailyActiveCases()
      this.getDailyNewCases()
      this.getDailyRecoveredCases()
      this.getDailyDeathCases()
      this.getTotalandNewCases()
    })
    .catch(err => console.log(err))
  }
  getDates = () => {
    var { data, dates } = this.state
    var tempdates = []
    data.forEach(item =>{
      tempdates.push(transformISODate(item.Date))
    })
    this.setState({dates:tempdates})
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
  getTotalandNewCases = () => {
    var { data } = this.state
    this.setState({
      totalActive: data[data.length-1].Active,
      totalConfirmed: data[data.length-1].Confirmed,
      totalRecovered: data[data.length-1].Recovered,
      totalDeath: data[data.length-1].Deaths,
      newActive: data[data.length-1].Active - data[data.length-2].Active,
      newConfirmed: data[data.length-1].Confirmed - data[data.length-2].Confirmed,
      newRecovered: data[data.length-1].Recovered - data[data.length-2].Recovered,
      newDeath: data[data.length-1].Deaths - data[data.length-2].Deaths
    })
  }

  render() {
    return (
        <div className="countrystats">
            <div className="header">
              <CountryList countries={this.state.countries} getCountryStats={this.getCountryStats}/>
              <h1>{this.state.country}</h1>
            </div>
            <div className="card-row">
              <TotalCasesCard totalConfirmed={this.state.totalConfirmed} newConfirmed={this.state.newConfirmed}/>
              <TotalActiveCard totalActive={this.state.totalActive} newActive={this.state.newActive}/>
              <TotalRecoveredCard totalRecovered={this.state.totalRecovered} newRecovered={this.state.newRecovered}/>
              <TotalDeathsCard totalDeaths={this.state.totalDeath} newDeaths={this.state.newDeath}/>
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
