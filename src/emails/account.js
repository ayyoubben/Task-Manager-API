const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelecomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'a.benhocine@esi-sba.dz',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'a.benhocine@esi-sba.dz',
        subject: 'Goodbye!',
        text: `Goodbye, ${name}. Is there anything to have kept you on board?`
    })
}

module.exports = {
    sendWelecomeEmail,
    sendCancelationEmail
}