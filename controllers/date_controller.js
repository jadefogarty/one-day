const data_model = require('../models/data_model');

//GET /
function date_index(req, res) {
    console.log("date controller called")
    res.render('index', { nasaData: null, mlData: null });
};

//GET /date
async function search_date(req, res) {
    try {
        console.log("search date function called")
        const date = req.query.Date;
        console.log(date)

        var dateArray = date.split("-");

        var year = parseInt(dateArray[0]);
        var month = parseInt(dateArray[1]);
        var day = parseInt(dateArray[2]);

        console.log("Year:", year);
        console.log("Month:", month);
        console.log("Day:", day);

        const nasaApiData = await data_model.callNasaApi(date);
        //console.log(nasaApiData);

        const mlApiData = await data_model.callMlApi(month, day);
        //console.log(mlApiData);

        const tmdbApiData = await data_model.callTMDBApi(date);
        console.log(tmdbApiData);

        
        res.render('index', { nasaData: nasaApiData, mlData: mlApiData, tmdbData: tmdbApiData });
    }
    catch (error) {
        res.render('error', { error: error })
    }

};

module.exports = {
    date_index,
    search_date,
};