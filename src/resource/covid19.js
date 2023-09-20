import axios from "axios"

const url = "https://covid-api.com/api"

export async function getSummary(){
    try{
        const response = await axios.get('https://api.covid19api.com/summary');
        return response.data
    }
    catch(error){
        console.log(`error ${error}`)
    }
}

export async function getReportTotals(country = "") {
    try{
        const response = await axios.get(`${url}/reports/total${country.length > 1 ? "?iso="+country : ""}`);
        return response.data
    }
    catch(error){
        console.log(`error ${error}`)
    }
}

export async function getDayOneTotalAllStatus(country){
    try{
        const response = await axios.get('https://api.covid19api.com/total/dayone/country/' + country)
        return response.data
    }
    catch(error){
        console.log(`error ${error}`)
    }
}

export async function getWorldTotalWIP(){
    try{
        const response = await axios.get('https://api.covid19api.com/world/total')   
        return response.data
    }
    catch(error){
        console.log(`error ${error}`)
    }
}

export async function getCountries(){
    try{
        const response = await axios.get(`${url}/regions`)   
        return response.data
    }
    catch(error){
        console.log(`error ${error}`)
    }
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

