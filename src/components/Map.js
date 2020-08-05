import React from "react"
import Chart from 'react-google-charts'
import googlemaps_apikey from '../resource/key.json'

class Map extends React.Component{
    
    render(){
        return(
            <div className="map darkgreen">
                <Chart 
                width={'1200px'}
                height={'600px'}
                chartType="GeoChart"
                data={this.props.data}
                mapsApiKey={googlemaps_apikey}
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