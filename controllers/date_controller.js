const data_model = require('../models/data_model');

//GET /
function date_index(req, res) {
    res.render('index', {data: null});
};

//GET /date
async function search_date(req, res) {
    try{
        const date = req.query.Date;
        console.log(date)

        const apiData = await data_model.callApi(date);
        console.log(apiData);
        res.render('index',{data: apiData});
    }
    catch(error){
        res.render('error', {error: error})
    }

};
  
module.exports = {
    date_index,
    search_date,
};