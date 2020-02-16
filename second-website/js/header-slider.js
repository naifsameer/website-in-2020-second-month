let btnLeft = document.querySelector(".slider-btn-left"),

    btnRight = document.querySelector(".slider-btn-right"),

    sliderItems = document.querySelectorAll(".header-content-slider-item"),

    num = 0, //for  slider item

    backgroundList = [
      "img/slider-background-1.jpg",
      "img/slider-background-2.jpg",
      "img/slider-background-3.jpg"
    ], //background for slider

    header = document.querySelector("header"),

     sliderMove = setInterval(autoSliderMove, 4000);

/////
sliderItems[num].classList.add("is-show");

header.style.backgroundImage = `url(${backgroundList[num]})`;
/////
function autoSliderMove(){

  sliderItems[num].classList.remove("is-show");

  num +=1;

  if (num >= sliderItems.length) { num = 0;}

  sliderItems[num].classList.add("is-show");

  header.style.backgroundImage = `url(${backgroundList[num]})`
}
/////
btnLeft.onclick = function(){

  clearInterval(sliderMove);

  sliderItems[num].classList.remove("is-show");
  
  num += 1;

  if(num >= sliderItems.length) {num = 0};

  sliderItems[num].classList.add("is-show");

  header.style.backgroundImage = `url(${backgroundList[num]})`;

  sliderMove = setInterval(autoSliderMove, 4000);
}

btnRight.onclick = function(){

  clearInterval(sliderMove);

  sliderItems[num].classList.remove("is-show");
  
  num -= 1;

  if(num < 0) {num = sliderItems.length - 1};

  sliderItems[num].classList.add("is-show");

  header.style.backgroundImage = `url(${backgroundList[num]})`;

  sliderMove = setInterval(autoSliderMove, 4000);

}
