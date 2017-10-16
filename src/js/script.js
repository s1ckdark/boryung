// web font loader
if (typeof WebFont === 'object') {
  WebFont.load({
    custom: {
      families: ['Spoqa Han Sans'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css']
    },
    google: {
      families: ['Montserrat']
    },
  });
}

$(function(){

 //injoongang 
  var current = 0;
  $('.article_arrow').click(function(){
   
    if(current === 0) {
      TweenMax.to($('.article_injoonang'),.5,{height:'100%', onComplete:function(){ current=1;}});
      TweenMax.to($('.article_arrow'),.5,{className : '+= up'});
    } else {
      TweenMax.to($('.article_injoonang'),.5,{height:'480px', onComplete:function(){ current=0;}});
      TweenMax.to($('.article_arrow'),.5,{className : '= article_arrow'});
    }
 })
//era

var discoLen = $('#era > .wrapper > .container').height() - 155;
$('#era > .wrapper > .container > .col').eq(1).css({'height':discoLen});
// era boldMarketing
TweenMax.set('.boldMarketing',{autoAlpha:0})
$('.boldbtn').click(function(){
  var target = $(this).siblings('.boldMarketing');
  TweenMax.to(target[0], 1, {autoAlpha:1,ease:Power1.easeIn})
})
$('.close').click(function(){
  var target = $(this).parent();
  TweenMax.fromTo(this,1,{y:'+5'}, {y:'-5',onComplete:function(){
  TweenMax.to(target[0],1, {autoAlpha:0})    
  }})
})

// kanarb_interview scrolling bg img
  // var width = $('#viewport').width(), //assumes your image is 1024px wide
  // speed = 24, //pixels per second
  // duration = width / speed,
  // endPosition = width - (speed / 24); //adjust the end position assuming 60fps
  // TweenMax.to($(".interview1"), duration, {scale:1.5, force3D:true,repeat:-1});
  TweenMax.fromTo('.bg_kanarb', 8, {scale:1}, {scale:1.1, yoyo:true, repeat:-1, ease:Linear.easeNone})
  //
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });

  //
  // Brand QnA
  //
  var $qna = $('#qna');
  if ($qna.length) {
    // 질문 누르면 답변 열고 닫기
    $qna.find('.q-link').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      $this
        .parent('li').toggleClass('active') // 클릭 목록 활성화 토글
        .siblings('.active').removeClass('active'); // 기존 활성화 목록 비활성화
    });

    // 활성화 영역으로 스크롤하기
    $qna.find('.a-content').on('transitionend', function(){
      var $parent = $(this).parent();
      if ($parent.hasClass('active')) {
        $('html, body').stop().animate({scrollTop: $parent.offset().top - $('#roof').outerHeight()}, 500);
      }
    });

    // 더 보기 버튼
    $qna.find('#qna-more').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      $this.hide();

      $qna.find('.hidden').show();
    });
  }

  //we set the backface 
  TweenMax.set($(".back"), {rotationY:-180});
  $.each($(".cardflip"), function(i,element) {
    var frontCard = $(this).children(".front"),
        backCard = $(this).children(".back"),
        tl = new TimelineMax({paused:true});
        tl.to(frontCard, 1, {rotationY:180})
          .to(backCard, 1, {rotationY:0},0)
          .to(element, .5, {z:50},0)
          .to(element, .5, {z:0},.5);
        element.animation = tl;
  });
  $(".cardflip").hover(elOver, elOut);
  function elOver() {
      this.animation.play();
  }

  function elOut() {
      this.animation.reverse();
  }

// document.addEventListener('DOMContentLoaded', function() {

//   // Hoisting
//   var svgElement  = $(".line-graph-svg"),
//     timeline      = new TimelineMax(),
//     gridLines     = svgElement.find(".grid-lines line"),
//     graphArea     = svgElement.find(".graph .graph-area"),
//     graphLineFlat = svgElement.find(".graph .graph-line-flat"),
//     graphLine     = svgElement.find(".graph .graph-line"),
//     dots          = svgElement.find(".dots circle");

//   // Animate element
//   timeline.staggerFrom(gridLines, 2, { drawSVG: 0, ease: Back.easeOut.config(1.7) }, 0.01)
//   .from(graphLine, 3, {drawSVG: 0, ease: Power1.easeOut}, "-=1.9")
//   .staggerFrom(dots, 0.5, { scale: 0, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7) }, 0.3, "-=2.7")
//   .from(graphArea, 1, {autoAlpha: 0}, "-=1.4")
  
//   // Pause on first frame and wait for waypoint
//   // timeline.pause();
  

//         timeline.play();  
//         // timeline.reverse();

//   $(".restart").on('click', function(){
//     timeline.seek(0).play();
//   });
  
//   $(".reverse").on('click', function(){
//     timeline.reverse();
//   });
// });
  

});