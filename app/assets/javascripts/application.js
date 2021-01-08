// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require popper
//= require bootstrap
//= require jquery_ujs
//=require turbolinks
//= require gmaps/google
//require_tree .

  document.addEventListener("turbolinks:load", function() {
 var drop_down=document.querySelector(".drop-down");
 drop_down.addEventListener("click", function(){
   drop_down.nextElementSibling.classList.toggle("show")
 })
 let flash=document.querySelector(".flash")
 var flash_text=document.querySelector(".flash-text")
var disable_flash= function(){
  flash.style.height="0px"
  flash_text.style.transform="translateY(-40px)"



}
    setTimeout(disable_flash, 3000);

}
  )
