/*
* JATracker 액션 추적 스크립트
*
* jatracker('event', 'clickEvent', '카테고리', '액션명', '라벨');
* */

window.addEventListener('load', function(){
  $('#article-slider .link').on('click', function(){
    jatracker('event', 'clickEvent', '관련 기사 더보기', '기사 링크 클릭', '기사 더 보기');
  });

  $('#interview-q-list a').on('click', function(){
    jatracker('event', 'clickEvent', '루트번스타인 인터뷰', '제목 클릭', '내용 보기');
  });

  $('#qna .q-link').on('click', function(){
    jatracker('event', 'clickEvent', '청담 QnA', '제목 클릭', '내용 보기');
  });

  $('#check-quiz').on('click', function(){
    jatracker('event', 'clickEvent', '아이가르텐 퀴즈', '버튼 클릭', '정답 확인하기');
  });
  $('.box-btn a').on('click', function(){
    jatracker('event', 'clickEvent', '', '버튼 클릭', '청담어학원 가을학기 발제문 더보기');
  });
  $('.openlink.v1').on('click', function(){
    jatracker('event', 'clickEvent', '', 'V1버튼 클릭', 'V1 확인하기');
  });
  $('.openlink.c1').on('click', function(){
    jatracker('event', 'clickEvent', '', 'C1버튼 클릭', 'C1 확인하기');
  });
  $('.openlink.c2').on('click', function(){
    jatracker('event', 'clickEvent', '', 'C2버튼 클릭', 'C2 확인하기');
  });
  $('.section-more.brand-more').on('click', function(){
    jatracker('event', 'clickEvent', '청담러닝', '링크 클릭', '청담러닝 더 알아보기');
  });
  $('.section-more.igarten').on('click', function(){
    jatracker('event', 'clickEvent', '아이가르텐', '링크 클릭', '아이가르텐 커리큘럼 더 알아보기');
  });
  $('.section-more.april').on('click', function(){
    jatracker('event', 'clickEvent', '에이프릴', '링크 클릭', '에이프릴 커리큘럼 더 알아보기');
  });
  $('.section-more.institute').on('click', function(){
    jatracker('event', 'clickEvent', '청담어학원', '링크 클릭', '청담어학원 더 알아보기');
  });
});