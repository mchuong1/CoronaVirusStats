import React from "react"
import Chart from 'react-google-charts'

class Map extends React.Component{
    
    render(){
        return(
            <div className="map darkgreen">
                <h2>Total Confirmed GeoChart</h2>
                <Chart 
                width={'1200px'}
                height={'600px'}
                chartType="GeoChart"
                data={this.props.data}
                mapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                options={{
                    colorAxis: { colors: ['#49BEB7', '#FACF5A', '#FF5959'] },
                    datalessRegionColor: '#085F63'
                }}
                />
            </div>
        )
    }
}

export default Map