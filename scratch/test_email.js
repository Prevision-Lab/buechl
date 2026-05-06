import nodemailer from 'nodemailer';

async function testEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // TLS requires secure: false for port 587
        auth: {
            user: 'noreply-web@buechl.hu',
            pass: 'ARb4C_ksbr_N%">=?Z`,nr-*pxN',
        },
        requireTLS: true,
        tls: {
            ciphers: 'SSLv3',
        }
    });

    const mailOptions = {
        from: '"BÜCHL HU Website" <noreply-web@buechl.hu>',
        to: 'info@buechl.hu', // This would normally go to info@buechl.hu
        subject: `Teszt üzenet`,
        text: `Ez egy teszt üzenet a nodemailer-ből.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

testEmail();
