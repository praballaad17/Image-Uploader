const express = require('express')
const app = express()

const hbs = require('express-handlebars')
const path = require('path');
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

//setup view engine
app.set('view engine', 'hbs')
app.engine('hbs', hbs({
    extname:'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname,'views'),
    partialsDir: path.join(__dirname, 'views/partials')
}))

//connect mongodb database
require('./server/database/database')();

//calling routes
app.use('/' , require('./server/router/router'))

app.listen(3005,() => console.log('server is started '))