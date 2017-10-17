/*
* JATracker 액션 추적 스크립트
*
* jatracker('event', 'clickEvent', '카테고리', '액션명', '라벨');
* */

window.addEventListener('load', function(){
  $('#injoongang .article_arrow').on('click', function(){
    jatracker('event', 'clickEvent', '중앙일보속 김승호 회장이야기', '기사 링크 클릭', '기사 더 보기');
  });

  $('.btn_readmore').on('click', function(){
    jatracker('event', 'clickEvent', '중앙일보 속 기사 더보기', '기사 링크 클릭', '기사 더 보기');
  });

  $('#era .owl-next, #era .owl-prev ').on('click', function(){
    jatracker('event', 'clickEvent', '연대기', '슬라이드 좌우', '슬라이드 내용 보기');
  });

  $('.boldbtn').on('click', function(){
    jatracker('event', 'clickEvent', '연대기', '볼드마케팅 버튼 클릭', '볼드마케팅 보기');
  });
  $('#more .btn').on('click', function(){
    jatracker('event', 'clickEvent', '더보기', '보령제약 바로가기', '보령제약 바로가기');
  });

});