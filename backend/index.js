// server.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');
const cors = require('cors');
const readFileAsync = promisify(fs.readFile);
const app = express();
import env from './env'
let year =new Date().getFullYear()
app.use(morgan('dev'));
app.use(bodyParser.json());

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:5173', 'http://gigabit.co.ke/','https://gigabit.co.ke/'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: env.user,
    pass: env.pass
  }
});
app.post('/app/contacts', (req, res) => {
  res.send('contacts')  
})

//email from  the contact us page
app.post('/app/contact', (req, res) => {
  const { user, service } = req.body;
  let data = null;
  if(service.service == 'Comment' ||  service.service == 'Technical Support'){
    data = service.message
  }else if(service.service == 'Request for internet'){
    data = `Internet Request.   ${service.plan} plan  ${service.package} package`
  }
  // sends an email to the client
  sendEmail(user.firstName,user.middleName,user.lastName,user.nationalID,user.location,service,user.email,user.whatsAppNumber,user.phoneNumber)
  //send message to office
  const htmlTemplate = fs.readFileSync('./contact.html', 'utf-8');
  
  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);


  // Render the template with the data
  const html = template({ user, service, data, year});
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "gigabitconnectionslimited@gmail.com",
    subject: `GCL Client: ${user.service}` ,
    html:html,
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
      res.send({ message: 'Email sent successfully to the office' });
    }
  });

});

//email from internet plans 
app.post('/app/internet',(req,res)=>{
  const details = req.body;
  let user = req.body;
  user.service = "Request for internet";

  let service = {
    service:"Request for internet",
    plan:user.plan,
    package:user.package,
  }
 
  let data = `Internet Plan : ${details.plan} \tInternet Package: ${details.package}`
  
  //email to clinet
  sendEmail(user.firstName,user.middleName,user.lastName,user.nationalID,user.location,service,user.email,user.whatsAppNumber,user.phoneNumber)
  
 //email to the office   
  const htmlTemplate = fs.readFileSync('./contact.html', 'utf-8');


  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);

  // Render the template with the data
  const html = template({ user, service, data });
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "gigabitconnectionslimited@gmail.com",
    subject: `GCL Client: ${user.service}` ,
    html:html,
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
app.get('/app',(req,res)=>{

  res.send('hello ðŸ˜Ž.')

})

//email to client
async function sendEmail(firstName,middleName,lastName,idNumber,location,service,email,whatsAppNumber,phoneNumber) {
  let data ={
    firstName:firstName,      
    middleName:middleName,      
    lastName:lastName,      
    location:location,      
    service:service,
    whatsAppNumber:whatsAppNumber,
    phoneNumber:phoneNumber,
    email:email,
  }
  
  // Read the HTML template and image file
  let htmlTemplate = 'Default HTML template';
  if(service.service == 'Comment'){
     htmlTemplate = await readFileAsync('./ClientCommentConfirmation.html', 'utf-8');
  }else if(service.service == 'Technical Support'){ 
    htmlTemplate = await readFileAsync('./ClientTechSupportConfirmation.html', 'utf-8')
  }else if(service.service == 'Request for internet'){
    data.nationalID = idNumber
    htmlTemplate = await readFileAsync('./ClientInternetReqConfirmation.html', 'utf-8')
  }
  const template = handlebars.compile(htmlTemplate)
  

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: env.user,
          pass: env.pass
      },
  });

  const html = template(data,year)

  // Send email
  const info = await transporter.sendMail({
      from: 'GCL CLIENT RESPONDENT  <sender@gmail.com> ',
      to: email,
      subject: 'GCL CLIENT SUPPORT',
      html: html,

  });

  console.log('Email sent:', info.messageId);
}
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});