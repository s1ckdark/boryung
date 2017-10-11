/*
* Igarten iPlay 스크립트
*
* JS Dependencies
* - OwlCarousel2: https://owlcarousel2.github.io/OwlCarousel2
*    - owl.carousel.min.js
* - ScrollMagic: http://scrollmagic.io
*    - ScrollMagic.min.js
*    - animation.gsap.min.js
*    - debug.addIndicators.min.js
* - TweenMax: https://greensock.com
*    - TweenMax.min.js
* */

window.addEventListener('load', function(){
  var $slider = $('#iplay-illust-slider');
  var $item = $slider.find('.item');
  var $story = $('#iplay-story .item');
  var length = $item.length;
  var tweens = [];
  var tween;

  // splitText 인스턴스, 트윈 만들기
  for (var i = 0; i < length; i++) {
    tween = new SplitText($item.eq(i).find('.text'));
    tween = new TimelineMax({paused: true}).staggerFrom(tween.chars, .2, {opacity: 0, y: 10}, .1);
    tweens.push(tween);
  }

  // 트윈 시작하기
  function playTween(index, type){
    if (index !== null) {
      // owlCarousel changed 이벤트가 처음 init 될때도 불러짐.
      // 스크롤 때 첫 슬라이드 restart 되도록 type 추가.
      tweens[index][type === 'restart' ? 'restart' : 'play'](); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  // 슬라이더 만들기
  $slider.owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    lazyLoad: true,
    items: 1,
    margin: 20,
    onInitialized: function(){
      // 첫 스크롤 때 첫번째 슬라이드 트윈하기
      new ScrollMagic.Scene(
        {
          triggerElement: $slider[0],
        })
        .on('enter', function (event) {
          playTween(0, 'restart');
          event.target.remove(); // 최초 트윈 후 신 삭제
        })
        .addTo(controller);
    },
    onChanged: function(event) {
      // 슬라이드에 맞춰 story 내용 보이기
      if ($story.filter('.active').index() !== event.item.index) {
        $story.filter('.active').removeClass('active');
        $story.eq(event.item.index).addClass('active');
      }

      // 슬라이드에 맞춰 트윈
      playTween(event.item.index);
    }
  });
});