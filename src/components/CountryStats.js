import React from "react";
import { getDayOneTotalAllStatus, getCountries, transformISODate } from "../resource/covid19"
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
      this.getDailyCases(this.state.data, "Active", "activeCases")
      this.getDailyCases(this.state.data, "Confirmed", "newCases")
      this.getDailyCases(this.state.data, "Recovered", "recoveredCases")
      this.getDailyCases(this.state.data, "Deaths", "deathCases")
      this.getTotalandNewCases()
    })
    .catch(err => console.log(err))
    
    getCountries()
    .then(response => this.setState({countries:response.data}))
    .catch(err => console.log(err))

  }
  getCountryStats = (event) => {
    getDayOneTotalAllStatus(event.Slug)
    .then(response => this.setState({data: response, country: event.Country, slug: event.Slug}))
    .then(() => {
      this.getDates()
      this.getDailyCases(this.state.data, "Active", "activeCases")
      this.getDailyCases(this.state.data, "Confirmed", "newCases")
      this.getDailyCases(this.state.data, "Recovered", "recoveredCases")
      this.getDailyCases(this.state.data, "Deaths", "deathCases")
      this.getTotalandNewCases()
    })
    .catch(err => console.log(err))
  }
  getDates = () => {
    var { data } = this.state
    var tempdates = []
    data.forEach(item =>{
      tempdates.push(transformISODate(item.Date))
    })
    this.setState({dates:tempdates})
  }
  getDailyCases = (data, type, state) => {
    var dailyCase
    var cases = []
    for(var i = 1; i <= data.length-1; i++){
      dailyCase = data[i][type] - data[i-1][type]
      if(dailyCase > 0) 
        cases.push(dailyCase)
      else
        cases.push(0)
    }
    this.setState({[state]: cases})
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
              <CaseGraph 
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
                bgcolor="#ff5959"/>
            </div>
            <div className='column-2 grid-column-2'>
              <CaseGraph 
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
                bgcolor="#085f63"/>
            </div>
        </div>
    )
  }
}

export default CountryStats;
