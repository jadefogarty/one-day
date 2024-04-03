//GET /
function date_index(req, res) {
        res.render('index', {});
};

//GET /date
function search_date(req, res) {
    const date = req.query.Date;
    console.log(date)

};
  
module.exports = {
    date_index,
    search_date,
};