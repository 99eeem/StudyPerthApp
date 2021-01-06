document.addEventListener("turbolinks:load", function () {
  window.onload = function () {
    var address = document.getElementById("address").textContent;
    var placesList = [];
    //All of Maps function is working through initMap function
    //initMapを通してすべてのマップ関連を動かしいる
    function initMap() {
      //show the normal map
      //プレーンのマップを表示する
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
          lat: 35.665498,
          lng: 139.75964
        }
      });
    }
    var map;
    var geocoder;
    let placearray = [];
    var marker;
    //here is defining  variables that are used as creating maps section
    //後でPlace APIを使い為の変数定義
    var marker_index = 0;
    var place_index = 0;
    let googleArray_0 = [];
    let googleArray_1 = [];
    let googleArray_2 = [];
    let googleArray_3 = [];
    let googleArray_4 = [];
    var recommended_place = document.getElementById("recommended-places");
    var ul_div = document.getElementById("recommended-list");

    function initMap() {
      //get accurate location which is used for Place API
      //正確な位置情報の取得
      geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': address
      }, function (results, status) { // 結果
        if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
          var latLng = results[0].geometry.location;
          map = new google.maps.Map(document.getElementById('map'), {
            center: results[0].geometry.location, // 地図の中心を指定
            zoom: 14 // 地図のズームを指定
          });
          marker = new google.maps.Marker({
            position: results[0].geometry.location, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
          });
          startNearbySearch(latLng)
        } else { // 失敗した場合
          alert(status);
        }
      });

      function startNearbySearch(latLng) {
        //making PlaceServiceInstance
        //PlacesServiceインスタンス生成
        var service = new google.maps.places.PlacesService(map);
        //searching the following details of an location below
        //周辺検索
        service.nearbySearch({
            location: latLng,
            radius: 2000,
            type: ["restaurant", "tourist_attraction"],
            key: ["japanese", "food"],
            language: 'ja'
          },
          display_result
        );
      }
      /*
       周辺検索の結果表示
       ※nearbySearchのコールバック関数
        results : 検索結果
        status ： 実行結果ステータス
      */
      function display_result(results, status) {
        //this function pickes up the places asked information above
        //上記で指定した情報を取得する
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          //検索結果をplacesList配列に連結
          placesList = placesList.concat(results);
          var place_details;
          //make placesList array in descening order of the price
          //評価が高い順に変更
          for (let r = 0; r < placesList.length; r++) {
            if (placesList[r].rating) {
              placesList[r].rating == -1;
            }
          }
          placesList.sort(function (a, b) {
            if (a.rating > b.rating) return -1;
            if (a.rating < b.rating) return 1;
            return 0;
          });
          var callback = function (results, status) {
            place_details = results;
          };
          for (let i = 0; i < 4; i++) {
            //The function can get more details of an location and pick up 4 out of many
            //より詳しい場所情報の取得、評価が高い順から4つ
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: placesList[i].place_id
            }, function (place, status) {
              place_details = place;
              //Resulets should have website url and photos, otherwise the result is excluded
              //ウェブサイトと写真を持っていないものは結果から除外
              if (place_details.website == null) return;
              if (place_details.photos == null) return;
              var li_div = document.createElement("li");
              marker = new google.maps.Marker({
                position: placesList[i].geometry.location,
                map: map,
                icon: `/${marker_index}.png`
              });
              marker_index++;
              place_index++;
              li_div.setAttribute("class", "places-each-item");
              ul_div.appendChild(li_div);

              var name_div = document.createElement("div");
              name_div.setAttribute("class", "name-show");
              li_div.appendChild(name_div);
              var num_div = document.createElement("p");
              num_div.setAttribute("class", "place-num");
              num_div.innerHTML = place_details.name;
              num_div.innerHTML = `【${place_index}】`
              name_div.appendChild(num_div);
              var h4_div = document.createElement("h4");
              h4_div.setAttribute("class", "places-name");
              h4_div.innerHTML = place_details.name;
              name_div.appendChild(h4_div)

              var url_div = document.createElement("div");
              url_div.setAttribute("class", "url-show");
              li_div.appendChild(url_div);
              var a_div = document.createElement("a");
              a_div.setAttribute("href", place_details.website);
              li_div.appendChild(a_div);
              var search_div = document.createElement("i");
              search_div.setAttribute("class", "fas fa-search-plus");
              var span_div = document.createElement("span");
              span_div.innerHTML = "WebSiteを見る";
              a_div.appendChild(span_div);
              a_div.appendChild(search_div);


              var rating_div = document.createElement("p");
              rating_div.setAttribute("class", "star-value")
              rating_div.innerHTML = `評価:${place_details.rating}`;
              url_div.appendChild(rating_div);
              url_div.appendChild(a_div);



              var i_next_div = document.createElement("i");
              i_next_div.setAttribute("class", `fas fa-angle-right fa-3x front${i}`);
              i_previous_div = document.createElement("i");
              i_previous_div.setAttribute("class", `fas fa-angle-left fa-3x back${i}`);
              slide_div = document.createElement("div");
              slide_div.setAttribute("class", "places-slide");
              li_div.appendChild(slide_div);
              slide_div.appendChild(i_next_div);
              slide_div.appendChild(i_previous_div);

              //making src information from Place API accociate with img src
              //Place APIから取得したデータをimg srcに結び付ける
              var index = 0;
              var img_div = document.createElement("img");
              img_div.setAttribute("src", place_details.photos[index].getUrl({
                'maxWidth': 1100,
                'maxHeight': 1100
              }));
              img_div.setAttribute("class", `img${i}`)
              slide_div.appendChild(img_div);
              //defining diffrent variables depending on loop and put photos array
              //ループによって違う変数を定義、変数の中にイメージの配列を代入
              for (let l = 1; l < place_details.photos.length; l++) {
                eval("googleArray_" + i + ".push('" + place_details.photos[l].getUrl({
                  'maxWidth': 1100,
                  'maxHeight': 1100
                }) + "')");
              }
              //slide image function
              //スライドショー
              function zero_slide() {
                document.querySelector(".img0").src = googleArray_0[index];
                if (index <= place_details.photos.length - 1) {
                  index = index + 1;
                } else {
                  index = 0;
                }
              }

              function first_slide() {
                document.querySelector(".img1").src = googleArray_1[index];
                if (index <= place_details.photos.length - 1) {
                  index = index + 1;
                } else {
                  index = 0;
                }
              }

              function second_slide() {
                document.querySelector(".img2").src = googleArray_2[index];
                if (index <= place_details.photos.length - 1) {
                  index = index + 1;
                } else {
                  index = 0;
                }
              }

              function third_slide() {
                document.querySelector(".img3").src = googleArray_3[index];
                if (index <= place_details.photos.length - 1) {
                  index = index + 1;
                } else {
                  index = 0;
                }
              }
              if (i === 0) {
                document.querySelector(".front0").addEventListener("click", zero_slide);
              } else if (i === 1) {
                document.querySelector(".front1").addEventListener("click", first_slide);
              } else if (i === 2) {
                document.querySelector(".front2").addEventListener("click", second_slide);
              } else {
                document.querySelector(".front3").addEventListener("click", third_slide);
              }

              function zero_back_slide() {
                document.querySelector(".img0").src = googleArray_0[index];
                if (index >= 0) {
                  index = index - 1;
                } else {
                  index = place_details.photos.length - 1;
                }
              }

              function first_back_slide() {
                document.querySelector(".img1").src = googleArray_1[index];
                if (index >= 0) {
                  index = index - 1;
                } else {
                  index = place_details.photos.length - 1;
                }
              }

              function third_back_slide() {
                document.querySelector(".img2").src = googleArray_2[index];
                if (index >= 0) {
                  index = index - 1;
                } else {
                  index = place_details.photos.length - 1;
                }
              }

              function third_back_slide() {
                document.querySelector(".img3").src = googleArray_3[index];
                if (index >= 0) {
                  index = index - 1;
                } else {
                  index = place_details.photos.length - 1;
                }
              }
              if (i === 0) {
                document.querySelector(".back0").addEventListener("click", zero_back_slide);
              } else if (i === 1) {
                document.querySelector(".back1").addEventListener("click", first_back_slide);
              } else if (i === 2) {
                document.querySelector(".back2").addEventListener("click", third_back_slide);
              } else {
                document.querySelector(".back3").addEventListener("click", third_back_slide);
              }
            });
          }
          callback();
        }
      }
    }
    initMap();
    //クリックでサブイメージと写真を入れ替える
    //The function that swich a main image from subimages by clicking
    var main_image = document.querySelector(".main-image");
    var preview_images = document.querySelectorAll(".preview-image");
    for (let i = 0; i < preview_images.length; i++) {
      preview_images[i].addEventListener("click", function () {
        for (let k = 0; k < preview_images.length; k++) {
          preview_images[k].style.opacity = 1;
        }
        preview_images_src = preview_images[i].getAttribute("src");
        main_image.src = preview_images_src;
        preview_images[i].style.opacity = 0.5;

      })
    }
    //here is function that visitor can switch comments and questions
    //コメントと質問のタブを切り替えられる機能
    var tabs = document.querySelectorAll(".inquire-box li");
    var contents = document.querySelectorAll(".inquire-container >li");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        for (let k = 0; k < tabs.length; k++) {
          tabs[k].classList.remove("color");
        }
        for (let s = 0; s < contents.length; s++) {
          contents[s].classList.remove("tag");

        }
        tabs[i].classList.add("color");
        contents[i].classList.add("tag");
      })

    }
    //The function that people can see comments more
    //コメント欄のロールアップとロールダウン
    var more = document.querySelectorAll(".more");
    var less = document.querySelectorAll(".less");
    for (let i = 0; i < more.length; i++) {
      more[i].addEventListener("click", function () {
        more[i].style.display = "none";
        less[i].style.display = "block";
      })
      less[i].addEventListener("click", function () {
        more[i].style.display = "block";
        less[i].style.display = "none";
      })



    }
    console.log(more);


  }
});
