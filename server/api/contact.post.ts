import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);

    // Basic validation
    if (!body.name || !body.email || !body.message || !body.privacy) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Minden kötelező mezőt ki kell tölteni.',
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: config.smtp.host,
            port: Number(config.smtp.port),
            secure: false, // TLS requires secure: false for port 587
            auth: {
                user: config.smtp.user,
                pass: config.smtp.pass,
            },
            requireTLS: true,
            tls: {
                ciphers: 'SSLv3',
            }
        });

        const mailOptions = {
            from: `"${config.smtp.fromName}" <${config.smtp.from}>`,
            to: 'info@buechl.hu',
            replyTo: body.email,
            subject: `Új üzenet a weboldalról - ${body.name}`,
            text: `
Új üzenet érkezett a Kapcsolat űrlapon keresztül:

Név: ${body.name}
Cég: ${body.company || '-'}
E-mail: ${body.email}
Telefonszám: ${body.phone || '-'}

Üzenet:
${body.message}
            `,
            html: `
<h2>Új üzenet érkezett a Kapcsolat űrlapon keresztül</h2>
<p><strong>Név:</strong> ${body.name}</p>
<p><strong>Cég:</strong> ${body.company || '-'}</p>
<p><strong>E-mail:</strong> ${body.email}</p>
<p><strong>Telefonszám:</strong> ${body.phone || '-'}</p>
<br/>
<p><strong>Üzenet:</strong></p>
<p>${body.message.replace(/\n/g, '<br/>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Email elküldve.' };
    } catch (error: any) {
        console.error('Hiba az email küldése során:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Hiba történt az üzenet elküldése során. Kérjük, próbálja újra később.',
        });
    }
});
