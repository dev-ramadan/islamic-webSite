$(document).ready(function() {
  $("#nav").fadeIn(1000);
$(window).scroll(function(){
  if(window.scrollY > 500){
    $("#nav").fadeOut(1000);
  }else{
    $("#nav").fadeIn(1000);

  }
})
const pages = Array.from({ length: 604 }, (_, i) =>
    `https://www.mp3quran.net/api/quran_pages_svg/${String(i + 1).padStart(3, '0')}.svg`
);

let currentPage = 0;
const imgLeft = document.getElementById("quranPageLeft");
const imgRight = document.getElementById("quranPageRight");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const effect = document.getElementById("effect");

// تحديث الصفحات المعروضة
function updatePages() {
    imgLeft.src = pages[currentPage];
    imgRight.src = pages[currentPage + 1];
}

// زر التالي
imgRight.addEventListener("click", () => {
    if (currentPage < pages.length - 2) {
        currentPage += 2;
        effect.src = 'dist/soundEffect.mp3';
        updatePages();
    }
});

// زر السابق
imgLeft.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage -= 1;
        effect.src = 'dist/soundEffect.mp3';
        updatePages();
    }
});

// تحميل الصفحات الأولى عند بدء التشغيل
updatePages();
});