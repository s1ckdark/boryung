//Begin Set Vod OneTime URL
//
// $('#awesome-video').fnSetVideo({
//    ovpUrl: 'some url',
//    ovpRo: 1 // 1 = 16:9, 2 = 1:1, 3 = 9:16
// });
$.fn.fnSetVideo = function(setVideo) {
  var $Video = $(this);

  $.ajax({
    type: 'get',
    url: '/common/lib/GetOvpVod.aspx?mediakey=' + setVideo.ovpUrl + '&ro=' + setVideo.ovpRo,
    contentType: 'text/html; charset=utf-8',
    dataType: 'text',
    success: function (data, status) {
      if (status == 'success') {
        $Video.attr({
          'src': data,
          'poster': setVideo.poster,
          'preload': setVideo.preload,
          'autoplay': (setVideo.auto || false),
          'controls': (setVideo.ctrls || false),
          'loop': (setVideo.loop || false),
          'volume': (setVideo.volume || 0)
        });
      }
    },
    error: function () {}
  });
};
//End Set Vod OneTime URL