//SNS 공유
$(function(){
  Kakao.init('0ea6b97767c7ca7b384389c25beb691f');
});

//공유 PC, Mobile 공통사용
function fnSendSns(sns, url, txt) {
  var popup_url, width, height, param, a_store, g_store, a_proto, g_proto;
  var _url = url || $('meta[property="og:url"]').attr('content'); //공유 URL
  var _title = txt || $('title').text(); //공유 제목
  var _description = $('meta[name="description"]').attr('content'); //공유 제목
  var _img = $('meta[property="og:image"]').attr('content'); //공유 이미지

  switch(sns) {
    case 'facebook':
      popup_url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_url);
      width = 555;
      height = 608;
      openPopup();
      break;
    case 'twitter':
      popup_url = 'https://twitter.com/home?status=' + encodeURIComponent(_url);
      width = 555;
      height = 500;
      openPopup();
      break;
    case 'kakaotalk':
      Kakao.Link && Kakao.Link.sendTalkLink({
        label: _title,
        webLink: {
          text: _description,
          url: location.href
        },
        image: {
          src: _img,
          width: 1280,
          height: 670
        },
        fail: function () {
          alert('지원하지 않는 플랫폼입니다.');
        }
      });
      break;
    case 'kakaostory':
      Kakao.Story.share({ url: _url, text: _title });
      break;
    case 'band':
      if (isMobile) {
        param = 'create/post?text=' + encodeURIComponent(_title) + encodeURIComponent('\r\n') + encodeURIComponent(_url);
        a_store = 'itms-apps://itunes.apple.com/app/id542613198?mt=8';
        g_store = 'market://details?id=com.nhn.android.band';
        a_proto = 'bandapp://';
        g_proto = 'scheme=bandapp;package=com.nhn.android.band';
        openApp();
      } else {
        popup_url = 'http://band.us/plugin/share?body=' + encodeURIComponent(_title) + '&route=' + encodeURIComponent(_url);
        width = 410;
        height = 540;
        openPopup();
      }
      break;
    case 'naverblog':
      popup_url = 'http://share.naver.com/web/shareView.nhn?url=' + encodeURIComponent(_url) + '&title=' + encodeURIComponent(_title);
      width = 557;
      height = 558;
      openPopup();
      break;
    case 'googleplus':
      popup_url = 'https://plus.google.com/share?url=' + encodeURIComponent(_url);
      width = 600;
      height = 600;
      openPopup();
      break;
    case 'pinterest':
      popup_url = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(_url) + '&media=' + encodeURIComponent(_img) + '&description=' + encodeURIComponent(_title);
      width = 750;
      height = 650;
      openPopup();
      break;
    default:
      alert('지원하지 않는 SNS입니다.');
      return false;
  }

  function openPopup() {
    window.open(popup_url, sns + '_sns', 'width=' + width + ',height=' + height + ',menubar=no,toolbar=no,resizable=no');
  }

  function openApp() {
    // android
    if (navigator.userAgent.match(/android/i)) {
      setTimeout(function () {
        location.href = 'intent://' + param + '#Intent;' + g_proto + ';end';
      }, 100);
    }
    // ios
    else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
      setTimeout(function () {
        location.href = a_store;
      }, 200);
      setTimeout(function () {
        location.href = a_proto + param;
      }, 100);
    }
    else {
      alert('이 기능은 모바일에서만 사용할 수 있습니다.');
    }
  }
}