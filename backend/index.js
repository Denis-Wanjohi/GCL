// server.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/send', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



const transporter = nodemailer.createTransport({
  
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'gightkingss@gmail.com',
    pass: 'hzzv dbyc nzap giob'
  }
});

app.post('/contact', (req, res) => {
  const { user, service } = req.body;
  
  let data = null;
  if(service.service == 'Comment' ||  service.service == 'Technical Support'){
    data = service.message
  }else if(user.service == 'Request for internet'){
    data = `Internet Request.   ${service.plan} plan  ${service.package} package`
  }

  sendEmail(user.firstName,user.lastName,user.service,user.email,data)
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `GCL Client: ${user.service}` ,
    text: `Hello GCL client service, \nName: ${user.firstName} ${user.lastName} \nEmail: ${user.email}  \nPhone Number : ${user.phoneNumber} \nWhatsApp Number : ${user.whatsAppNumber} \nLocation: ${user.location} \nMessage: ${data}`,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.log('Error verifying transporter:', error);
    } else {
      console.log('Transporter verified successfully');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.send({ message: 'Email sent successfully' });
    }
  });

  

});

app.post('/internet',(req,res)=>{
  const details = req.body;
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `GCL Client: Internet Request` ,
    text: `Hello GCL client service, \nName: ${details.firstName} ${details.lastName} \nEmail: ${details.email}  \nPhone Number : ${details.phoneNumber} \nWhatsApp Number : ${details.whatsAppNumber} \nLocation: ${details.location} \nInternet Plan : ${details.plan} \nInternet Package: ${details.package}`,
  };

  transporter.verify((error, success) => {
    if (error) {
      console.log('Error verifying transporter:', error);
    } else {
      console.log('Transporter verified successfully');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.send({ message: 'Email sent successfully' });
    }
  });

})

app.get('/internet',(req,res)=>{
  const details = req.body;
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `GCL Client: Internet Request` ,
    text:'hello'
  };

  transporter.verify((error, success) => {
    if (error) {
      console.log('Error verifying transporter:', error);
    } else {
      console.log('Transporter verified successfully');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.send({ message: 'Email sent successfully' });
    }
  });

  res.sendFile(path.join(__dirname, 'index.html'));

})

async function sendEmail(firstName,lastName,service,email,message) {
  // Read the HTML template and image file
  const htmlTemplate = await readFileAsync('./email.html', 'utf-8');
  const template = handlebars.compile(htmlTemplate)
  const imageAttachment = await readFileAsync('./GCL_logo.jpg');
 
  const data ={
      name:`${firstName} ${lastName}`,
      service:service,
      message:message
  }
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'gightkingss@gmail.com',
          pass: 'hzzv dbyc nzap giob'
      },
  });

  const html = template(data)

  // Send email
  const info = await transporter.sendMail({
      from: 'GCL CLIENT RESPONDENT  <sender@gmail.com> ',
      to: email,
      subject: 'GCL CLIENT SUPPORT',
      html: html,
      attachments: [{
          filename: 'image.png',
          content: imageAttachment,
          encoding: 'base64',
          cid: 'uniqueImageCID', // Referenced in the HTML template
      }],
  });

  console.log('Email sent:', info.messageId);
}
const port = 5500;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});