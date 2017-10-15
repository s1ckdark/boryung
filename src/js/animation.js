/*
* 화면 애니메이션 관련 스크립트
*
* Tweenmax 라이브러리를 사용하거나 직접 스크립트를 작성합니다.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */
  //
  // hero 
  //

function imageTween(ele) {
  var $target = $(ele).children(), timeline = new TimelineMax({paused: true, repeat:-1, repeatDelay:1});
  // init
  $target.each(function(i){
    var time = i + 1;
    timeline.fromTo($target[i], .1, {autoAlpha:0,ease: Power1.easeInOut}, {autoAlpha:1,ease: Power1.easeInOut},time);
  });

  timeline.play();
}
imageTween('.bg_sceneTween');
imageTween('.contribute_img.img1');
imageTween('.contribute_img.img2');
imageTween('.rnd-imgTweem');
