const admin = require("firebase-admin");

const serviceAccount = require("../luniva360-firebase-adminsdk-r02rx-f5611b26c7.json");
// const image = require("../assets/NRL.png");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotificationToFCMtoken = (registrationToken, title, body) => {
  //   const message = {
  //     notification: {
  //       title: title,
  //       body: body,
  //       icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTpxAqOm7RfW68FToo0wVG-ZCv3Ih5xy0DwnhW7qYvQ&s",
  //     },
  //     token: registrationToken,
  //   };
  const message = {
    notification: {
      title: title,
      body: body,
      // imageUrl: "http://192.168.100.70:5000/NRL.png", // replace with your image URL
    },

    token: registrationToken,
  };
  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Successfully sent notification:", response);
    })
    .catch((error) => {
      console.log("Error sending notification:", error);
    });
};
// sendNotificationToFCMtoken(
//   "fi41ihcSRBqOcmnYjnK3Pe:APA91bHTPXxG_g46585viVfSVBl1UbZhXpnhfOGNgxvhDiitjaY6cC1-C8JAX5DqnBEzRwHUbmQiXV6qsZILVaZnjUSK-vLVo1GfDThKSCirWVTOhEPOepuG2NCwP7_Dw4jD7on7RO0T",
//   "Hello, world!",
//   "This is a notification from node."
// );

module.exports = sendNotificationToFCMtoken;
