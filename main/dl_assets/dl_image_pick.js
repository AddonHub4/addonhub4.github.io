var sidebarbutton = document.getElementById("sidebutton");
var leftsidebar = document.getElementById("leftside");
leftsidebar.style.marginLeft = "-14%";
function move() {
  if (leftsidebar.style.marginLeft == "-14%") 
  leftsidebar.style.marginLeft = "0%";
  else leftsidebar.style.marginLeft = "-14%";
}

var extern = document.getElementsByClassName("imgsel")[0].src;
document.getElementById("imagedisplay").src = extern;
function selectextraimage(element) {
document.getElementById('imagedisplay').src = element;
}