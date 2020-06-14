import React from "react"
import { Line } from "react-chartjs-2"
import { transformISODate } from "../resource/covid19"

class DeathGraph extends React.Component {
    constructor(){
        super()
        this.state = {
            dayOneStatus: {
                labels: ["5/20","5/21","5/22","5/23","5/24"],
                datasets: [
                  {
                    label: 'Covid-19 Death Cases',
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
        var cases = []
        var dates = []
        var date
        this.props.data.forEach(element => {
            cases.push(element.Deaths)
            date = transformISODate(element.Date)
            dates.push(date)
        })
        return (
        <div>
            <h3>Total Death Cases: {cases[cases.length-1]}</h3>
            <Line
            data= {{
                labels: dates,
                datasets: [
                    {
                        label: 'Covid-19 Death Cases',
                        backgroundColor: 'rgba(153,0,0)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        pointRadius: 1,
                        data: cases
                    }
                ]
            }}
            options={{
                maintainAspectRatio: false,
                title:{
                    display: true,
                    text:"Covid-19 Death Cases",
                    fontsize: 20},
                legend:{
                    display: true,
                }}}
            />
        </div>
        )
    }
    componentDidMount(){}
}

export default DeathGraph