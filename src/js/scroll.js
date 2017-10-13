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

// // ScrollMagic 컨트롤러
var controller = new ScrollMagic.Controller();

// window.addEventListener('load', initScrollMagic);

// function initScrollMagic() {
//   // 4C 인재 텍스트 색상 채우기
//   var $person4c = $('#person-4c-color');
//   new ScrollMagic.Scene(
//     {
//       triggerElement: $person4c[0],
//       offset: -50,
//     })
//     .setTween($person4c, .8, {width: '100%', ease: Linear.easeNone})
//     .addTo(controller);

//   // 로버트의 말 텍스트 색상 채우기
//   var $robertQuote = $('#robert-quote');
//   var $robertQuoteText = $robertQuote.find('.color');
//   var rqTimeline = new TimelineMax()
//     .to($robertQuoteText.eq(0), .8, {width: '100%'})
//     .to($robertQuoteText.eq(1), 1.0, {width: '100%'})
//     .to($robertQuoteText.eq(2), 1.5, {width: '100%'});
//   new ScrollMagic.Scene(
//     {
//       triggerElement: $robertQuote[0]
//     })
//     .setTween(rqTimeline)
//     .addTo(controller);

  // video
  var $video1 = $('#video1');
  var $video2 = $('#video2');
  var $video3 = $('#video3');
  var $video4 = $('#video4');
  var $video5 = $('#video5');

  $video1.find('video').attr({
    'src': 'http://cf.c.ooyala.com/ZoYXUwZDE6-emQJWei9s1vfHjU8Kb9Cg/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

  $video2.find('video').attr({
    'src': 'http://cf.c.ooyala.com/xkYXUwZDE6lP0nn6dZ62uqH_OmG-sEJ6/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

   $video3.find('video').attr({
    'src': 'http://cf.c.ooyala.com/M4aXYwZDE6EA_PCboH7mBcI6zEpCbm_d/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //카나브 신약
  
   $video4.find('video').attr({
    'src': 'http://cf.c.ooyala.com/V4anYwZDE6YQ7f3Go8QxokuUgalQKH0L/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //겔포스 수사반장 2편
  
   $video5.find('video').attr({
    'src': 'http://cf.c.ooyala.com/d5aXYwZDE6Pj8CH-O-8bARx9OvW9NvXF/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //겔포스 수사반장 1편
  

  // scroll auto play
  new ScrollMagic.Scene(
    {
      triggerElement: $video1[0],
      duration: $video1.height(),
    })
    .on('enter leave', function(event){
      var $video = $video1;
      var video = $video.find('video')[0];
      var timer;
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
      if (event.type === 'enter') {
        timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
          if (!isPlaying) {
            $video.find('.play').click(); // play
          }
        }, 600);
      } else {
        if (timer) {
          clearTimeout(timer);
        }
        if (isPlaying) {
          video.pause(); // pause
        }
      }
    })
    .addTo(controller);
  new ScrollMagic.Scene(
    {
      triggerElement: $video2[0],
      duration: $video2.height(),
    })
    .on('enter leave', function(event){
      var $video = $video2;
      var video = $video.find('video')[0];
      var timer;
      if (event.type === 'enter') {
        timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
          var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

          if (!isPlaying) {
            $video.find('.play').click(); // play
          }
        }, 300);
      } else {
        if (timer) {
          clearTimeout(timer);
        }
        if (video.played) {
          video.pause(); // pause
        }
      }
    })
    .addTo(controller);

  // scrollToSection();
// }

// // Section Nav 링크 스크롤링
// function scrollToSection () {
//   $('.section-nav a, .brand-top-intro .link, .brand-identity a').on('click', function (e) {
//     e.preventDefault();

//     var id = $(this).attr('href');
//     var $id = $(id);
//     var newpos;

//     if ($id.length > 0) {
//       newpos = $id.offset().top - $('#roof').outerHeight(); // header가 내용을 가리지 않게 위치 조정

//       $('html, body').stop().animate({scrollTop: newpos}, 500);

//       // if supported by the browser we can even update the URL.
//       // if (window.history && window.history.pushState) {
//       //   history.pushState('', document.title, id);
//       // }
//     }
//   });
// }

