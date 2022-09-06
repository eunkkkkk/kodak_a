$(document).ready(function(){
    $('#keyword .list li').click(function(){
        $('#keyword .list').addClass('act');
        $(this).addClass('on').siblings().removeClass('on')
    })
    // var count = 0;
    // setInterval(function(){        
    //     count %= $('#keyword .list li').length;
    //     $('#keyword .list li').eq(count).click(); 
    //     count++;
    // }, 2000)
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > 0 ){
         $('body').addClass('scroll')
        }else{
         $('body').removeClass('scroll')
        }
    })
})
var ww = $(window).width();
if (ww < 1280) {
  mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    simulateTouch: true,
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  });
} else if (ww >= 1280) {
  // swiper 호출 안함
}