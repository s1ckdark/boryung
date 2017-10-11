/*
* Brnad Top Slider 스크립트
*
* JS Dependencies
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

// Brand slider tween
function brandSlider(){
  var $slider = $('#brand-slider');
  var $items = $slider.find('.item');
  var $links = $('#brand-slider-nav .nav-link');
  var brandNavDuration = 2;
  var brandSliderDuration = .6;
  var totalDuration;
  var currentIndex = 0;
  var activeIndex = 1;
  var linksTimeline = [];
  var autoPlayTimeline;

  function init(){
    // nav 링크마다 트윈 만들기
    $links.each(function(index){
      var $this = $(this);
      linksTimeline[index] = new TimelineMax({paused: true})
        .to($this.find('.ko'), brandSliderDuration/2, {autoAlpha: 1})
        .to($this.find('.fill-text .color, .ko .line'), brandNavDuration, {
          width: '100%',
          ease: Linear.easeNone
        });

      totalDuration = linksTimeline[index].totalDuration();
    });

    $links.eq(currentIndex).css('opacity', 1);
  }

  // 자동 재생하기
  function autoPlay(){
    linksTimeline[currentIndex].play(); // 첫 슬라이더 nav 트윈 플레이

    // 이후 totalDuration 마다 showSlide 함수 호출 반복
    if (!autoPlayTimeline) {
      autoPlayTimeline = TweenMax.to({}, totalDuration, {
        repeat: -1,
        onRepeat: showSlide
      });
    }
  }

  // 슬라이드 넘기기
  function showSlide() {
    // tweens
    TweenMax.set($items.eq(activeIndex), {autoAlpha: 1});  // 다음 슬라이드 뒤에 준비
    TweenMax.to($items.eq(currentIndex), brandSliderDuration, {autoAlpha: 0, onComplete: function(){
      // 슬라이드 넘기기 완료 후 작업
      $items.eq(currentIndex).css('z-index', '');
      $items.eq(activeIndex).css('z-index', 1);

      currentIndex = activeIndex;
      activeIndex = (currentIndex + 1) % $links.length;
    }});

    $links.eq(currentIndex).css('opacity', 0);
    $links.eq(activeIndex).css('opacity', 1);

    linksTimeline[currentIndex].pause(0); // 현재 슬라이드 nav 트윈 리셋
    linksTimeline[activeIndex].play(); // 보여질 슬라이드 nav 트윈 플레이
  }

  init();
  autoPlay();
}
window.addEventListener('load', function(){
  brandSlider();
});