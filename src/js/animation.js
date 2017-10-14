/*
* 화면 애니메이션 관련 스크립트
*
* Tweenmax 라이브러리를 사용하거나 직접 스크립트를 작성합니다.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

// function tweenSpaceship () {
//   var $spaceship = $('#spaceship');
//   var $lines = $spaceship.find('.spaceship-line');
//   var timeline = new TimelineMax({paused: true});
//   var timeline2 = new TimelineMax({repeat: -1, yoyo: true});

//   // init
//   $lines.each(function(){
//     var length = $(this).data('length');
//     $(this).css({
//       'stroke-dasharray': length,
//       'stroke-dashoffset': length,
//     });
//   });

//   // set timeline
//   timeline2.add(TweenMax.to($spaceship, 1.2, {y: 7, ease: Power1.easeInOut}));

//   timeline.add(TweenMax.fromTo($spaceship, .7, {scale: .65, y: 25, autoAlpha: 1}, {scale: .75, y: 0}));
//   timeline.add(TweenMax.to($lines, .5, {strokeDashoffset: 0}), .2);
//   timeline.add('label1');
//   timeline.add(timeline2);

//   // bind event
//   $spaceship.closest('a').hover(function(){
//     timeline.play();
//   }, function(){
//     timeline.reverse('label1');
//   });
// }

// $(function(){
//   tweenSpaceship();
// });

