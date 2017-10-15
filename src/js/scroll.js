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
  var $video6 = $('#video6');
  var $video7 = $('#video7');
  var $twinklebtn = $('.top-indicator .link');

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
  
   $video7.find('video').attr({
    'src': 'http://cf.c.ooyala.com/d5aXYwZDE6Pj8CH-O-8bARx9OvW9NvXF/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //겔포스 수사반장 1편   

   $video6.find('video').attr({
    'src': 'http://cf.c.ooyala.com/5ud2oxZDE6RIyA9OeE2NrjiiqvIj8ush/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //용각산 1970년대

    $video5.find('video').attr({
    'src': 'http://cf.c.ooyala.com/k3aHYwZDE6pHASeJKdfJ7b7g6q0ugOUm/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_ ',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //용각산 30년편
  

  // // scroll auto play
  // new ScrollMagic.Scene(
  //   {
  //     triggerElement: $video1[0],
  //     duration: $video1.height(),
  //   })
  //   .on('enter leave', function(event){
  //     var $video = $video1;
  //     var video = $video.find('video')[0];
  //     var timer;
  //     var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
  //     if (event.type === 'enter') {
  //       timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
  //         if (!isPlaying) {
  //           $video.find('.play').click(); // play
  //         }
  //       }, 600);
  //     } else {
  //       if (timer) {
  //         clearTimeout(timer);
  //       }
  //       if (isPlaying) {
  //         video.pause(); // pause
  //       }
  //     }
  //   })
  //   .addTo(controller);
  // new ScrollMagic.Scene(
  //   {
  //     triggerElement: $video2[0],
  //     duration: $video2.height(),
  //   })
  //   .on('enter leave', function(event){
  //     var $video = $video2;
  //     var video = $video.find('video')[0];
  //     var timer;
  //     if (event.type === 'enter') {
  //       timer = setTimeout(function(){ // enter -> leave 이벤트 연속 발생시 play() 방지
  //         var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

  //         if (!isPlaying) {
  //           $video.find('.play').click(); // play
  //         }
  //       }, 300);
  //     } else {
  //       if (timer) {
  //         clearTimeout(timer);
  //       }
  //       if (video.played) {
  //         video.pause(); // pause
  //       }
  //     }
  //   })
  //   .addTo(controller);

//twinkle arrow, hero tween on hero
  var arrowTween = new TimelineMax({paused:true});
  arrowTween.staggerTo($twinklebtn, 1, {opacity:0.3,ease:SteppedEase.config(1),y:'+20',repeat:-1,delay:-1},0.5);

  var $hero = $('.hero').children();
  var heroAni = new TimelineMax({paused:true, repeat:-1,repeatDelay:5});
  heroAni.to($hero.eq(1),1, {autoAlpha:1,scale:1,ease: Back.easeInOut},3)
         .fromTo($hero.eq(2), 1, {autoAlpha:1,sclae:1}, {opacity:0,scale:0,ease: Back.easeOut,delay:2}, 1)
         .fromTo($hero.eq(3), 1, {autoAlpha:0,sclae:0}, {autoAlpha:1,scale:1,ease: Back.easeInOut,zIndex:0}, 2)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('#top')[0],
      duration: $('#top').height(),
    })
    .on('enter leave', function(event){  
      if (event.type === 'enter') {
        arrowTween.play();
        heroAni.play();
        } else {
        arrowTween.pause();
        heroAni.pause();
      }

    })
    .addIndicators()
    .addTo(controller);


var bar3d = new TimelineMax({pause:true});
bar3d.fromTo('.bar3d',1,{scale:0},{scale:1,ease:Back.easeOut},.5)
     .fromTo('.bar3d .ship.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.bar3d .chip.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},1.5)
     .fromTo('.bar3d .vehicle.retangle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},2)
     .fromTo('.bar3d .medicine.circle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},2.5)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('.market')[0],
      duration: $('.market').height(),
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        bar3d.play();
        } else {
        bar3d.pause();
      }

    })
    .addIndicators()
    .addTo(controller);

var chartLine = new TimelineMax({paused:true});
chartLine.staggerFrom("#line path", 2, {drawSVG:"50% 50%",onComplete:function(){chartBubble.play()}}, 0.1);

var chartBubble = new TimelineMax({pause:true});
chartBubble.fromTo('.retangle_bubble.s2011',1,{scale:0},{scale:1,ease:Back.easeOut},.5)
     .fromTo('.retangle_bubble.s2012',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.retangle_bubble.s2013',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.retangle_bubble.s2014',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.retangle_bubble.s2015',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.retangle_bubble.s2016',.5,{scale:0},{scale:1,ease:Back.easeOut},1)
     .fromTo('.kanarbSales .circle_bubble',.5,{scale:0},{scale:1,ease:Back.easeOut},1);


 
  new ScrollMagic.Scene(
    {
      triggerElement: $('.bg_medicine'),
      duration: $('.bg_medicine').height(),
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        chartLine.play();
        } else {
        chartLine.pause();
      }
    })
    .addIndicators()
    .addTo(controller);

  scrollToSection();
// Section Nav 링크 스크롤링
function scrollToSection () {
  $('.top-indicator .link').on('click', function (e) {
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

