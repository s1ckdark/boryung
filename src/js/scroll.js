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
   var $video2 = $('#video2');
  var $video3 = $('#video3');
  var $video4 = $('#video4');
  var $video5 = $('#video5');
  var $video6 = $('#video6');
  var $video7 = $('#video7');
  var $twinklebtn = $('.top-indicator .link');

  $video2.find('video').attr({
    'src': 'http://cf.c.ooyala.com/15dTkyZDE6hd11k9l-gw1Af3KKt819wk/DOcJ-FxaFrRg4gtDEwOjFyazowODE7G_ ',
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
  

  // scroll auto play
  new ScrollMagic.Scene(
    {
      triggerElement: $video2[0],
      duration: $video2.height(),
    })
    .on('enter leave', function(event){
      var $video = $video2;
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
      triggerElement: $video3[0],
      duration: $video2.height(),
    })
    .on('enter leave', function(event){
      var $video = $video3;
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
    .addTo(controller);
var chartBubble = new TimelineMax({paused:true});
chartBubble.fromTo('.retangle_bubble.s2011',.1,{scale:0},{scale:1,ease:Back.easeOut},.1)
     .fromTo('.retangle_bubble.s2012',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.2)
     .fromTo('.retangle_bubble.s2013',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.3)
     .fromTo('.retangle_bubble.s2014',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.4)
     .fromTo('.retangle_bubble.s2015',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.5)
     .fromTo('.retangle_bubble.s2016',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.6)
     .fromTo('.kanarbSales .circle_bubble',.1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,ease:Back.easeOut},.7);

var chartLine = new TimelineMax({paused:true,onComplete:function(){chartBubble.play();}});
chartLine.staggerFrom("#line path", .5, {drawSVG:"50% 50%"}, .1);


  new ScrollMagic.Scene(
    {
      triggerElement: '.bg_medicine',
      triggerHook:.6,
    })
     .on('enter leave', function(event){  
      if (event.type === 'enter') {
        chartLine.play();
        } else {
        chartLine.pause();
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
// TweenMax.set($(".bg_1975")[0], 1, {display:'none'});
//   new ScrollMagic.Scene(
//     {
//       triggerElement: '.article_1975',
//       triggerHook:.6
//     })
//      .on('enter', function(event){  
//       if (event.type === 'enter') {
//           TweenMax.to('.bg_1975', 1, {display:'block'}, 0.1);
//       } else {
//         TweenMax.to('.bg_1975', 1, {display:'none'}, 0.1);
//       }
//     })
//      .addIndicators()
//     .addTo(controller);


function upTween(e, hook){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:40});
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

upTween('p.text','p.text');
upTween('p.text16','p.text16');
upTween('.heading-1','.heading-1');
upTween('.heading-2','.heading-2');
upTween('.desc','.desc');
upTween('.icon','.icon');
upTween('.question','.question');
upTween('.answer','.answer');


 
      
   

       var numofboryung = {
        'history': [
          {
            'num': '1',
            'unit': '위',
            'desc': '위장병 치료제 ‘겔포스엠’은 1975년 출시 이래 제산제 시장에서 부동의 1위를 달리고 있다. 누적 판매량이 16억5700만 포로, 일렬로 늘려놓으면 지구 네 바퀴를 돌 수 있다.'
          },
          {
            'num': '9',
            'unit': '개',
            'desc': '보령제약을 비롯해 보령메디앙스·보령바이오파마·보령컨슈머헬스케어 등 9개 계열사에서 임직원 1650여 명이 근무하고 있다. 올해 그룹의 예상 매출은 8000억원이다.'
          },
          {
            'num': '50',
            'unit': '년',
            'desc': '일본 류카쿠산과 기술 제휴를 맺고 용각산을 제조, 판매한지 올해로 50년이 된다. 보령제약은 후지이 류타 류카쿠산 사장 가문과 각각 2대, 3대째 인연을 맺고 있다.'
          },
          {
            'num': '337',
            'unit': '명',
            'desc': '보령의료봉사상을 수상한 의료인 숫자. 1985년 시작된 보령의 사회공헌 프로그램으로, 무의촌이나 지역사회에서 봉사하는 참의료인을 조명하고 있다.'
          },
          {
            'num': '465',
            'unit': '회',
            'desc': '1979년 1월부터 올해 10월까지 열린 월례 직원 생일파티 횟수. 요즘엔 연극 관람 같은 문화행사도 겸한다. 2015년 메르스 사태 때를 빼고 매달 계속됐다.'
          },
          {
            'num': '600',
            'unit': '억',
            'desc': '고혈압 치료제 ‘카나브’의 올해 매출 예상액. 지난해보다 30% 이상 성장했다. 카나브는 전 세계 51개국에서 글로벌 제약회사와 당당히 겨루고 있다.'
          }
        ]
      };


        new ScrollMagic.Scene(
    {
      triggerElement: '.listofcircle',
      triggerHook:.6
    })
     .on('enter', function(event){  
      for (var key in numofboryung.history) {
        if (numofboryung.history.hasOwnProperty(key)){
          var item = "<div class='grid'><div class='round-bubble'>"+numofboryung.history[key].num+"<span class='unit'>"+numofboryung.history[key].unit+"</span></div><div class='desc'>"+numofboryung.history[key].desc+"</div></div>";
          $('.listofcircle').append(item);
        }
      }
 
    })
    .addTo(controller);