import nodemailer from 'nodemailer'
import mailGun from 'nodemailer-mailgun-transport'
import validator from 'validator'
import dotenv from 'dotenv'

dotenv.config()

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_API_DOMAIN,
  },
}

const transporter = nodemailer.createTransport(mailGun(auth))

export const mailTo = (name, email, subject, message, callback) => {
  //validation
  if (!name || !email || !subject || !message) {
    return callback('Please fill in all fields', undefined)
  } else if (!validator.isEmail(email)) {
    return callback('Provide a valid email', undefined)
  } else {
    const output = `
                <h3>Name:</h3> ${name}
                <h3>Email:</h3> ${email}
                <h3>Subject:</h3> ${subject}
                <h3>Message:</h3> ${message}
            `
    const mailOptions = {
      from: email,
      to: 'cmartin@moderncaliber.com',
      subject: 'PA Dutch Builders Contact Request',
      html: output,
    }
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        callback('Internal Error', undefined)
      } else {
        callback(undefined, data)
      }
    })
  }
}

export default mailTo
