'strict mode';

const express = require('express');
const emailjs = require('emailjs');
const path = require('path');
const bodyParser = require('body-parser');
const emailService = require('./server/routes/email-service.js');

const app = express();


//--- EXPRESS MIDDLEWARE ---

const forceSSL = function() {
  return function ( req, res, next ) {
    if ( req.headers['x-forwarded-proto'] !== 'https' ) {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());   // <=== BodyParser MUST be called before emailService route middleware!
app.set( 'port', ( process.env.PORT || 80 ));
app.use( '/sendmail', emailService );
app.use(express.static( path.join(__dirname, 'dist' )));
app.use(forceSSL());

app.get('/*', ( req, res ) => {
  res.sendFile( path.join(__dirname, 'dist/index.html') );
});

app.listen( app.get('port'), () => {  
    console.log('app running on port', app.get('port'));
});