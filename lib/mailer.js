const fs = require('fs')
const nodemailer = require('nodemailer') // https://nodemailer.com/
const htmlToText = require('nodemailer-html-to-text').htmlToText;

export default async function mail({ message }) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  /*  Without callback (Promise): let account = await nodemailer.createTestAccount()
      With callback: nodemailer.createTestAccount((err, account) => { define transporter }) */
  let account = await nodemailer.createTestAccount()

  let mailConfig
  let mailServer = 'local' // 'local' | 'ethereal' | 'sendgrid' | 'gmail'
  if (process.env.NODE_ENV === 'production') {
    if (mailServer == 'sendgrid') { // https://app.sendgrid.com/
      mailConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: process.env.SENDGRID_EMAIL_USER,
          pass: process.env.SENDGRID_EMAIL_PASS
        }
      }
    }
    if (mailServer == 'gmail') { // https://mail.google.com/
      mailConfig = {
        host: 'smtp.google.com',
        port: 587,
        auth: {
          user: process.env.GMAIL_OAUTH2_EMAIL_USER,
          pass: process.env.GMAIL_OAUTH2_EMAIL_PASS
        }
      }
    }
  } else if (process.env.NODE_ENV === 'development') {
    if (mailServer == 'ethereal') { // https://ethereal.email/
      mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: process.env.ETHEREAL_FAKE_EMAIL_USER,
          pass: process.env.ETHEREAL_FAKE_EMAIL_PASS
        }
      }
    }
    if (mailServer == 'local') { // localhost:1025
      mailConfig = {
        host: 'localhost',
        port: 1025,
        auth: {
          user: process.env.NODEMAILER_APP_EMAIL_USER,
          pass: process.env.NODEMAILER_APP_EMAIL_PASS
        }
      }
    }
  }

  // let transporter = nodemailer.createTransport(transport[, defaults])
  let transporter = nodemailer.createTransport(mailConfig)

  transporter.use('compile', htmlToText()); // Convert html to text if no text option is used in message

  // transporter.sendMail(message[, callback])
  /*  Without callback (Promise): let info = await transporter.sendMail(message)
      With callback: transporter.sendMail(message, (err) => {}) */
  let info = await transporter.sendMail(!!message ? message : { // message
    /* Common fields */
    from: { // `sender@server.com` | `“Sender Name” sender@server.com` | { name, address }
      name: "Sender Name",
      address: "sender@server.com"
    },
    to: "", // Comma separated list or an array of recipients email addresses that will appear on the To: field
    cc: "", // Comma separated list or an array of recipients email addresses that will appear on the Cc: field
    bcc: "", // Comma separated list or an array of recipients email addresses that will appear on the Bcc: field
    subject: "AMP4EMAIL message example", // The subject of the email
    html: "", // The HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…'})
    attachments: [ // An array of attachment objects. Attachments can be used for embedding images as well.
      {
        filename: "", // filename to be reported as the name of the attached file. Use of unicode is allowed.
        content: "", // String, Buffer or a Stream contents for the attachment
        path: "", // path to the file if you want to stream the file instead of including it (better for larger attachments)
        href: "", // an URL to the file (data uris are allowed as well)
        httpHeaders: "", // optional HTTP headers to pass on with the href request, eg. {authorization: "bearer ..."}
        contentType: "", // optional content type for the attachment, if not set will be derived from the filename property
        contentDisposition: "", // optional content disposition type for the attachment, defaults to ‘attachment’
        cid: "", // optional content id for using inline images in HTML message source
        encoding: "", // If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: ‘base64’, ‘hex’, ‘binary’ etc. Useful if you want to use binary attachments in a JSON formatted email object.
        headers: "", // custom headers for the attachment node. Same usage as with message headers
        raw: "" // is an optional special value that overrides entire contents of current mime node including mime headers. Useful if you want to prepare node contents yourself
      }
    ],

    /* Routing options */
    sender: "", // An email address that will appear on the Sender: field (always prefer from if you’re not sure which one to use)
    replyTo: "", // An email address that will appear on the Reply-To: field
    inReplyTo: "", // The Message-ID this message is replying to
    references: "", // Message-ID list (an array or space separated string)
    envelope: "", // optional SMTP envelope, if auto generated envelope is not suitable (see SMTP envelope for details)

    /* Content options */
    attachDataUrls: "", // if true then convert data: images in the HTML content of this message to embedded attachments
    watchHtml: "", // Apple Watch specific HTML version of the message. Latest watches have no problems rendering text/html content so watchHtml is most probably never seen by the recipient
    amp: "", // AMP4EMAIL specific HTML version of the message, same usage as with text and html. See AMP example below for usage or this blogpost for sending and rendering
    icalEvent: {
      method: "", // optional method, case insensitive, defaults to ‘publish’. Other possible values would be ‘request’, ‘reply’, ‘cancel’ or any other valid calendar method listed in RFC5546. This should match the METHOD: value in calendar event file.
      filename: "", // optional filename, defaults to ‘invite.ics’
      content: "", // is the event file, it can be a string, a buffer, a stream
      path: "", // is an alternative for content to load the calendar data from a file
      href: "", // is an alternative for content to load the calendar data from an URL
      encoding: "" // defines optional content encoding, eg. ‘base64’ or ‘hex’. This only applies if the content is a string. By default an unicode string is assumed.
    }, // – iCalendar event to use as an alternative. See details here
    alternatives: [{/* same options as attachment object */}], // - An array of alternative text contents (in addition to text and html parts) (see Using alternative content for details)
    encoding: "", // - identifies encoding for text/html strings (defaults to ‘utf-8’, other values are ‘hex’ and ‘base64’)
    raw: "", // - existing MIME message to use instead of generating a new one. See details here
    textEncoding: "", // - force content-transfer-encoding for text values (either quoted-printable or base64). By default the best option is detected (for lots of ascii use quoted-printable, otherwise base64)

    /* Header options */
    priority: "normal", // Sets message importance headers - "high" | "normal" (default) | "low"
    headers: [{}], // An {object} or [array] of additional header fields (e.g. {“X-Key-Name”: “key value”} or [{key: “X-Key-Name”, value: “val1”}, {key: “X-Key-Name”, value: “val2”}]). Read more about custom headers here
    messageId: "", // optional Message-Id "value", random value will be generated if not set
    date: new Date(), // optional Date value, current UTC string will be used if not set
    list: "", // helper for setting List-* headers (see more here)

    /* Security options */
    disableFileAccess: false, // if true, then does not allow to use files as content. Use it when you want to use JSON data from untrusted source as the email. If an attachment or message node tries to fetch something from a file the sending returns an error. If this field is also set in the transport options, then the value in mail data is ignored
    disableUrlAccess: false // if true, then does not allow to use Urls as content. If this field is also set in the transport options, then the value in mail data is ignored
  })
  if (process.env.NODE_ENV === 'development') console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info))
}
