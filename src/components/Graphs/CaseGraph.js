import React from "react"
import { Line } from "react-chartjs-2"

class CaseGraph extends React.Component {

    render() {
        var { data, dates, type, color, bgcolor } = this.props
        return (
            <div id={type} className={"graph "+color}>
                <h3 className="title">Daily {type} Cases</h3>
                <Line
                    width={100}
                    height={50}
                    data={{
                        labels: dates,
                        datasets: [
                            {
                                label: type,
                                backgroundColor: bgcolor,
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
                        title: {
                            display: true,
                            fontsize: 20
                        },
                        legend: {
                            display: false,
                        },
                        tooltips: {
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

    componentDidMount() { }

}

export default CaseGraph