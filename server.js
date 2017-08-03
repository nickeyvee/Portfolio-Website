'strict mode';

const express = require('express');
const emailjs = require('emailjs');
const path = require('path');
const bodyParser = require('body-parser');
const emailService = require('./server/routes/email-service.js');


const app = express();  


//--- EXPRESS MIDDLEWARE ---

app.set( 'port', ( process.env.PORT || 3000 ));
app.use( '/sendmail', emailService );
app.use(express.static( path.join(__dirname, 'dist' )));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('*', ( req, res ) => {
  res.sendFile( path.join(__dirname, 'dist/index.html') );
});

app.listen( app.get('port'), () => {  
    console.log('app running on port', app.get('port'));
});