const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.post("/checkout", (req, res) => {
  const { cartItems, name, email, phNumber, address, city, zip,selectedSize, totalPrice } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "alijhoon0@gmail.com", 
      pass: "hrtb kish iflp exiy", 
    },
  });

  let recipients = `${email}, infoklaa63@gmail.com`;

  let mailOptions = {
    from: '"KLAA STUDIO" <alijhoon0@gmail.com>',
    to: recipients, 
    subject: "New Order Checkout From KLAA STUDIO",
    text: `
      Name: ${name}
      Email: ${email}
      Contact: ${phNumber}
      City: ${city}
      Zip Code: ${zip}
      Address: ${address}
      Total Price: Rs. ${totalPrice.toFixed(2)}
      Cart Items:
      ${cartItems.map(item => 
        `${item.title} - Rs. ${item.price} - Size: ${item.selectedSize || 'Not selected'}`
      ).join("\n")}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error);
    }
    res.status(200).send("Email sent successfully: " + info.messageId);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
