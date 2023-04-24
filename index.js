const express = require("express");
var cors = require("cors");
const sendNotificationToFCMtoken = require("./utils/firebase-pushnotifications");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

//server and routers
app.listen(5000, () => {
  console.log("app is listening on port 5000....");
});

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.post("/sendPushNotifications", (req, res) => {
  const { fcmToken, title, body } = req.body;

  try {
    sendNotificationToFCMtoken(fcmToken, title, body);
    res.status(201).json({ msg: "Notification sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
});
