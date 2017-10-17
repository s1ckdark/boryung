// web font loader
if (typeof WebFont === 'object') {
  WebFont.load({
    custom: {
      families: ['Spoqa Han Sans'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css']
    },
    google: {
    families: ['Montserrat']
    }
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

   var $toggle = $('.toggle_block');
  if ($toggle.length) {
    // 질문 누르면 답변 열고 닫기
    $toggle.find('.toggle_text').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      $this
        .parent().toggleClass('active') // 클릭 목록 활성화 토글
        .siblings('.active').removeClass('active'); // 기존 활성화 목록 비활성화
    });

    // 활성화 영역으로 스크롤하기
    $toggle.find('.a-content').on('transitionend', function(){
      var $parent = $(this).parent();
      if ($parent.hasClass('active')) {
        $('html, body').stop().animate({scrollTop: $parent.offset().top - $('#roof').outerHeight()}, 500);
      }
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



});
