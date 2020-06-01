import axios from "axios"

export function getSummary(){
    try{
        return axios.get('https://api.covid19api.com/summary')
        .then(function(response) {
            return response.data
        })
        .catch(function(error){
            console.log(error)
        })
    } catch (err) {
        console.log(err)
    }
}

export function getDayOneTotalAllStatus(country, type){
    try{
        return axios.get('https://api.covid19api.com/total/dayone/country/' + country)
        .then(function(response) {
            var activeCases = []
            var dates = []

            response.data.forEach(element => {
                activeCases.push(element.Active)
                dates.push(element.Date)
            });
            
            return {
                labels: dates,
                datasets: [
                  {
                    label: 'Covid-19 '+ type +' Cases',
                    backgroundColor: 'rgba(255,0,0)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: activeCases
                  }
                ]
            }
        })
        .catch(function(error){
            console.log(error)
        })
    } catch (err) {
        console.log(err)
    }
}
export function getWorldTotalWIP(){
    axios.get('https://api.covid19api.com/world/total')
    .then(function(response) {
        return response.data
    })
    .catch(function(error){
        console.log(error)
    })
}