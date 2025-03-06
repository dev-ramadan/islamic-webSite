
$("#nav").fadeIn(1000);
$(window).scroll(function(){
  if(window.scrollY > 500){
    $("#nav").fadeOut(1000);
  }else{
    $("#nav").fadeIn(1000);

  }
})
const radioAhmed = document.querySelector("#radioAhmed");
const radioAlzain = document.querySelector("#radioAlzain");
const radioEgypt = document.querySelector("#egypt");

const radioLive = (radio) => {
    const radioEle = document.getElementById('radioLive');
    radioEle.src=`${radio}`
    radioEle.type = 'audio/ogg'
    radioEle.play()

};
radioAhmed.addEventListener('click',()=>radioLive('https://Qurango.net/radio/ahmad_khader_altarabulsi'));
radioAlzain.addEventListener('click',()=>radioLive('https://Qurango.net/radio/alzain_mohammad_ahmad'));
radioEgypt.addEventListener('click',()=>radioLive('https://n0f.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABlWb5AUkATe_8iI3oVMSaAw'));