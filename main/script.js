var sidebarbutton = document.getElementById("sidebutton");
var leftsidebar = document.getElementById("leftside");
leftsidebar.style.marginTop = "-500px";
function move() {
  if (leftsidebar.style.marginTop == "-500px")
  leftsidebar.style.marginTop = "0px";
  else leftsidebar.style.marginTop = "-500px";
}