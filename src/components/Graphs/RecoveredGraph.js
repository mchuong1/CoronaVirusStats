import React from "react"
import { Line } from "react-chartjs-2"
import { transformISODate } from "../../resource/covid19"

class RecoveredGraph extends React.Component {

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
            var recoveredCase = this.props.data[i].Recovered - this.props.data[i-1].Recovered
            if(recoveredCase > 0){
                cases.push(recoveredCase)
                date = transformISODate(this.props.data[i].Date)
                dates.push(date)
            }
        }
        return (
        <div className="graph green">
            <h3 className="title-graph">Daily Recovered Cases: {cases[cases.length-1]}</h3>
            <Line
            width={100}
            height={50}
            data= {{
                labels: dates,
                datasets: [
                    {
                        label: 'Recovered',
                        backgroundColor: '#49beb7',
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

export default RecoveredGraph