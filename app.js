const createError = require('http-errors');
const express = require('express');
const app = express();
//const PORT = 9876;
const path = require('path');
const cookieParser = require('cookie-parser');

const date_routes = require('./routes/date_routes');

app.use(express.static(path.join(__dirname, 'public')));

//set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(date_routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// //runs server on port 9876
// app.listen(PORT, () => {
//     console.log('Server running on port ' + PORT);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

app.get('/', (req, res) => {
    res.send('One Day Application');
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;