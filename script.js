var nystories = document.querySelector("main").offsetTop;
window.onscroll = function () {
  if (window.pageYOffset > 0) {
    var opac = window.pageYOffset / nystories;
    console.log(opac);
    document.body.style.background =
      "linear-gradient(rgba(242, 29, 185, " +
      opac +
      "), rgba(64, 25, 89, " +
      opac +
      ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
  }
};
