import React from "react";
import { getSummary } from "../resource/covid19"
import TotalCasesCard from './Cards/TotalCasesCard'
import TotalRecoveredCard from './Cards/TotalRecoveredCard'
import TotalDeathsCard from './Cards/TotalDeathsCard'

class World extends React.Component {
	constructor(){
			super()
			this.state = {
          data: [],
          worlddata: [],
          newConfirmed: '',
          totalConfirmed: '',
          newRecovered: '',
          totalRecovered: '',
          newDeaths: '',
          totalDeaths: ''
			}
  }
  componentDidMount() {
    getSummary()
    .then(response => this.setState({worlddata: response}))
    .then(() =>{
      var { Global } = this.state.worlddata
      this.setState({
        newConfirmed: Global.NewConfirmed,
        totalConfirmed: Global.TotalConfirmed,
        newRecovered: Global.NewRecovered,
        totalRecovered: Global.TotalRecovered,
        newDeaths: Global.NewDeaths,
        totalDeaths: Global.TotalDeaths
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="world">
            <div className="header">
              <h1>World</h1>
            </div>
            <div className="world-card-row">
              <TotalCasesCard totalConfirmed={this.state.totalConfirmed} newConfirmed={this.state.newConfirmed}/>
              <TotalRecoveredCard totalRecovered={this.state.totalRecovered} newRecovered={this.state.newRecovered}/>
              <TotalDeathsCard totalDeath={this.state.totalDeaths} newDeath={this.state.newDeaths}/>
            </div>
        </div>
    )
  }
}

export default World;
