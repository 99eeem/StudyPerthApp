document.addEventListener("turbolinks:load", function () {
  window.onload = function () {
    document.getElementById("move-to-signup").addEventListener("click", function () {
      document.getElementById("log-in").classList.remove("show-up");
      document.getElementById("sign-up").classList.add("show-up");


    })
    document.getElementById("move-to-login").addEventListener("click", function () {
      document.getElementById("log-in").classList.add("show-up");
      document.getElementById("sign-up").classList.remove("show-up");
   
    })
    console.log(document.getElementById("move-to-signup"));
  }
});