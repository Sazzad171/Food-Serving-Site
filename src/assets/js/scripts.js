// nav top fixed
var navFixedTop = document.getElementById("navbar");
var navHumburger = document.getElementById("navHumburger");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    navFixedTop.style.position = "fixed";
    navFixedTop.style.top = "0";
    navFixedTop.style.bottom = "auto";
    navHumburger.style.position = "fixed";
    navHumburger.style.top = "18px";
    navHumburger.style.bottom = "auto";
  }
  else {
    navFixedTop.style.position = "absolute";
    navFixedTop.style.top = "auto";
    navFixedTop.style.bottom = "0";
    navHumburger.style.position = "absolute";
    navHumburger.style.bottom = "18px";
    navHumburger.style.top = "auto";
  }
}
// counterup js
jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});
// show right nav
function showRightNav() {
  var a = document.getElementById("showRightNav");
  a.style.right = "0"
  document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
  document.getElementById("darkOverlay").style.display = "block"
}
// hide nav
function hideNav() {
  var b = document.getElementById("showRightNav");
  b.style.right = "-1000px";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'visible';
  document.getElementById("darkOverlay").style.display = "none"
}
function hideWithDark()  {
  var b = document.getElementById("showRightNav");
  b.style.right = "-1000px";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'visible';
  document.getElementById("darkOverlay").style.display = "none"
}