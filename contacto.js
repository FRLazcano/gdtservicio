document.getElementById("contactForm").addEventListener("submit",sendEmail);

function sendEmail(e){
  var params={
    from_name:document.getElementById("contactName").value,
    reply_to:document.getElementById("contactEmail").value,
    message:document.getElementById("contactMessage").value,
    subject: document.getElementById("contactSubject").value,
  }
  emailjs.send("service_vmji1c9","template_hfj02yn",params).then(function(res){
    alert('mensaje enviado correctamente')
  })
}
