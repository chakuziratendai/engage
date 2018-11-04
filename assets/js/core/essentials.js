/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ 

/*sticky logo */

var num = 1;
$('[id=logo]').attr("src","assets/img/logo-white.png");

$(window).scroll(function () { 
  num = $(window).scrollTop() / 12.8;
  
 if( parseInt(num) === num){
  
      $('[id=logo]').attr("src","assets/img/"+ logo-white +".jpg");}
  else{}
  
  if (num<1){
    $('[id=logo]').attr("src","assets/img/logo-white.png");
  }
    if (num>15){
    $('[id=logo]').attr("src","assets/img/logo-black.jpg");
      $("[id=logo]").css("position","absolute");
  }


});

/**/

$(window).scroll(function() {
    if ($(this).scrollTop() === 100) { // this refers to window
        document.getElementById("logo").src = "assets/img/logo-black.png";
    }
});

