import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

/*
  Generated class for the MailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MailProvider {

  constructor() {
  }

  enviarEmail() {
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'mail.tvterradosal.com.br',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
              user: 'sender@tvterradosal.com.br', // generated ethereal user
              pass: 'Envio2018' // generated ethereal password
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"TV Terra do Sal" <sender@tvterradosal.com.br>', // sender address
          to: 'alexandre.wada@200horas.com.br', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world?', // plain text body
          html: '<b>Hello world?</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });
  }

}
