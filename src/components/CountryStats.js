import React from "react";
import { getReportTotals, getCountries, transformISODate } from "../resource/covid19"
import _ from 'lodash';
import CountryList from './CountryList'
import CaseGraph from './Graphs/CaseGraph'
import TotalCard from './Cards/TotalCard'
import active from '../img/Active.png'
import virus from '../img/virus.png'
import recovered from '../img/recovered.png'
import rip from '../img/rip.png'

class CountryStats extends React.Component {
	constructor(){
			super()
			this.state = {
					cases: [],
          country: 'United States of America',
          slug: 'USA',
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
    getReportTotals(this.state.slug)
    .then(response => this.setState({cases: response.data}))
    .then(() => {
      this.getDates()
      this.getDailyCases(this.state.cases, "Active", "activeCases")
      this.getDailyCases(this.state.cases, "Confirmed", "newCases")
      this.getDailyCases(this.state.cases, "Recovered", "recoveredCases")
      this.getDailyCases(this.state.cases, "Deaths", "deathCases")
      this.getTotalAndNewCases()
    })
    .catch(err => console.log(err))
    
    getCountries()
    .then(response => this.setState({countries:response.data}))
    .catch(err => console.log(err))

  }
  getCountryStats = (event) => {
    getReportTotals(event.Slug)
    .then(response => this.setState({cases: response, country: event.Country, slug: event.Slug}))
    .then(() => {
      this.getDates()
      this.getDailyCases(this.state.cases, "Active", "activeCases")
      this.getDailyCases(this.state.cases, "Confirmed", "newCases")
      this.getDailyCases(this.state.cases, "Recovered", "recoveredCases")
      this.getDailyCases(this.state.cases, "Deaths", "deathCases")
      this.getTotalAndNewCases()
    })
    .catch(err => console.log(err))
  }
  getDates = () => {
    var { cases } = this.state
    var tempdates = []
    _.map(cases, item =>{
      tempdates.push(transformISODate(item.Date))
    })
    this.setState({dates:tempdates})
  }
  getDailyCases = (cases, type, state) => {
    var dailyCase
    var reports = []
    for(var i = 1; i <= cases.length-1; i++){
      dailyCase = cases[i][type] - cases[i-1][type]
      if(dailyCase > 0) 
      reports.push(dailyCase)
      else
      reports.push(0)
    }
    this.setState({[state]: cases})
  }
  getTotalAndNewCases = () => {
    const { cases } = this.state
    const {
      active, confirmed, recovered, deaths,
      active_diff, confirmed_diff, recovered_diff, deaths_diff
    } = cases;
    this.setState({
      totalActive: active,
      totalConfirmed: confirmed,
      totalRecovered: recovered,
      totalDeath: deaths,
      newActive: active_diff,
      newConfirmed: confirmed_diff,
      newRecovered: recovered_diff,
      newDeath: deaths_diff
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
              <TotalCard 
                totalNum={this.state.totalConfirmed} 
                newNum={this.state.newConfirmed} 
                png={virus}
                Type="Confirmed"
                color="orange"/>
              <TotalCard 
                totalNum={this.state.totalActive} 
                newNum={this.state.newActive} 
                png={active}
                Type="Active"
                color="red"/>
              <TotalCard 
                totalNum={this.state.totalRecovered} 
                newNum={this.state.newRecovered} 
                png={recovered}
                Type="Recovered"
                color="green"/>
              <TotalCard 
                totalNum={this.state.totalDeath} 
                newNum={this.state.newDeath} 
                png={rip}
                Type="Deaths"
                color="darkgreen"/>
            </div>
            <div className='column-1'>
              {/* <CaseGraph 
                data={this.state.newCases}
                dates={this.state.dates}
                type="New"
                color="orange"
                bgcolor="#facf5a"/>
              <CaseGraph 
                data={this.state.activeCases}
                dates={this.state.dates}
                type="Active"
                color="red"
                bgcolor="#ff5959"/> */}
            </div>
            <div className='column-2 grid-column-2'>
              {/* <CaseGraph 
                data={this.state.recoveredCases}
                dates={this.state.dates}
                type="Recovered"
                color="green"
                bgcolor="#49beb7"/>
              <CaseGraph 
                data={this.state.deathCases}
                dates={this.state.dates}
                type="Deaths"
                color="darkgreen"
                bgcolor="#085f63"/> */}
            </div>
        </div>
    )
  }
}

export default CountryStats;
