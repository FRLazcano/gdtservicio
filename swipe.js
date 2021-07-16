var current=0;
const slides=[document.getElementById("niv1"),document.getElementById("niv2"),document.getElementById("niv3")];
const upperSlider=[document.getElementById("s1"),document.getElementById("s2"),document.getElementById("s3")]
const lowerSlider=[document.getElementById("s21"),document.getElementById("s22"),document.getElementById("s23")]

slides[1].style.display="none"
slides[2].style.display="none"

lowerSlider[1].style.background="#2b2b2b"
lowerSlider[2].style.background="#2b2b2b"

upperSlider[1].style.background="#2b2b2b"
upperSlider[2].style.background="#2b2b2b"

var slideshow= new Hammer(document.getElementById("mobile"))
slideshow.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
slideshow.on('swipe',function(ev){

  slides[current].style.display="none"
  upperSlider[current].style.background="#2b2b2b"
  lowerSlider[current].style.background="#2b2b2b"

  if(ev.direction==2){
    current+=1;
  }else{
    current-=1;
  }
  current=(current+3)%3;
  slides[current].style.display="inherit"
  upperSlider[current].style.background="#e55300"
  lowerSlider[current].style.background="#e55300"
});
