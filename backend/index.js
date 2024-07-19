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

//email from  the contact us page
app.post('/contact', (req, res) => {
  const { user, service } = req.body;
  console.log(user)
  let data = null;
  if(service.service == 'Comment' ||  service.service == 'Technical Support'){
    data = service.message
  }else if(service.service == 'Request for internet'){
    data = `Internet Request.   ${service.plan} plan  ${service.package} package`
  }
  // sends an email to the client
  sendEmail(user.firstName,user.lastName,user.location,service,user.email,user.whatsAppNumber,user.phoneNumber)
  //send message to office
  const htmlTemplate = fs.readFileSync('./contact.html', 'utf-8');
  const imageAttachment = fs.readFileSync('./GCL_logo.jpg');

  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);

  // Render the template with the data
  const html = template({ user, service, data });
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `GCL Client: ${user.service}` ,
    // text: `Hello GCL client service, \nName: ${user.firstName} ${user.lastName} \nEmail: ${user.email}  \nPhone Number : ${user.phoneNumber} \nWhatsApp Number : ${user.whatsAppNumber} \nLocation: ${user.location} \nMessage: ${data}`,
    html:html,
    attachments:[{
      filename:'image.png',
      content: imageAttachment.toString('base64'),
      encoding:'base64',
      contentDisposition: 'inline',
      cid:'uniqueImageCID'
    }]
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

//email from internet plans 
app.post('/internet',(req,res)=>{
  const details = req.body;
  let user = req.body;
  user.service = "Request for internet";

  let service = {
    service:"Request for internet",
    plan:user.plan,
    package:user.package,
  }
 
  let data = `Internet Plan : ${details.plan} \tInternet Package: ${details.package}`
  console.log(user);
  sendEmail(user.firstName,user.lastName,user.location,service,user.email,user.whatsAppNumber,user.phoneNumber)
  const htmlTemplate = fs.readFileSync('./contact.html', 'utf-8');
  const imageAttachment = fs.readFileSync('./GCL_logo.jpg');

  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);

  // Render the template with the data
  const html = template({ user, service, data });
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
    subject: `GCL Client: ${user.service}` ,
    // text: `Hello GCL client service, \nName: ${user.firstName} ${user.lastName} \nEmail: ${user.email}  \nPhone Number : ${user.phoneNumber} \nWhatsApp Number : ${user.whatsAppNumber} \nLocation: ${user.location} \nMessage: ${data}`,
    html:html,
    attachments:[{
      filename:'image.png',
      content: imageAttachment.toString('base64'),
      encoding:'base64',
      contentDisposition: 'inline',
      cid:'uniqueImageCID'
    }]
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
//test request
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

//email to client
async function sendEmail(firstName,lastName,location,service,email,whatsAppNumber,phoneNumber) {
  // Read the HTML template and image file
  let htmlTemplate = 'Default HTML template';
  // console.log("190 service " + service)
  if(service.service == 'Comment'){
     htmlTemplate = await readFileAsync('./ClientCommentConfirmation.html', 'utf-8');
  }else if(service.service == 'Technical Support'){ 
    htmlTemplate = await readFileAsync('./ClientTechSupportConfirmation.html', 'utf-8')
  }else if(service.service == 'Request for internet'){
    htmlTemplate = await readFileAsync('./ClientInternetReqConfirmation.html', 'utf-8')
  }
  const template = handlebars.compile(htmlTemplate)
  const imageAttachment = await readFileAsync('./GCL_logo.jpg');
 
  const data ={
      firstName:firstName,      
      lastName:lastName,      
      location:location,      
      service:service,
      whatsAppNumber:whatsAppNumber,
      phoneNumber:phoneNumber,
      email:email,
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
          contentDisposition: 'inline',
          cid: 'uniqueImageCID', // Referenced in the HTML template
      }],
  });

  console.log('Email sent:', info.messageId);
}
const port = 5500;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});