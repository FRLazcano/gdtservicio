var el=document.getElementById("mobile")

var test= new Hammer(el)
test.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
test.on('swipe',function(ev){
  alert(ev);
});
