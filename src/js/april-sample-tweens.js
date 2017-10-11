/*
* April Sample SVG 트윈 - 모바일, 웹 동일함.
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

var aprilTweens = [];
window.addEventListener('load', function(){
  // svg 트윈 만들기
  var tween;
  // svg 1번
  tween = new TimelineMax({paused: true})
  // 노트북 안 강아지
    .from('#as1-dog', .4, {y: 200})
    .add('label1')
    .from('#as1-clip', .4, {y: -200}, 0) // as1-dog 용 clip도 같이 움직여줘야 함.
    // 말풍선
    .from('#as1-mung', .4, {scale: 0, x: 80, y: 60, transformOrigin: 'center center'})
    // 하트
    .from('#as1-heart', .4, {scale: 0, rotation: -30, x: 80, y: 60, transformOrigin: 'center center'})
    // 선
    .staggerFrom('#as1-line line', .1, {opacity: 0}, .1)
    // 계속 움직이는 트윈
    .add(new TimelineMax({yoyo: true, repeat: -1})
      .to('#as1-dog', 4, {y: 10, ease: Elastic.easeOut})
      .to('#as1-clip', 4, {y: -10, ease: Elastic.easeOut}, 0)
      , 'label1'
    )
  ;
  aprilTweens.push(tween);
  // svg 2번
  tween = new TimelineMax({paused: true})
  // 손가락
    .from('#as2-hand', .4, {y: 100})
    // 원
    .from('#as2-circle', .4, {scale: 0, transformOrigin: 'center center'}, '-=.2')
    // 강아지
    .from('#as2-dog', .4, {scale: 0, transformOrigin: 'center center'})
    // .from('#as2-dog-c', .4, {scale: 0, transformOrigin: 'center center'})
    // .staggerFrom(['#as2-dog-c1', '#as2-dog-c2', '#as2-dog-c3'], .1, {scale: 0, transformOrigin: 'center center'}, .1)
    .add('label1')
    // 문서
    .from('#as2-doc', .4, {scale: 0, rotation: '-45_ccw', x: -50, y: -50, transformOrigin: 'right bottom'})
    .staggerFrom('#as2-doc-line line', .1, {opacity: 0}, .1)
    // 말풍선
    .from('#as2-talk', .4, {x: 30, scale: 0, transformOrigin: 'center center'})
    .staggerFromTo('#as2-talk line', .3, {strokeDashoffset: 50, strokeDasharray: 50}, {strokeDashoffset: 0}, .2)
    // 계속 움직이는 트윈
    .add(new TimelineMax({yoyo: true, repeat: -1})
      .to('#as2-dog', 4, {rotation: 6, transformOrigin: 'center top'})
      , 'label1'
    )
  ;
  aprilTweens.push(tween);
  // svg 3번
  tween = new TimelineMax({paused: true})
  // 손
    .from('#as3-hand1', .5, {x: -100, y: -100, rotation: -45, transformOrigin: 'center center'})
    .from('#as3-hand2', .5, {x: 100, y: 100, rotation: -45, transformOrigin: 'center center'}, 0)
    // 원
    .add('label1')
    .from('#as3-circle1', .5, {scale: 0, transformOrigin: 'center center'})
    .from('#as3-line1', .5, {scale: 0, transformOrigin: 'right bottom'}, 'label1')
    .set('#as3-circle2', {x: -10}, 'label1')
    .from('#as3-circle2', .5, {scale: 0, transformOrigin: 'center center'}, 'label1')
    .from('#as3-line2', .5, {scale: 0, transformOrigin: 'left bottom'}, 'label1')
    .add('label2')
    // 선
    .staggerFrom('#as3-line line', .1, {opacity: 0}, .1)
    // 계속 움직이는 트윈
    .add(new TimelineMax({yoyo: true, repeat: -1})
      .to(['#as3-circle1', '#as3-circle2'], 1, {scale: 1.1, transformOrigin: 'center center', ease: Linear.none})
      , 'label2'
    )
  ;
  aprilTweens.push(tween);
  // svg 4번
  tween = new TimelineMax({paused: true})
  // 말풍선
    .from('#as4-talk', .4, {scale: 0, transformOrigin: 'left bottom'})
    .staggerFromTo('#as4-talk line', .3, {strokeDashoffset: 50, strokeDasharray: 50}, {strokeDashoffset: 0}, .2)
    .from('#as4-mic', .4, {x: 30, scale: 0, transformOrigin: 'center center'})
    .from('#as4-camera', .4, {xPercent: -110}, '-=.2')
  ;
  aprilTweens.push(tween);
  // svg 5번
  tween = new TimelineMax({paused: true})
  // 말풍선
    .from('#as5-upload', .4, {scale: 0, transformOrigin: 'center center'})
    .from('#as5-upload-c', .4, {y: 30, transformOrigin: 'center center'}, '-=.1')
    .from('#as5-circle', .4, {scale: 0, rotation: 40, transformOrigin: 'center center'})
    .add('label1')
    .staggerFrom(['#as5-like1', '#as5-like2', '#as5-like3', '#as5-like4', '#as5-like5'], .2, {scale: 0, transformOrigin: 'center center'}, .3)
    // 계속 움직이는 트윈
    .add(new TimelineMax({repeat: -1})
      .to('#as5-circle', 120, {rotation: 360, transformOrigin: 'center center', ease: Linear.none})
      , 'label1'
    )
  ;
  aprilTweens.push(tween);
});