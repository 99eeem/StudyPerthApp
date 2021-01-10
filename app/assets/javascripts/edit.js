
  document.addEventListener("turbolinks:load", function() {

  $(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
    $('#img_prev').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
        }
    }
    $("#user_img").change(function(){
        readURL(this);
    });
  });
  const bar=document.querySelectorAll(".menu div");
  const menu = document.querySelector(".menu");
  var menu_cover = document.querySelector(".menu-cover");
  var menu_info = document.querySelector(".menu-info");

        menu.addEventListener("click", function(){
          menu.classList.toggle("active")
          menu_cover.classList.toggle("active")
          menu_info.classList.toggle("active")
          document.getElementById("body").classList.toggle("active");




        })
}
  )

  