import React from "react";
import { getDayOneTotalAllStatus, getCountries } from "../resource/covid19"
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
					countries: []
			}
			this.getCountryStats = this.getCountryStats.bind(this)
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

  render() {
    return (
        <div className="countrystats">
            <div className="header">
              <h1>{this.state.country}</h1>
              <CountryList countries={this.state.countries} getCountryStats={this.getCountryStats}/>
            </div>
            <div className="card-row">
              <TotalCasesCard data={this.state.data}/>
              <TotalActiveCard data={this.state.data}/>
              <TotalRecoveredCard data={this.state.data}/>
              <TotalDeathsCard data={this.state.data}/>
            </div>
            <div className='column-1'>
              <NewCasesGraph data={this.state.data}/>
              <ActiveCaseGraph data={this.state.data}/>
            </div>
            <div className='column-2'>
              <RecoveredGraph data={this.state.data}/>
              <DeathGraph data={this.state.data}/>
            </div>
        </div>
    )
  }
}

export default CountryStats;
