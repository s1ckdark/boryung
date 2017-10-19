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

  // video
   var $video2 = $('#video2');
  var $video3 = $('#video3');
  var $video4 = $('#video4');
  var $video5 = $('#video5');
  var $video6 = $('#video6');
  var $video7 = $('#video7');
  var $twinklebtn = $('.top-indicator .link');

  $video2.find('video').attr({
    'src': 'http://cf.c.ooyala.com/15dTkyZDE6hd11k9l-gw1Af3KKt819wk/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  });

   $video3.find('video').attr({
    'src': 'http://cf.c.ooyala.com/M4aXYwZDE6EA_PCboH7mBcI6zEpCbm_d/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //카나브 신약
  
   $video4.find('video').attr({
    'src': 'http://cf.c.ooyala.com/V4anYwZDE6YQ7f3Go8QxokuUgalQKH0L/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //겔포스 수사반장 2편
  
   $video7.find('video').attr({
    'src': 'http://cf.c.ooyala.com/d5aXYwZDE6Pj8CH-O-8bARx9OvW9NvXF/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //겔포스 수사반장 1편   

   $video6.find('video').attr({
    'src': 'http://cf.c.ooyala.com/5ud2oxZDE6RIyA9OeE2NrjiiqvIj8ush/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //용각산 1970년대

    $video5.find('video').attr({
    'src': 'http://cf.c.ooyala.com/k3aHYwZDE6pHASeJKdfJ7b7g6q0ugOUm/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'auto',
    'loop':false,
    'poster': ''
  }); //용각산 30년편
  

  // // scroll auto play
  // new ScrollMagic.Scene(
  //   {
  //     triggerElement: $video2[0],
  //     duration: $video2.height(),
  //   })
  //   .on('enter leave', function(event){
  //     var $video = $video2;
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
  //     triggerElement: $video3[0],
  //     duration: $video2.height(),
  //   })
  //   .on('enter leave', function(event){
  //     var $video = $video3;
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
  heroAni.to($hero.eq(1),1, {autoAlpha:1,scale:1,ease: Back.easeInOut},0)
         .to($hero.eq(1),1, {autoAlpha:0,scale:1,ease: Back.easeInOut},2)
         .to($hero.eq(2), 1, {autoAlpha:1,sclae:1}, 1)
         .to($hero.eq(2), 1, {opacity:0,scale:0,ease: Back.easeOut,delay:2},2)
         .fromTo($hero.eq(3), 1, {autoAlpha:0,sclae:0}, {autoAlpha:1,scale:1,ease: Back.easeInOut,zIndex:0}, 2)

 
  new ScrollMagic.Scene(
    {
      triggerElement: $('#top')[0],
      duration: $('#top').height(),
    })
    .on('enter leave', function(event){  
      if (event.type === 'enter') {
        arrowTween.play();
        } else {
        arrowTween.pause();
      }

    })
    .addTo(controller);


var bar3d = new TimelineMax({paused:true});
bar3d.fromTo('.bar3d',1,{scale:0},{scale:1,ease:Back.easeOut},.5)
     .fromTo('.bar3d .ship.retangle_bubble',.5,{scale:0},{scale:.6,ease:Back.easeOut},1)
     .fromTo('.bar3d .chip.retangle_bubble',.5,{scale:0},{scale:.6,ease:Back.easeOut},1.5)
     .fromTo('.bar3d .vehicle.retangle_bubble',.5,{scale:0},{scale:.6,ease:Back.easeOut},2)
     .fromTo('.bar3d .medicine.circle_bubble',.5,{scale:0},{scale:.6,ease:Back.easeOut},2.5)

 
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
    .addTo(controller);
var chartBubble = new TimelineMax({paused:true});
chartBubble.fromTo('.retangle_bubble.s2011',.1,{scale:0},{scale:1,ease:Back.easeOut},.1)
     .fromTo('.retangle_bubble.s2012',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.2)
     .fromTo('.retangle_bubble.s2013',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.3)
     .fromTo('.retangle_bubble.s2014',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.4)
     .fromTo('.retangle_bubble.s2015',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.5)
     .fromTo('.retangle_bubble.s2016',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.6)
     .fromTo('.kanarbSales .circle_bubble',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.7);

// var chartLine = new TimelineMax({paused:true,onComplete:function(){chartBubble.play();}});
// chartLine.staggerFrom("#line path", .5, {drawSVG:"50% 50%"}, .1);


  new ScrollMagic.Scene(
    {
      triggerElement: '.bg_medicine',
      triggerHook:.6,
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        chartBubble.play();
        } else {
        chartBubble.pause();
      }
    })
    .addTo(controller);

  new ScrollMagic.Scene(
    {
      triggerElement: '.cardflip',
      triggerHook:.6
    })
     .on('enter', function(event){  
      if (event.type === 'enter') {
          TweenMax.fromTo($(".cardflip"), 1, {rotationY:0}, {rotationY:360}, 0.1);
      }   
    })
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


function upTween(e, hook){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:30});
     // TweenMax.killTweensOf()
     $e.each(function(){
        var $this = this;
        var sectionTitTween = TweenMax.to($this, .8, {opacity:1, y:0});
        var sectionTitScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .setTween(sectionTitTween)
        .reverse(false)
        .addTo(controller);
});
}

upTween('p.text16','.6');
upTween('.heading-1','.6');
upTween('.heading-2','.6');
upTween('.question','.6');
upTween('.answer','.6');


var len =$('#discobar').height() * 1.75;
var redlineTween = TweenMax.fromTo("#era_scroll b", 1, {height: 0}, {height: len, ease: Power0.easeNone,zIndex:0}); 
var navLineDrawScene1 = new ScrollMagic.Scene({
        triggerElement: "#discobar",
        triggerHook: 0.5,
        duration: len // red_line height
    })
    .setTween(redlineTween)
    .addTo(controller);


   
