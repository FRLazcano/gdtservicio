var current=0;
const slides=[document.getElementById("niv1"),document.getElementById("niv2"),document.getElementById("niv3")];
slides[1].style.display="none"
slides[2].style.display="none"
var slideshow= new Hammer(document.getElementById("mobile"))
slideshow.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
slideshow.on('swipe',function(ev){
  if(ev.direction==2){
    slides[current].style.display="none"
    current+=1;
    slides[current].style.display="inherit"
  }else{
    slides[current].style.display="none"
    current-=1;
    slides[current].style.display="inherit"
  }
});
