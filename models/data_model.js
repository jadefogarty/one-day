const axios = require('axios');


const callApi = async (date) => {
    try {
        console.log("call API called")
        const api_key = "eOUQWfv4Hiq8j4eQbJbyyVjEQqPfuaXGyEx6U28S"
        const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="+api_key
        const mainUrl = baseUrl + "&date=" +date
        console.log("calling api url: ", mainUrl)

        const response = await axios.get(mainUrl);

        return response.data;
    } catch (error) {
      throw error;
    }
}


module.exports = {
    callApi
};