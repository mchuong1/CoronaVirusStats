import React from "react"
import { Line } from "react-chartjs-2"
import { getSummary, getDayOneTotalAllStatus } from "../resource/covid19"

//Problems
//Reformat date to MM-DD-YYYY
//Grab total Active cases for most recent day

class ActiveCaseGraph extends React.Component {

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
            }
        }
    }

    render() {
        return (
        <div style={{width:"40%", height: 400}}>
            <Line
            data={this.state.dayOneStatus}
            options={{
                maintainAspectRatio: false,
                title:{
                    display: true,
                    text:"Covid-19 Active Cases",
                    fontsize: 20},
                legend:{
                    display: true,
                }}}
            />
        </div>
        )
    }

    componentDidMount(){
        getDayOneTotalAllStatus("united-states", 'Active')
        .then(response => this.setState({dayOneStatus: response}))
    }
    
}

export default ActiveCaseGraph