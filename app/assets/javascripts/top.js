document.addEventListener("turbolinks:load", function () {

  window.onload = function () {
    //these are variables for making posts slide show
    //スライドショーのための変数を定義
    var first_items = document.querySelectorAll(".first-silde-items");
    var second_items = document.querySelectorAll(".second-silde-items");
    var third_items = document.querySelectorAll(".third-silde-items");
    var slide_index1 = 0;
    var slide_index2 = 0;
    var slide_index3 = 0;
    let kindimages = document.querySelectorAll(".type-image");
    let backimages = document.querySelectorAll(".back-image");
    let what_you_like = document.querySelector(".kinds-name h2");



    /* for (let i = 0; i < kindimages.length; i++) {
       kindimages[i].addEventListener("mouseover" ,function(){
         backimages[i].classList.add("show");
         what_you_like.style.display="none";

        })
        kindimages[i].addEventListener("mouseleave" ,function(){
          backimages[i].classList.remove("show");
          what_you_like.style.display="block";

        })

      }*/

    next_btn = document.getElementById("slide-next-button")
    previous_btn = document.getElementById("slide-previous-button")
    next_btn2 = document.getElementById("slide-next-button2")
    previous_btn2 = document.getElementById("slide-previous-button2")
    next_btn3 = document.getElementById("slide-next-button3")
    previous_btn3 = document.getElementById("slide-previous-button3")



    //Making a function that arrays can split into five each
    //配列を5個ごとに区切るための関数
    const arrayChunk = ([...array], size = 1) => {
      return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
    }

    var first_each_three = arrayChunk(first_items, 5);
    var second_each_three = arrayChunk(second_items, 5);
    var third_each_three = arrayChunk(third_items, 5);

    for (let i = 0; i < second_each_three[slide_index2].length; i++) {
      second_each_three[slide_index2][i].style.display = "block"

    }

    for (let i = 0; i < first_each_three[slide_index1].length; i++) {
      first_each_three[slide_index1][i].style.display = "block"

    }

    //making arrays that add class name for grid function
    //gridで見出しを作るための関数
    function main_post(array) {
      for (let i = 0; i < array.length; i++) {
        if (i == 0 || (i % 5) == 0) {
          array[i].classList.add("biggest-area")

        }
      }
    }
    console.log(first_items);
    main_post(first_items);
    main_post(second_items);
    main_post(third_items);

    //these function are for turing slide shows next
    //次のスライドに動かす関数

    function next_page(array_item) {

      for (let i = 0; i < array_item[slide_index].length; i++) {
        array_item[slide_inde][i].style.display = "none"


      }
      if (slide_index >= array_item.length - 1) {
        slide_index = 0;
      } else {
        slide_index++;;
      }
      for (let k = 0; k < array_item[slide_index].length; k++) {
        array_item[slide_index][k].style.display = "block"
      }

    }

    function previous_page(slide_index, array_item) {

      for (let i = 0; i < array_item[slide_index].length; i++) {
        array_item[slide_index][i].style.display = "none"

      }
      console.log(slide_index);
      if (slide_index <= 0) {
        slide_index = first_each_three.length - 1
      } else {
        slide_index--;
      }
      for (let k = 0; k < array_item[slide_index].length; k++) {
        array_item[slide_index][k].style.display = "block"
      }

    }

    next_btn.addEventListener("click", function () {
      for (let i = 0; i < first_each_three[slide_index1].length; i++) {
        first_each_three[slide_index1][i].style.display = "none"
      }
      if (slide_index1 >= first_each_three.length - 1) {
        slide_index1 = 0;
      } else {
        slide_index1++;
      }
      for (let k = 0; k < first_each_three[slide_index1].length; k++) {
        first_each_three[slide_index1][k].style.display = "block"
      }
    })
    previous_btn.addEventListener("click", function () {
      for (let i = 0; i < first_each_three[slide_index1].length; i++) {
        first_each_three[slide_index1][i].style.display = "none"

      }
      if (slide_index1 <= 0) {
        slide_index1 = first_each_three.length - 1
      } else {
        slide_index1--;
      }
      for (let k = 0; k < first_each_three[slide_index1].length; k++) {
        first_each_three[slide_index1][k].style.display = "block"
      }

    })
    next_btn2.addEventListener("click", function () {
      for (let i = 0; i < second_each_three[slide_index2].length; i++) {
        second_each_three[slide_index2][i].style.display = "none"
      }
      if (slide_index2 >= second_each_three.length - 1) {
        slide_index2 = 0;
      } else {
        slide_index2++;
      }
      for (let k = 0; k < second_each_three[slide_index2].length; k++) {
        second_each_three[slide_index2][k].style.display = "block"
      }
    })
    previous_btn2.addEventListener("click", function () {
      for (let i = 0; i < second_each_three[slide_index2].length; i++) {
        second_each_three[slide_index2][i].style.display = "none"

      }
      if (slide_index2 <= 0) {
        slide_index2 = second_each_three.length - 1
      } else {
        slide_index2--;
      }
      for (let k = 0; k < second_each_three[slide_index2].length; k++) {
        second_each_three[slide_index2][k].style.display = "block"
      }
    })
    next_btn3.addEventListener("click", function () {
      for (let i = 0; i < third_each_three[slide_index3].length; i++) {
        third_each_three[slide_index3][i].style.display = "none"
      }
      if (slide_index3 >= third_each_three.length - 1) {
        slide_index3 = 0;
      } else {
        slide_index3++;
      }
      for (let k = 0; k < third_each_three[slide_index3].length; k++) {
        third_each_three[slide_index3][k].style.display = "block"
      }
    })
    previous_btn3.addEventListener("click", function () {
      for (let i = 0; i < third_each_three[slide_index3].length; i++) {
        third_each_three[slide_index3][i].style.display = "none"

      }
      if (slide_index3 <= 0) {
        slide_index3 = third_each_three.length - 1
      } else {
        slide_index3--;
      }
      for (let k = 0; k < third_each_three[slide_index3].length; k++) {
        third_each_three[slide_index3][k].style.display = "block"
      }
    })


    //The manu tab function when a screen is adjusting for a smar phone
    //フレキシブルデザインのためのタブ機能
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




    var MovingItems = document.querySelectorAll(".update-new");
    console.log(MovingItems);

    var moving_images = new Array();
    moving_images[0] = document.querySelector(".first-slide-items");
    moving_images[1] = document.querySelectorAll(".second-slide-items");







    for (let i = 0; i < MovingItems.length; i++) {
      document.addEventListener("scroll", function () {

        var GetDistance = MovingItems[i].getBoundingClientRect().top + (MovingItems[i].clientHeight * 0.5);

        if (window.innerHeight > GetDistance) {
          MovingItems[i].classList.add("move");


        }
      }

      )

    }
  }

});
