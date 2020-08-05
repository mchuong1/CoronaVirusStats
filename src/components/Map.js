import React from "react"
import Chart from 'react-google-charts'
import googlemaps_apikey from '../resource/key.json'

class Map extends React.Component{
    

    render(){
        return(
            <div className="map">
                <Chart 
                width={'1200px'}
                height={'600px'}
                chartType="GeoChart"
                data={[
                    ['Country', 'Popularity'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700],
                  ]}
                mapsApiKey={googlemaps_apikey}
                />
            </div>
        )
    }
}

export default Map