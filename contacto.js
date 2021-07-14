document.getElementById("contactForm").addEventListener("submit",sendEmail);

function sendEmail(e){
  Email.send({
    Host:"smtp.gmail.com",
    Username: "frlazcano2000@gmail.com",
    Password: "5k0G2CJgK0CB",
    To: "a01366080@itesm.mx",
    from: "frlazcano2000@gmail.com",
    Subject: "Test",
    Body: "Test",
  }).then(
    alert('email enviado')
  );
}
