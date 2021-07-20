document.getElementById("contactForm").addEventListener("submit",sendEmail);

function sendEmail(e){
  Email.send({
    Host:"smtp.gmail.com",
    Username: "frlazcano2000@gmail.com",
    Password: "5k0G2CJgK0CB",
    To: "frlazcano2000@gmail.com",
    from: "frlazcano2000@gmail.com",
    Subject: "Test",
    Body: "Test",
  }).then(function (message) {
          alert("mail sent successfully")
    });
}
