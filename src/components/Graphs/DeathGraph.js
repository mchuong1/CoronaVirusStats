import React from "react"
import { Line } from "react-chartjs-2"

class DeathGraph extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        var { data, dates } = this.props
        return (
        <div id="Deaths" className="graph darkgreen">
            <h3 className="title-graph">Daily Death Cases: {data[data.length-1]}</h3>
            <Line
            width={100}
            height={50}
            data= {{
                labels: dates,
                datasets: [
                    {
                        label: 'Deaths',
                        backgroundColor: '#085f63',
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

export default DeathGraph