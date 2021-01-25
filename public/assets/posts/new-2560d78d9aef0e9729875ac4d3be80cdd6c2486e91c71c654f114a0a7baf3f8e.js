document.addEventListener("turbolinks:load", function () {

  $(function () {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        for (let i = 0; i < input.files.length; i++) {

          reader.onload = function () {
            $('.img_prev' [i]).attr('src', i.target.result);
          }

          reader.readAsDataURL(input.files[i]);


        }

      }
    }
    $("#user_img").change(function () {
      readURL(this);
    });
  });
  const bar = document.querySelectorAll(".menu div");
  const menu = document.querySelector(".menu");
  var menu_cover = document.querySelector(".menu-cover");
  var menu_info = document.querySelector(".menu-info");

  menu.addEventListener("click", function () {
    menu.classList.toggle("active")
    menu_cover.classList.toggle("active")
    menu_info.classList.toggle("active")
    document.getElementById("body").classList.toggle("active");





  })
  var newpage_nav = document.querySelectorAll(".newpage-nav");
  for (let i = 0; i < newpage_nav.length; i++) {

    newpage_nav[i].classList.add("here");

  }
});
