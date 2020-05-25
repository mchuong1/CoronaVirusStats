import React from "react"
import { Line } from "react-chartjs-2"


//Problems
//Create a Dynamic Date Array
//Find Covid-19 API
//Resize the chart
//position chart in the middle of the website

const state = {
    labels: ["5/20","5/21","5/22","5/23","5/24"],
    datasets: [
      {
        label: 'Covid-19 Cases',
        backgroundColor: 'rgba(255,0,0)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [0, 50, 100, 200, 300]
      }
    ]
  }

class CaseGraph extends React.Component {
    render() {
        return (
        <div style={{width:"40%", height: 300}}>
            <Line
            data={state}
            options={{
                maintainAspectRatio: false,
                title:{
                    display: true,
                    text:"Covid-19 Cases",
                    fontsize: 20},
                legend:{
                    display: true,
                }}}
            />
        </div>
        )
    }
    componentDidMount(){

    }
}

export default CaseGraph