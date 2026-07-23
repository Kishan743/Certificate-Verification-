const QRCode = require("qrcode");

const url = "https://certificate-verification-drab.vercel.app/";

QRCode.toFile(
  "qr.png",
  url,
  {
    width: 500,
    margin: 2
  },
  function (err) {
    if (err) throw err;
    console.log("QR Generated Successfully");
  }
);