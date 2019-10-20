var section = document.querySelector("section").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / section);
 var opacR = opac.toFixed(2);
    // console.log(opacR);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opacR + ") 5%, rgba(255, 255, 255, " + opacR * 2 + ") 50%, rgba(255, 255, 255, 1) 50%), url(./imgs/main.jpg) no-repeat";
  document.body.style.backgroundPosition = "top";
  }
}