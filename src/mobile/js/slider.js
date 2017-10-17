/*
* 슬라이더 관련 스크립트
*
* JS Dependencies
* - OwlCarousel2: https://owlcarousel2.github.io/OwlCarousel2
*    - owl.carousel.min.js
* */

$(function(){

  // brand article slider
  //
 $('.article-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1
  });
  // // brand interview slider
  // //
  // var $interviewSlider = $('#interview-slider').owlCarousel({
  //   loop: false,
  //   nav: false,
  //   dots: false,
  //   mouseDrag: false,
  //   items: 1
  // });
  // $('#interview-q-list a').on('click', function(e){
  //   e.preventDefault();
  //   var $this = $(this);
  //   var $list = $this.parent('li');
  //   var index = $list.index();

  //   if ($list.hasClass('active')) {
  //     return;
  //   }

  //   $list.addClass('active').siblings('.active').removeClass('active'); // 활성화 클래스 토글
  //   $interviewSlider.trigger('to.owl.carousel', [index, 0]); // 해당 슬라이더로 이동
  // });

  // // igarten art slider
  // //
  // $('#art-slider').owlCarousel({
  //   loop: false,
  //   nav: true,
  //   dots: false,
  //   items: 1,
  //   margin: 10,
  //   onChanged: function(event) {
  //     $('#art-num').text(event.item.index + 1);
  //   }
  // });

  // // igarten quiz slider
  // //
  // var $quizSlider = $('#quiz-slider');
  // if ($quizSlider.length) {
  //   $quizSlider.owlCarousel({
  //     loop: false,
  //     nav: true,
  //     dots: false,
  //     lazyLoad: true,
  //     items: 1,
  //     onChanged: function(event) {
  //       $('#quiz-num').text(event.item.index + 1);
  //     }
  //   });
  //   // 정답 확인 버튼
  //   $('#check-quiz').on('click', function(){
  //     var $button = $(this);
  //     var $slide = $quizSlider.find('.active');
  //     var isActive = $button.hasClass('active');

  //     $slide.find('.answer').toggle();
  //     $button.text(isActive ? '정답보기' : '문제 다시 보기');
  //     $button.toggleClass('active');
  //   });

  //   // 정답 열린채로 슬라이더 움직일 경우 - 정답 닫기
  //   $quizSlider.on('change.owl.carousel', function(){
  //     $('#check-quiz.active').click();
  //   });
  // }

  // // april tool slider
  // //
  // $('#april-tool-slider').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: true,
  //   // lazyLoad: true,
  //   items: 1
  // });

  // // april book slider
  // //
  // $('#april-book-slider').owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   lazyLoad: true,
  //   items: 1,
  // });

  // // april illustration slider
  // //
  // $('#april-illust-slider').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: true,
  //   lazyLoad: true,
  //   items: 1,
  //   margin: 20,
  // });

  // // var $instituteIconSlider = 
  // $('#institute-icon-slider').owlCarousel({
  //   loop: true,
  //   dots:true,
  //   dotsData: true,
  //   lazyLoad: true,
  //   items:1
  // });

  // // var $instituteTextSlider = 
  // $('.selection-slider').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: false,
  //   lazyLoad: true,
  //   items:1,
  //   navText: ['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>'],
  //   onInitialized  : bookCounter, //When the plugin has initialized.
  //   onTranslated : bookCounter //When the translation of the stage has finished
  // }); 

  // $('#institute-text-slider').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   lazyLoad: true,
  //   items:1,
  //   dots:false,
  //   navText: ['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>'],
  //   onInitialized  : textCounter, //When the plugin has initialized.
  //   onTranslated : textCounter //When the translation of the stage has finished.
  // });

  // $('#institute-curriculum-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  //   if (!e.namespace)  {
  //     return;
  //   }
  //   var carousel = e.relatedTarget;
  //   $('#slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  // }).owlCarousel({
  //   loop:true,
  //   nav: true,
  //   dots: false,
  //   lazyLoad: true,
  //   items:1,
  //   navText: ['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>'],
  // });

  // function textCounter(event){
  //   var items = event.item.count;     // Number of items
  //   var item = (event.item.index + 1) % 3 + 1;     // Position of the current item
  //   $('#text-slider-counter').html(item+'&nbsp;/&nbsp;'+items);
  // }

  // function bookCounter(event){
  //   var items = event.item.count;     // Number of items
  //   var item = (event.item.index + 1) % 6 + 1;     // Position of the current item
  //   $('#book-slider-counter').html(item+'&nbsp;/&nbsp;'+items);
  // }
});