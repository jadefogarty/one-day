const express = require('express');
const app = express();
const PORT = 9876;
const path = require('path');

const date_routes = require('./routes/date_routes');

app.use(express.static(path.join(__dirname, 'public')));

//set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(date_routes);

//runs server on port 9876
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

app.get('/', (req, res) => {
    res.send('One Day Application');
});

