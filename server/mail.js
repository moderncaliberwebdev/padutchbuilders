import sgMail from '@sendgrid/mail'
import validator from 'validator'
import dotenv from 'dotenv'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const mailTo = (name, email, subject, message, callback) => {
  //validation
  if (!name || !email || !subject || !message) {
    return callback('Please fill in all fields', undefined)
  } else if (!validator.isEmail(email)) {
    return callback('Provide a valid email', undefined)
  } else {
    const msg = {
      to: 'sales@padutchbuilders.com',
      from: {
        name: 'PA Dutch Builders Contact',
        email: 'cmartin@moderncaliber.com',
      },
      replyTo: email,
      templateId: 'd-99ebf78af1de49428f2dd8918d7f7b5a',
      dynamic_template_data: {
        name,
        email,
        subject,
        message,
      },
    }
    //ES8
    const sendSGMail = async () => {
      try {
        await sgMail.send(msg)

        callback(undefined, { sent: true })
      } catch (error) {
        console.error(error)

        if (error.response) {
          console.error(error.response.body)
        }
      }
    }
    sendSGMail()
  }
}

export default mailTo
