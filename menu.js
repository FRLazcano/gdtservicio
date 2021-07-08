function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  for(let i=0; i<4; i++){
    var y = document.getElementById("titulo"+i);
    if (y.className === "titulo") {
      y.className += " responsive";
    } else {
      y.className = "titulo";
    }
  }
}
