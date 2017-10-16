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
  var $articleSlider = $('.article-slider').owlCarousel({
    loop: true,
    dots:true,
    dotsData: true,
    lazyLoad: true,
    items:1,
    nav: true,
    margin: 20
    });


// $('#institute-curriculum-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
//     if (!e.namespace)  {
//       return;
//     }
//     var carousel = e.relatedTarget;
//     $('#slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
//   }).owlCarousel({
//     loop:true,
//     nav: true,
//     dots: false,
//     lazyLoad: true,
//     items:1,
//     navText: ['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>'],
//   });
  // brand interview slider
  //
//   var $interviewSlider = $('#interview-slider').owlCarousel({
//     loop: false,
//     nav: false,
//     dots: false,
//     mouseDrag: false,
//     items: 1
//   });
//   $('#interview-q-list a').on('click', function(e){
//     e.preventDefault();
//     var $this = $(this);
//     var $list = $this.parent('li');
//     var index = $list.index();

//     if ($list.hasClass('active')) {
//       return;
//     }

//     $list.addClass('active').siblings('.active').removeClass('active'); // 활성화 클래스 토글
//     $interviewSlider.trigger('to.owl.carousel', [index, 0]); // 해당 슬라이더로 이동
//   });

//   // igarten art slider
//   //
//   $('#art-slider').owlCarousel({
//     loop: true,
//     nav: false,
//     dots: true,
//     items: 1,
//     mouseDrag: false,
//     animateOut: 'fadeOut',
//     autoplay: true,
//     autoplayTimeout: 3000
//   });

//   // igarten quiz slider
//   //
//   var $quizSlider = $('#quiz-slider');
//   if ($quizSlider.length) {
//     $quizSlider.owlCarousel({
//       loop: false,
//       nav: true,
//       dots: true,
//       margin: 200,
//       center: true,
//       autoWidth: true,
//       lazyLoad: true,
//       items: 2,
//     });
//     // 정답 확인 버튼
//     $('#check-quiz').on('click', function(){
//       var $button = $(this);
//       var $slide = $quizSlider.find('.center');
//       var isActive = $button.hasClass('active');

//       $slide.find('img').toggle();
//       $button.text(isActive ? '정답 확인하기' : '문제 다시 보기');
//       $button.toggleClass('active');
//     });

//     // 정답 열린채로 슬라이더 움직일 경우 - 정답 닫기
//     $quizSlider.on('change.owl.carousel', function(){
//       $('#check-quiz.active').click();
//     });
//   }

//   // april tool slider
//   //
//   $('#april-tool-slider').owlCarousel({
//     loop: true,
//     nav: true,
//     dots: true,
//     // lazyLoad: true,
//     items: 1
//   });

//   // april book slider
//   //
//   $('#april-book-slider').owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     lazyLoad: true,
//     items: 3,
//     slideBy: 3,
//   });

//   // april illustration slider
//   //
//   var $illustSlider = $('#april-illust-slider').owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     margin: 100,
//     center: true,
//     autoWidth: true,
//     lazyLoad: true,
//     smartSpeed: 400,
//   });
//   var illustTime;

//   $illustSlider.on('change.owl.carousel initialized.owl.carousel', function(){
//     // center 아이템 잡기위해 setTimeout 사용
//     setTimeout(function(){
//       var $item = $illustSlider.find('.owl-item');
//       TweenMax.to($item, .2, {scale: .7});
//     }, 0);
//   });
//   $illustSlider.on('changed.owl.carousel', function(){
//     // 빠르게 넘어갈 경우 마지막 center 아이템에만 적용하기
//     if (illustTime) {
//       clearInterval(illustTime);
//     }
//     illustTime = setTimeout(function(){
//       var $item = $illustSlider.find('.owl-item.center');
//       TweenMax.to($item, .4, {scale: 1});
//     }, 400);
//   });


//   // institute
//   //
//   // var $instituteIconSlider = 
//   $('#institute-icon-slider').owlCarousel({
//     loop: true,
//     dots:true,
//     dotsData: true,
//     lazyLoad: true,
//     items:1
//   });

//   // var $instituteTextSlider = 
//   $('#institute-text-slider').owlCarousel({
//     loop: true,
//     nav: true,
//     dots: true,
//     lazyLoad: true,
//     items:1
//   });  


// $('#institute-curriculum-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
//     if (!e.namespace)  {
//       return;
//     }
//     var carousel = e.relatedTarget;
//     $('#slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
//   }).owlCarousel({
//     loop:true,
//     nav: true,
//     dots: false,
//     lazyLoad: true,
//     items:1,
//     navText: ['<span class="prev-circle-arrow"></span>','<span class="next-circle-arrow"></span>'],
//   });
});