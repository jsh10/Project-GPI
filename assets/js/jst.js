window.addEventListener("load", function(){
  const preloader = document.querySelector("#preloader");
  setTimeout(function() {
    preloader.classList.add("hide-preloader");
  }, 5000);
});