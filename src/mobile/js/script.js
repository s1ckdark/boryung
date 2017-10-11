// web font loader
if (typeof WebFont === 'object') {
  WebFont.load({
    custom: {
      families: ['Spoqa Han Sans'],
      urls: ['https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css']
    },
    google: {
      families: ['Roboto'],
      text: 'abcdefghijklmnopqrstuvwxyzCV'
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
  // video ovp 연결
  // $video1.find('video').fnSetVideo({
  //   'ovpUrl': 'http://v.ovp.joins.com/b0r0MCCQ',
  //   'poster': '',
  //   'preload': false,
  //   'ovpRo': 1, // 1 = 16:9, 2 = 1:1
  //   'ctrls': true,
  //   'volume':1
  // });
  // $video2.find('video').fnSetVideo({
  //   'ovpUrl': 'http://v.ovp.joins.com/hAc0MCDU',
  //   'poster': '',
  //   'preload': false,
  //   'ovpRo': 1, // 1 = 16:9, 2 = 1:1
  //   'ctrls': true,
  //   'volume':1
  // });

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
  var $qna = $('.qna-list');
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
  }


});