//全体に黒のバックグラウンドカラーを付けて編集ホォームを表示
//making black color background image and show the edit form
document.addEventListener("turbolinks:load", function () {
  var edit_form = document.getElementById("edit-form");
  var edit_button = document.querySelector(".edit-button");
  edit_button.addEventListener("click", function () {
    edit_form.style.transform = "translateX(-50%) translateY(0)";edit_form.style.visibility = "visible";


    document.getElementById("mask").style.height = "100%";
    document.getElementById("mask").style.visibility = "visible";
  })
  document.querySelector(".btn-info").addEventListener("click", function () {
    edit_form.style.transform = "translateX(-50%) translateY(-700px)";
    edit_form.style.visibility = "hidden";
    document.getElementById("mask").style.height = "0";
    document.getElementById("mask").style.visibility = "hidden";
  })
  
});
