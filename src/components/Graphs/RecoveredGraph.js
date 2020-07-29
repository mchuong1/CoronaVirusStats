import React from "react"
import { Line } from "react-chartjs-2"

class RecoveredGraph extends React.Component {

    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        var { data, dates } = this.props
        return (
        <div id="Recovered" className="graph green">
            <h3 className="title-graph">Daily Recovered Cases</h3>
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
                        data: data
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