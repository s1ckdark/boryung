/*
* 화면 애니메이션 관련 스크립트
*
* Tweenmax 라이브러리를 사용하거나 직접 스크립트를 작성합니다.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

function tweenSpaceship () {
  // brand top 우주선
  var $spaceship = $('#spaceship');
  var sTimeline = new TimelineMax({repeat: -1, yoyo: true});
  sTimeline.to($spaceship, 1.2, {y: 2, ease: Power1.easeInOut});
}

$(function(){
  tweenSpaceship();
});

