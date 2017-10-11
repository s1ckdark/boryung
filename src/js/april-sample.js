/*
* April Sample 섹션 스크립트
*
* JS Dependencies
* - ScrollMagic: http://scrollmagic.io
*    - ScrollMagic.min.js
*    - animation.gsap.min.js
*    - debug.addIndicators.min.js
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

window.addEventListener('load', function(){
  var $area = $('#april-sample');
  var $dots = $area.find('.owl-dot');
  var $slider = $area.find('#april-sample-slider');
  var $slide = $slider.find('.item');
  var length = $slide.length;
  var timeline;

  // svg 트윈 시작하기
  function playTween(index){
    if (index !== null && aprilTweens[index]) {
      aprilTweens[index].restart(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  TweenMax.set($slide, {autoAlpha: 0});
  timeline = new TimelineMax({delay: .1});
  for (var i = 0; i < length; i++) {
    timeline.to($slide.eq(i), .2, {autoAlpha: 1});
    timeline.to($dots.eq(i), 0, {className: '+=active'});
    timeline.staggerFrom($slide.eq(i).find('.content > *'), .4, {y: 30}, .1); // 글자 트윈
    timeline.call(playTween, [i]); // play tween
    timeline.from($slide.eq(i).find('.image > svg'), .1, {autoAlpha: 0}); // svg 나타나기
    timeline.to({}, 1.5, {}); // delay
    if (i + 1 !== length) {// 마지막 슬라이드 제외
      timeline.to($slide.eq(i), 0, {autoAlpha: 0});
      timeline.to($dots.eq(i), 0, {className: '-=active'});
    }
  }

  new ScrollMagic.Scene(
    {
      triggerElement: $area[0],
      triggerHook: 0,
      duration: 100 * length * 1.2 + '%', // 너무 빨리 지나가지 않게 1.2배 조정
      offset: $('#roof').height() * -1,
    })
    .setPin($area[0])
    .setTween(timeline)
    .addTo(controller);
});