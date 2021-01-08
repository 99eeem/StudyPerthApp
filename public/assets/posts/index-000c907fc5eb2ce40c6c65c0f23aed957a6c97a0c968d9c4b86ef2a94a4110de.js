

    document.addEventListener("turbolinks:load", function() {
     
      window.onload = function() {
      var first_items=document.querySelectorAll(".first-silde-items");
        var second_items = document.querySelectorAll(".second-silde-items");
        var third_items=document.querySelectorAll(".third-silde-items");
        var slide_index1 = 0;
        var slide_index2 = 0;
        var slide_index3=0;
      let kindimages=document.querySelectorAll(".type-image");
      let backimages=document.querySelectorAll(".back-image");
      let what_you_like=document.querySelector(".kinds-name h2");


         
    for (let i = 0; i < kindimages.length; i++) {
      kindimages[i].addEventListener("mouseover" ,function(){
        backimages[i].classList.add("show");
        what_you_like.style.display="none";
    
      })  
      kindimages[i].addEventListener("mouseleave" ,function(){
        backimages[i].classList.remove("show");
        what_you_like.style.display="block";
    
      })  

    }
  
      next_btn=document.getElementById("slide-next-button")
      previous_btn=document.getElementById("slide-previous-button")
      next_btn2=document.getElementById("slide-next-button2")
        previous_btn2 = document.getElementById("slide-previous-button2")
        next_btn3=document.getElementById("slide-next-button3")
      previous_btn3=document.getElementById("slide-previous-button3")
      
     
      const arrayChunk = ([...array], size = 1) => {
        return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
      }
     
      var first_each_three=arrayChunk(first_items, 3);
        var second_each_three = arrayChunk(second_items, 3);
        var third_each_three=arrayChunk(third_items, 3);
      for (let i = 0; i < second_each_three[slide_index2].length; i++) {
        second_each_three[slide_index2][i].style.display="block"
        
      }
    
      for (let i = 0; i < first_each_three[slide_index1].length; i++) {
        first_each_three[slide_index1][i].style.display="block"
        
        }
        for (let i = 0; i < third_each_three[slide_index3].length; i++) {
          third_each_three[slide_index3][i].style.display="block"
          
        }
     
  function next_page(slide_index,array_item){
  
    for (let i = 0; i < array_item[slide_index].length; i++) {
      array_item[slide_index][i].style.display = "none"
  
      
    }
    console.log(slide_index);
    if(slide_index >= array_item.length - 1){
       slide_index = 0;
    } else {
       slide_index++;;
    }
    for (let k = 0; k < array_item[slide_index].length; k++) {
      array_item[slide_index][k].style.display="block"
    }
  
  }
  function previous_page(slide_index,array_item){
  
    for (let i = 0; i <array_item[slide_index].length; i++) {
    array_item[slide_index][i].style.display="none"
     
    }
    console.log(slide_index);
    if(slide_index <= 0){
     slide_index=first_each_three.length-1
    } else {
     slide_index--;
    }
    for (let k = 0; k <array_item[slide_index].length; k++) {
    array_item[slide_index][k].style.display="block"  
    }
  
  }
  
  next_btn.addEventListener("click", function(){
    next_page(slide_index1, first_each_three)
    
  }
  )
  previous_btn.addEventListener("click", function(){
    previous_page(slide_index1, first_each_three);

  }
  )
  next_btn2.addEventListener("click", function(){
    next_page(slide_index2, second_each_three)
  }
  )
  previous_btn2.addEventListener("click", function(){
    previous_page(slide_index2, second_each_three);
  }
        )
  next_btn3.addEventListener("click", function(){
    next_page(slide_index3, third_each_three)
  }
  )
  previous_btn3.addEventListener("click", function(){
    previous_page(slide_index3, third_each_three);
  }
        )
}
    });








