/*
* Scroll 관련 스크립트
*
* JS Dependencies
* - ScrollMagic: http://scrollmagic.io
*    - ScrollMagic.min.js
*    - animation.gsap.min.js
*    - debug.addIndicators.min.js
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

// ScrollMagic 컨트롤러
var controller = new ScrollMagic.Controller();

window.addEventListener('load', initScrollMagic);

function initScrollMagic() {
  // Scene 샘플
  // var scene = new ScrollMagic.Scene(
  //   {
  //     triggerElement: '#trigger,
  //     triggerHook: 0, // 'onLeave' 0, 'onCenter' 0.5, 'onEnter' 1
  //     duration: 100, // '100%' = screen height
  //     offset: -100,
  //   })
  //   .setTween('#target', 1, {width: 100, ease: Linear.easeNone})
  //   .setPin('#sample')
  //   .setClassToggle('#sample', 'active')
  //   .addTo(controller);

  // 4C 인재 텍스트 색상 채우기
  var $person4c = $('#person-4c-color');
  var $$person4cText = $person4c.find('.color');
  var p4cTimeline = new TimelineMax()
    .staggerTo($$person4cText, .8, {width: '100%'}, .8);
  new ScrollMagic.Scene(
    {
      triggerElement: $person4c[0],
    })
    .setTween(p4cTimeline)
    .addTo(controller);



  // 로버트의 말 텍스트 색상 채우기
  var $robertQuote = $('#robert-quote');
  var $robertQuoteText = $robertQuote.find('.color');
  var rqTimeline = new TimelineMax()
    .staggerTo($robertQuoteText, .8, {width: '100%'}, .8);
  new ScrollMagic.Scene(
    {
      triggerElement: $robertQuote[0]
    })
    .setTween(rqTimeline)
    .addTo(controller);


  scrollToSection();
}

// Section Nav 링크 스크롤링
function scrollToSection () {
  $('.section-nav a, .brand-top-intro .link, .brand-identity a').on('click', function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var $id = $(id);
    var newpos;

    if ($id.length > 0) {
      newpos = $id.offset().top - $('#roof').outerHeight(); // header가 내용을 가리지 않게 위치 조정

      $('html, body').stop().animate({scrollTop: newpos}, 500);

      // if supported by the browser we can even update the URL.
      // if (window.history && window.history.pushState) {
      //   history.pushState('', document.title, id);
      // }
    }
  });
}

$(function(){

});
