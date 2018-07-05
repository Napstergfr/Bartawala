(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
$("#ans1").hide();
$("#ans2").hide();
$("#ans3").hide();
$("#ans4").hide();
$("#ans5").hide();
$("#ans6").hide();
$("#ans7").hide();
$("#ans8").hide();
$("#ans9").hide();
$("#ans10").hide();
$(".minus1").hide();
$(".minus2").hide();
$(".minus3").hide();
$(".minus4").hide();
$(".minus5").hide();
$(".minus6").hide();
$(".minus7").hide();
$(".minus8").hide();
$(".minus9").hide();
$(".minus10").hide();
    $(".faq-btn1").click(function(){
        $("#ans1").slideToggle();
        $(".plus1").toggle();
        $(".minus1").toggle();
        $(".ttle1, .minus1").toggleClass('active');
    });

    $(".faq-btn2").click(function(){
        $("#ans2").slideToggle();
        $(".plus2").toggle();
        $(".minus2").toggle();
        $(".ttle2, .minus2").toggleClass('active');
    });

    $(".faq-btn3").click(function(){
        $("#ans3").slideToggle();
        $(".plus3").toggle();
        $(".minus3").toggle();
        $(".ttle3, .minus3").toggleClass('active');
    });

     $(".faq-btn4").click(function(){
        $("#ans4").slideToggle();
        $(".plus4").toggle();
        $(".minus4").toggle();
        $(".ttle4, .minus4").toggleClass('active');
    }); 

     $(".faq-btn5").click(function(){
        $("#ans5").slideToggle();
        $(".plus5").toggle();
        $(".minus5").toggle();
        $(".ttle5, .minus5").toggleClass('active');
    });

     $(".faq-btn6").click(function(){
        $("#ans6").slideToggle();
        $(".plus6").toggle();
        $(".minus6").toggle();
        $(".ttle6, .minus6").toggleClass('active');
    });
      $(".faq-btn7").click(function(){
        $("#ans7").slideToggle();
        $(".plus7").toggle();
        $(".minus7").toggle();
        $(".ttle7, .minus7").toggleClass('active');
    });
        $(".faq-btn8").click(function(){
        $("#ans8").slideToggle();
        $(".plus8").toggle();
        $(".minus8").toggle();
        $(".ttle8, .minus8").toggleClass('active');
    });
          $(".faq-btn9").click(function(){
        $("#ans9").slideToggle();
        $(".plus9").toggle();
        $(".minus9").toggle();
        $(".ttle9, .minus9").toggleClass('active');
    });
            $(".faq-btn10").click(function(){
        $("#ans10").slideToggle();
        $(".plus10").toggle();
        $(".minus10").toggle();
        $(".ttle10, .minus10").toggleClass('active');
    });

