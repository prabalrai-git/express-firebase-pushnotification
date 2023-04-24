


    var FCM = require('fcm-node');
    var serverKey =
      "AAAAiQwYyJc:APA91bHk7ok4QhaqRiOx2Fr457eQeYaHJYwBrZCbt30ElTtQQF-QNCcUtC8r7ptTjARmWEX-QCzXC38BMM1XeMgEfP1i8NoxDpMYU0rrNsmkw_-0RrZ-AfUecgj3OvPvanUpWsIABMLi";
    var fcm = new FCM(serverKey);

    var message = {
      to: "fi41ihcSRBqOcmnYjnK3Pe:APA91bHTPXxG_g46585viVfSVBl1UbZhXpnhfOGNgxvhDiitjaY6cC1-C8JAX5DqnBEzRwHUbmQiXV6qsZILVaZnjUSK-vLVo1GfDThKSCirWVTOhEPOepuG2NCwP7_Dw4jD7on7RO0T",
      notification: {
        title: "NotifcatioTestAPP",
        body: '{"Message from node js app"}',
      },

      data: {
        //you can send only notification or only data(or include both)
        title: "ok cdfsdsdfsd",
        body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}',
      },
    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });
