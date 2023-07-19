    var nodemailer = require('nodemailer');

    export default async function handleSubmit(req, res){
        try{
            const formData = req.body;
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: 'caiotagb@gmail.com',
                pass: 'mariagb123'
                }
            });
            
            var mailOptions = {
                from: formData.email,
                to: 'caiotagb@gmail.com',
                subject: formData.subject,
                text: formData.message
            };
            
            await transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                res.status(400).json({ status: 'ERROR' });
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
            res.status(200).json({ status: 'OK' });
        } catch(e){
            res.status(400).json({ status: 'ERROR' });
        }
        
    }
