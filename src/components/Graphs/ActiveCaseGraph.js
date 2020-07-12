import React from "react"
import { Line } from "react-chartjs-2"
import { transformISODate } from "../../resource/covid19"

class ActiveCaseGraph extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        var cases = []
        var dates = []
        var date
        for(var i = 1; i <= this.props.data.length-1; i++){
            var newcase = this.props.data[i].Active - this.props.data[i-1].Active
            if(newcase > 0){
                cases.push(newcase)
                date = transformISODate(this.props.data[i].Date)
                dates.push(date)
            }
        }
        return (
        <div className="graph red">
            <h3>Daily Active Cases: {cases[cases.length-1]}</h3>
            <Line
            width={100}
            height={50}
            data= {{
                labels: dates,
                datasets: [
                    {
                        label: 'New',
                        backgroundColor: 'rgba(255,0,0)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        pointRadius: 1,
                        data: cases
                    }
                ]
            }}
            options={{
                responsive: true,
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