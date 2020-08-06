import React from "react"
import Chart from 'react-google-charts'

class Map extends React.Component{
    constructor(){
        super()
        this.state = {
            width: '85vw',
            height: '200px'
        }
    }
    componentDidMount(){

    }
    updateDimensions = () =>{
        if(window.innerWidth < 500) {
            this.setState({ width: '300px', height: '200px' });
          } else {
            let update_width  = '1200px';
            let update_height = '600px';
            this.setState({ width: update_width, height: update_height });
          }
    }

    render(){
        return(
            <div className="map darkgreen">
                <h2>Total Confirmed GeoChart</h2>
                <Chart 
                width={this.state.width}
                height={this.state.height}
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