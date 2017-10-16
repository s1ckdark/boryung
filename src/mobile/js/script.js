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
  //
  // Video play
  //
  $('.video-play .play').on('click', function(e){
    e.preventDefault();
    $(this).hide().next('video')[0].play();
  });

  var $video1 = $('#video-brand1');
  var $video2 = $('#video-brand2');

  $video1.find('video').attr({
    'src': 'http://cf.c.ooyala.com/s0cW5nYzE6g8tOxwqdkBqKlGIhA8xQVh/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'none',
    'loop':false,
    'poster': ''
  });

  $video2.find('video').attr({
    'src': 'http://cf.c.ooyala.com/84cW5nYzE6_psmoDsuHmTCrGIUyISTyu/DOcJ-FxaFrRg4gtDEwOmw3OjBrO9xAJa',
    'controls':true,
    'controlsList':'nodownload',
    'preload':'none',
    'loop':false,
    'poster': ''
  });

  //
  // Brand QnA / Interview
  //
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

  var $toggle_layer = $('.toggle_layer_block');
  if ($toggle_layer.length) {
    // 질문 누르면 답변 열고 닫기
    $toggle_layer.prev('.toggle_open').on('click', function(e) {
      e.preventDefault();

      var $this = $(this);
      $this
        .next().toggleClass('active') // 클릭 목록 활성화 토글
        .siblings('.active').removeClass('active'); // 기존 활성화 목록 비활성화
    });
  }
  var $closeBtn = $('.close');
  $closeBtn.on('click', function(e){
     e.preventDefault();
    var $this = $(this);
      $this.parent().parent().removeClass('active'); // 클릭 목록 활성화 토글
    });

});