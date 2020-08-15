import React from "react";
import { getSummary } from "../resource/covid19"
import TotalCasesCard from './Cards/TotalCasesCard'
import TotalRecoveredCard from './Cards/TotalRecoveredCard'
import TotalDeathsCard from './Cards/TotalDeathsCard'
import Map from './Map'
import Top5Confirmed from './Cards/Top5Confirmed'

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
    .then(this.createGeoData)
    .catch(err => console.log(err))
  }

  createGeoData = () => {
    var { Countries } = this.state.worlddata
    var tempdata = [['Country', 'Confirmed']]
    var temp
    Countries.forEach(country => {
      switch(country.Country){
        case 'United States of America': 
          country.Country = 'United States';
          break;
        case 'Viet Nam': 
          country.Country = 'Vietnam';
          break;
        case 'Russian Federation':
          country.Country = 'RU';
          break;
        case 'Tanzania, United Republic of':
          country.Country = 'Tanzania';
          break;
        case 'Lao PDR':
          country.Country = 'Laos';
          break;
        case 'Iran, Islamic Republic of':
          country.Country = 'Iran';
          break;
        case "Taiwan, Republic of China":
          country.Country = 'Taiwan';
          break;
        case 'Venezuela (Bolivarian Republic)':
          country.Country = 'Venezuela';
          break;
        case "Syrian Arab Republic (Syria)":
          country.Country = 'Syria';  
          break;
        case "Côte d'Ivoire":
          country.Country = "CI"
          break;
        case "Korea (South)":
          country.Country = "South Korea"
          break;
        case "Korea (North)":
          country.Country = "North Korea"
          break;
        case "Congo (Kinshasa)":
          country.Country = "CD"
          break;
        case "Congo (Brazzaville)":
          country.Country = "CG"
          break;
        case "South Sudan":
          country.Country = "SS"
          break;
        default:
          break;
      }
      temp = [country.Country, country.TotalConfirmed]
      tempdata.push(temp)
    });
    this.setState({data: tempdata})
  }

  render() {
    return (
      <div className="world">
          <div className="world-header">
            <h1>World Statistics</h1>
          </div>
          <div className="world-card-row">
            <TotalCasesCard totalConfirmed={this.state.totalConfirmed} newConfirmed={this.state.newConfirmed}/>
            <TotalRecoveredCard totalRecovered={this.state.totalRecovered} newRecovered={this.state.newRecovered}/>
            <TotalDeathsCard totalDeaths={this.state.totalDeaths} newDeaths={this.state.newDeaths}/>
          </div>
          <div className="world-map">
            <Map data={this.state.data}/>
          </div>
          <div className="world-right grid-column-2">
            <Top5Confirmed />
          </div>
      </div>
    )
  }
}

export default World;
