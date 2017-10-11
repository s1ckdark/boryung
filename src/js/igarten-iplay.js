/*
* Igarten iPlay 스크립트
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
  var $area = $('#igarten-iplay');
  var $timeline = $area.find('.iplay-story-timeline .item');
  var $story = $area.find('.iplay-story .item');
  var $sliderInner = $('#iplay-illust-inner');
  var $item = $sliderInner.find('.item');
  var length = $item.length;
  var percent = 100 / length;
  var timeline = new TimelineMax();
  var label;
  var tweens = [];
  var tween;

  // splitText 인스턴스, 트윈 만들기
  for (var j = 0; j < length; j++) {
    tween = new SplitText($item.eq(j).find('.text'));
    tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
    tweens.push(tween);
  }

  // 트윈 시작하기
  function playTween(index){
    if (index !== null) {
      tweens[index].play(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  for (var i = 0; i < length; i++) {
    if (i > 0) {// 두번째 슬라이드부터 이동하기
      timeline.to({}, 1, {}); // delay
      timeline.to($sliderInner, 1, {xPercent: -percent * i, delay: 0, ease: Linear.easeNone});
    }
    label = 'slide' + (i+1); // ex) slide1
    timeline.add(label);
    timeline.call(playTween, [i]);
    if (i > 0) { // 두번째 슬라이드부터 이전 것 숨기기
      timeline.to($timeline.eq(i-1), .5, {className: '-=active'}, label);
      timeline.to($story.eq(i-1), .5, {className: '-=active'}, label);
    }
    timeline.to($timeline.eq(i), .5, {className: '+=active'}, label); // 현재 슬라이드 보이기
    timeline.to($story.eq(i), .5, {className: '+=active'}, label); // 현재 슬라이드 보이기
    if (i + 1 === length) {// 마지막 슬라이드
      timeline.to({}, 1, {}); // delay
    }
  }

  new ScrollMagic.Scene(
    {
      triggerElement: $area[0],
      triggerHook: 0,
      duration: 100 * length + '%',
      offset: $('#roof').height() * -1
    })
    .setPin($area[0])
    .setTween(timeline)
    .addTo(controller);

  // nav
  $('#iplay-slider-nav a').on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    var forward = $this.hasClass('next');
    var index = $timeline.filter('.active').index();
    var height = $area.parent('.scrollmagic-pin-spacer').outerHeight();
    var progress = [.03, .18, .36, .54, .71, .82]; // 슬라이더 나타나는 트윈이 일정하지 않아서 수동으로 작업
    var newpos;

    index = forward ? index + 1 : index - 1;
    if (0 <= index && index < length) {
      newpos = $area.parent('.scrollmagic-pin-spacer').offset().top - $('#roof').outerHeight() + (height * progress[index]); // header가 내용을 가리지 않게 위치 조정
      $('html, body').stop().animate({scrollTop: newpos}, 500);
    }
  });
});