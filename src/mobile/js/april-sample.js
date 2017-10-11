/*
* April Sample 섹션 스크립트
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
  var $slider = $('#april-sample-slider');
  var $story = $('#april-sample-story .item');

  // svg 트윈 시작하기
  function playTween(index){
    if (index !== null && aprilTweens[index]) {
      aprilTweens[index].restart(); // play 최초만 실행. 계속 실행하려면 restart로 변경.
    }
  }

  $slider.owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    items: 1,
    onInitialized: function(){
      // 첫 스크롤 때 첫번째 슬라이드 트윈하기
      new ScrollMagic.Scene(
        {
          triggerElement: $slider[0],
        })
        .on('enter', function (event) {
          playTween(0);
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