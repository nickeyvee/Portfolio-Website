const config = require('../config/sendgridConfig.js')
const emailjs = require('emailjs');
const express = require('express');
const router = express.Router();

// ---ENDPOINT FOR SENDGRID EMAIL SERVICE---

router.post('/', ( req, res ) => {

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

module.exports = router;