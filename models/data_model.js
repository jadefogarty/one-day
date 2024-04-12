const axios = require('axios');
require('dotenv').config()
// console.log(process.env)

const callNasaApi = async (date) => {
    try {
        console.log("call nasa API called")
        const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="+process.env.NASA_API_KEY
        const mainUrl =  baseUrl + "&date=" +date
        console.log("calling nasa api url: ", mainUrl)

        const response = await axios.get(mainUrl);

        return response.data;
    } catch (error) {
      throw error;
    }
}

const callMlApi = async (month, day) => {
    try {
        console.log("call ml API called")
        const baseUrl = "http://history.muffinlabs.com/date/"+month+"/"+day
        console.log("calling ml api url: ", baseUrl)

        const response = await axios.get(baseUrl);

        return response.data;
    } catch (error) {
      throw error;
    }
}

const callTMDBApi = async (date) => {
    try {

        console.log("call tmdb API called")
        const baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="+process.env.TMDB_API_KEY
        const mainUrl = baseUrl+"&include_adult=false&language=en-US&page=1&primary_release_date.gte="+ date + "&primary_release_date.lte=" + date + "&sort_by=popularity.desc"

        console.log("calling tmdb api url: ", mainUrl)
        const response = await axios.get(mainUrl);
        return response.data;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    callNasaApi,
    callMlApi,
    callTMDBApi
};