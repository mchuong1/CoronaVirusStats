import axios from "axios"

export async function getSummary(){
    
    const response = await axios.get('https://api.covid19api.com/summary');
    
    return response.data
}

export async function getDayOneTotalAllStatus(country){

    const response = await axios.get('https://api.covid19api.com/total/dayone/country/' + country)

    return response.data
}

export async function getWorldTotalWIP(){
    const response = await axios.get('https://api.covid19api.com/world/total')

    return response.data
}

export async function getCountries(){
    const response = await axios.get('https://api.covid19api.com/countries')
    
    return response.data
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

