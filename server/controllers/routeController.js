// Imports
import asyncHandler from 'express-async-handler'

// MailGun
import mailTo from '../mail.js'

export const mail = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.query
  mailTo(name, email, subject, message, (err, data) => {
    res.send({
      name,
      email,
      subject,
      message,
      formResponse: err,
    })
  })
})
