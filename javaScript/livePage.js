$(document).ready(function() {
  const quranChannel = document.querySelector("#quranChannel");
const sunaChannel = document.querySelector("#sunaChannel");
const sunaLive = document.querySelector("#sunaLive");
const qurqnLive = document.getElementById('quranLive');
$(".nav-link").click(function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active"); 
});
const playLiveQutan = (channle) => {
    if(Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(`${channle}`);
      hls.attachMedia(qurqnLive);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
      });
   }
  };
  const playLiveSuna = (channle) => {
    if(Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(`${channle}`);
      hls.attachMedia(sunaLive);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
      });
   }
  };
  $("#nav").fadeIn(1000);
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
      $("#nav").fadeOut(1000);
  } else {
      $("#nav").fadeIn(1000);
  }
});
  quranChannel.addEventListener('click',()=>{
    sunaLive.src = " "
    playLiveQutan('https://win.holol.com/live/quran/playlist.m3u8');
    $("#sunaLive").hide(700);
      $('#quranLive').show(700);
  });
sunaChannel.addEventListener('click',()=>{
  qurqnLive.src = " "
  playLiveSuna('https://win.holol.com/live/sunnah/playlist.m3u8');
  $("#quranLive").hide(700);
  $("#sunaLive").show(700);
});
$(".spinner .loader").fadeOut(1000,function(){
  $(".spinner").slideUp(1000,function(){
    $("body").css("overflow" , "auto")
  })
})
});