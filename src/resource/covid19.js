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
            var Cases = []
            var dates = []
            var date

            response.data.forEach(element => {
                if(type === 'Active') Cases.push(element.Active)
                else if(type === 'Death') Cases.push(element.Deaths)
                else if(type === 'Recovered') Cases.push(element.Recovered)
                date = transformISODate(element.Date)
                dates.push(date)
            });
            
            return {
                labels: dates,
                datasets: [
                  {
                    label: 'Covid-19 '+ type +' Cases',
                    backgroundColor: 'rgba(255,0,0)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    pointRadius: 1,
                    data: Cases
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
    return axios.get('https://api.covid19api.com/world/total')
    .then(function(response) {
        return response.data
    })
    .catch(function(error){
        console.log(error)
    })
}

function transformISODate(isoDate){
    var date = new Date(isoDate);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    return month + '-' + dt;
}