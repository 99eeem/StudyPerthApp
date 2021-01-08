
  document.addEventListener("turbolinks:load", function() {
   
    $(function() {
      function readURL(input) {
          if (input.files && input.files[0]) {
          var reader = new FileReader();
          for (let i = 0; i < input.files.length; i++) {
           
            reader.onload = function(){
        $('.img_prev'[i]).attr('src', i.target.result);
            }
              
              reader.readAsDataURL(input.files[i]);
              
           
            }
            
          }
      }
      $("#user_img").change(function(){
          readURL(this);
      });
    });
  }
    );
