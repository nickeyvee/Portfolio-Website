const password = process.env.PASSWORD;
const username = process.env.USERNAME;

function sendContactForm(params, cb) {
   const emailBody = `
      first name: ${ params.fname }\n
      last name: ${ params.lname }\n
      message:\n
      ${ params.message }
   `;

   const helper = require('sendgrid').mail;
   const fromEmail = new helper.Email('noreply@example.com');
   const toEmail = new helper.Email('vorraso.inquiries@gmail.com');
   const subject = params.subject;
   const content = new helper.Content('text/plain', emailBody);
   const mail = new helper.Mail(fromEmail, subject, toEmail, content);

   const sg = require('sendgrid')(process.env.API_KEY);
   const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
   });

   sg.API(request, function (error, response) {
      if (error) {
         console.log('Error response received');
         cb({ error: 'There was a problem processing your request'});
      } else {
         cb({ success: 'message sent'});
      }
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
   })
}

module.exports = sendContactForm;