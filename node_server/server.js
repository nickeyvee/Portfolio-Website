'strict mode';

const express = require('express');
const emailjs = require('emailjs');
const bodyParser = require('body-parser');
const config = require('./sendgridConfig.js')


const app = express();  
const staticRoot = __dirname;  

//--- EXPRESS MIDDLEWARE ---

app.set('port', (process.env.PORT || 3000));
app.use(express.static(staticRoot));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', ( req, res ) => {
    res.sendFile('index.html');
});

app.post('/sendmail', ( req, res ) => {

    let server = emailjs.server.connect( config );
    
    //send the message and get a callback with an error or details of the message that was sent

    server.send({
    text:    `You have a message from ${ req.body.name }.`, 
    from:    req.body.email,
    to:      "nvorraso2020@gmail.com",
    subject: `New message from ${ req.body.name }`,
    attachment: 
    [
        {data:`
        <html>
            <ul style="list-style: none">
                <li><b>Name:</b> ${ req.body.name }</li>
                <li><b>Email:</b> ${ req.body.email }</li>
                <li><b>Phone:</b> ${ req.body.phone }</li>
                <li><b>Comments:</b></li>
                <li style="margin-left: 3em"><i>${ req.body.comments }</i></li>
            </ul>
        </html>`
        , alternative:true}
    ]
    }, (err, message) => { 
        if(err) {
            console.log(err);
        } else {
            res.json({success: true, msg: 'sent'});
        }
    });           
});


app.listen( app.get('port'), () => {  
    console.log('app running on port', app.get('port'));
});