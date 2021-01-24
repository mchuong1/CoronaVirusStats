import axios from "axios"

export async function getSummary(){
    
    const response = await axios.get('https://api.covid19api.com/summary');
    
    return response.data
}

export function getDayOneTotalAllStatus(country){
    try{
        return axios.get('https://api.covid19api.com/total/dayone/country/' + country)
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

export function getWorldTotalWIP(){
    return axios.get('https://api.covid19api.com/world/total')
    .then(function(response) {
        return response.data
    })
    .catch(function(error){
        console.log(error)
    })
}

export function getCountries(){
    return axios.get('https://api.covid19api.com/countries')
    .then(function(response) {
        return response.data
    })
    .catch(function(error){
        console.log(error)
    })
}

export function transformISODate(isoDate){
    var date = new Date(isoDate);
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

