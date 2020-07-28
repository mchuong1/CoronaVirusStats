import React from "react";
import { getWorldTotalWIP, getSummary } from "../resource/covid19"
import ActiveCaseGraph from "./Graphs/ActiveCaseGraph"
import DeathGraph from './Graphs/DeathGraph'
import RecoveredGraph from './Graphs/RecoveredGraph'
import NewCasesGraph from './Graphs/NewCasesGraph'
import CountryList from './CountryList'
import TotalCasesCard from './Cards/TotalCasesCard'
import TotalRecoveredCard from './Cards/TotalRecoveredCard'
import TotalDeathsCard from './Cards/TotalDeathsCard'
import TotalActiveCard from './Cards/TotalActiveCard'
import Tab from './Tab'

class World extends React.Component {
	constructor(){
			super()
			this.state = {
					data: [],
			}
			this.getCountryStats = this.getCountryStats.bind(this)
	}
  componentDidMount() {
    getSummary()
    .then(response => this.setState({data: response}))
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="countrystats">
            <div className="header">
              <h1 style={{marginBottom: 0}}>World</h1>
            </div>
            <div className="card-row">
              <TotalCasesCard data={this.state.data}/>
              <TotalActiveCard data={this.state.data}/>
              <TotalRecoveredCard data={this.state.data}/>
              <TotalDeathsCard data={this.state.data}/>
            </div>
            <Tab />
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

export default World;
