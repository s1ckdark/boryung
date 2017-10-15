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
  var $target = $(ele).children(), timeline = new TimelineMax({delay:-1,paused: true, repeat:-1, repeatDelay:2});
  // init
  $target.each(function(i){
    var time = i + 1, imgTween = new TimelineMax({yoyo:true});
    imgTween.fromTo($target[i], 1, {zIndex:1,ease:Power4.easeIn}, {zIndex:2,ease:Power4.easeOut}, time);
    timeline.add(imgTween);
  });

  timeline.play();
}
imageTween('.bg_sceneTween');
imageTween('.contribute_img.img1');
imageTween('.contribute_img.img2');
imageTween('.rnd-imgTweem');

// function drawsvg(ele) {
//   var $target =$(ele);

// }

TweenMax.staggerFrom("#line path", 2, {drawSVG:"50% 50%",transformOrigin:"0% 100%"}, 0.1);