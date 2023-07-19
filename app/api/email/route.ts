import { NextRequest, NextResponse } from 'next/server';

    var nodemailer = require('nodemailer');
  



    export async function POST(req: NextRequest, res: NextResponse) {
        try {
            const body = await req.json()
            const { name, email, subject, message } = body;
            
            console.log(name, ' ', email, ' ', subject, ' ', message);
        
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'caiotagb@gmail.com',
              pass: 'qhwmduafhmqxsaze'
            }
          });
      
          const mailOptions = {
            title: name,
            from: email,
            to: 'caiotagb@gmail.com',
            subject: subject,
            text: message
          };
      
          await transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
              console.log(error);
              return NextResponse.json({ message: "ERROR", success: false });
            } else {
              console.log('Email sent: ' + info.response);
              return NextResponse.json({ message: "ok", success: true });
            }
          });

          return NextResponse.json({ message: "ok", success: true });
        } catch (e) {
          console.error(e);
          return NextResponse.json({ message: "ERROR", success: false });
        }
      }