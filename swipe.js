
var test=Hammer(document.getElementById("mobile"))
test.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
test.on('swipe',function(ev){
  alert(ev);
});
