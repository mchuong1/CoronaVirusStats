import React from "react"
import { Line } from "react-chartjs-2"
import { transformISODate } from "../../resource/covid19"

//Problems
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
        var cases = []
        var dates = []
        var date
        this.props.data.forEach(element => {
            date = transformISODate(element.Date)
            cases.push(element.Active)
            dates.push(date)
        })

        return (
        <div>
            <h3>Total Active Cases: {cases[cases.length-1]}</h3>
            <Line
            width={100}
            height={50}
            data= {{
                labels: dates,
                datasets: [
                    {
                        label: 'Active',
                        backgroundColor: 'rgba(255,0,0)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        pointRadius: 1,
                        data: cases
                    }
                ]
            }}
            options={{
                maintainAspectRatio: true,
                title:{
                    display: true,
                    fontsize: 20},
                legend:{
                    display: false,
                },
                tooltips:{
                    intersect: false,
                    displayColors: false,
                    titleFontSize: 18,
                    bodyFontSize: 18,
                }
            }}
            />
        </div>
        )
    }

    componentDidMount(){}
    
}

export default ActiveCaseGraph