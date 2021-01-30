import React from "react";
import { getSummary } from "../resource/covid19"
import Map from './Map'
import TotalCard from './Cards/TotalCard'
import virus from '../img/virus.png'
import recovered from '../img/recovered.png'
import rip from '../img/rip.png'

class World extends React.Component {
	constructor(){
			super()
			this.state = {
          confirmedArray: [],
          worlddata: [],
          newConfirmed: '',
          totalConfirmed: '',
          newRecovered: '',
          totalRecovered: '',
          newDeath: '',
          totalDeath: ''
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
        newDeath: Global.NewDeaths,
        totalDeath: Global.TotalDeaths
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
    this.setState({confirmedArray: tempdata})
  }

  render() {
    return (
      <div className="world">
          <div className="world-header">
            <h1>World Statistics</h1>
          </div>
          <div className="world-card-row">
            <TotalCard 
              totalNum={this.state.totalConfirmed} 
              newNum={this.state.newConfirmed} 
              png={virus}
              Type="Confirmed"
              color="orange"/>
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
          <div className="world-map">
            <Map data={this.state.confirmedArray}/>
          </div>
      </div>
    )
  }
}

export default World;
