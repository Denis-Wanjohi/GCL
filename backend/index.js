// server.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const handlebars = require('handlebars');
const { promisify } = require('util');
const cors = require('cors')
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const app = express();
let year =new Date().getFullYear()
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.options('*', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true');
  
// });

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:5173/','http://gigabit.co.ke/','https://gigabit.co.ke/'] // Whitelist the domains you want to allow
};

app.use(cors()); // Use the cors middleware with your options


app.post('/api/test', (req, res) => {
  res.send('post message {{test}}');
});


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'gigabitconnectionslimited@gmail.com',
    pass: 'opwv guea amxc nvuo'
  }
});

//email from  the contact us page
app.post('/contact', (req, res) => {
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
      console.log('Email sent::', info.response);
      res.send({ message: 'Email sent successfully to the office' });
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
  sendEmail(user.firstName,user.middleName,user.lastName,user.location,service,user.email,user.whatsAppNumber,user.phoneNumber)
  const htmlTemplate = fs.readFileSync('./contact.html', 'utf-8');
  // const imageAttachment = fs.readFileSync('./GCL_logo.jpg');

  // Compile the Handlebars template
  const template = handlebars.compile(htmlTemplate);

  // Render the template with the data
  const html = template({ user, service, data });
  const mailOptions = {
    from: "GCL CLIENT <sender@gmail.com>",
    to: "deniswanjohi15@gmail.com",
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
app.get('/',(req,res)=>{
  // const details = req.body;
  // const mailOptions = {
  //   from: "GCL CLIENT <sender@gmail.com>",
  //   to: "deniswanjohi15@gmail.com",
  //   subject: `GCL Client: Internet Request` ,
  //   html: `
  //   <div style="background-image: url('./GCL_logo.jpg'); background-size: cover; background-color: orange;  height: 100vh; padding: 20px; color: white;">
  //     <h1>Hello, World!</h1>
  //     <p>This is an email with a background image.</p>
  //   </div>
  // `
  // };
  // let x = ''
  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log('Error verifying transporter:', error);
  //   } else {
  //     x = 'Transporter verified successfully'
  //     console.log('Transporter verified successfully');
  //   }
  // });

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log('Error sending email:', error);
  //     res.status(500).send({ message: 'Error sending email' });
  //   } else {
  //     console.log('Email sent:', info.response);
  //     res.send({ message: 'Email sent successfully' });
  //   }
  // });

  res.send('hello')

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
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'gigabitconnectionslimited@gmail.com',
      pass: 'opwv guea amxc nvuo'
    }
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
const port = 5500;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});