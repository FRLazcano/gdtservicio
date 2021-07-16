function load(){
  var opts = {
      auto : false,
      fullScreen : false,
      swipe : true
  };
  makeBSS('.num1', opts);
  setInterval(setText,100)
}
