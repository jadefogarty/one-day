const axios = require('axios');


const callNasaApi = async (date) => {
    try {
        console.log("call nasa API called")
        const api_key = "eOUQWfv4Hiq8j4eQbJbyyVjEQqPfuaXGyEx6U28S"
        const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="+api_key
        const mainUrl = baseUrl + "&date=" +date
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

module.exports = {
    callNasaApi,
    callMlApi
};