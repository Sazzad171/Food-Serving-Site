var navFixedTop=document.getElementById("navbar"),navHumburger=document.getElementById("navHumburger");function scrollFunction(){900<document.body.scrollTop||900<document.documentElement.scrollTop?(navFixedTop.style.position="fixed",navFixedTop.style.top="0",navFixedTop.style.bottom="auto",navHumburger.style.position="fixed",navHumburger.style.top="18px",navHumburger.style.bottom="auto"):(navFixedTop.style.position="absolute",navFixedTop.style.top="auto",navFixedTop.style.bottom="0",navHumburger.style.position="absolute",navHumburger.style.bottom="18px",navHumburger.style.top="auto")}function showRightNav(){document.getElementById("showRightNav").style.right="0",document.getElementsByTagName("BODY")[0].style.overflowY="hidden",document.getElementById("darkOverlay").style.display="block"}function hideNav(){document.getElementById("showRightNav").style.right="-1000px",document.getElementsByTagName("BODY")[0].style.overflowY="visible",document.getElementById("darkOverlay").style.display="none"}function hideWithDark(){document.getElementById("showRightNav").style.right="-1000px",document.getElementsByTagName("BODY")[0].style.overflowY="visible",document.getElementById("darkOverlay").style.display="none"}window.onscroll=function(){scrollFunction()},jQuery(document).ready(function(e){e(".counter").counterUp({delay:10,time:1e3})});