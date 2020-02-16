/* navbar menu*/
let navShow = document.querySelector(".nav-berger"),

    navHide = document.querySelector("header nav ul button"),

    navBar = document.querySelector("header nav ul");

navShow.onclick = () =>{
  if (navBar.classList.contains("nav-hide-animation") === true){

    navBar.classList.remove("nav-hide-animation");
  }
  //show nav links
  navBar.classList.add("is-show");
  //add  show animation for nav
  navBar.classList.add("nav-show-animation");

}

navHide.onclick = () =>{
  if (navBar.classList.contains("nav-show-animation") === true){

    navBar.classList.remove("nav-show-animation");
  }
  //add hide animation for nav
  navBar.classList.add("nav-hide-animation");
  //add time for hide nav
  setTimeout( function(){
    navBar.classList.remove("is-show");
  },600)
}

//Header Slider-Show
let sliderItems = document.querySelectorAll(".header-slider-content"),

    sliderControl = document.querySelector(".header-slider-control ul"),
    //Number For Set Interval To Slider Content
    num = 0,
    //add the background from (data-back...image) in html file
    imageSlide = document.querySelector(".header-slider").getAttribute("data-background-image").split(","),

    sliderTime = setInterval(function(){

      //remove class(is-show) from all sliderItem
      for(let i = 0; i < sliderItems.length; i++){

        sliderItems[i].classList.remove("is-show");

        sliderControlItem[i].classList.remove("is-active")

      }
      
      if(num >= sliderItems.length){ num = 0;}

      sliderItems[num].classList.add("is-show");

      sliderControlItem[num].classList.add("is-active")

      document.querySelector("header").style.backgroundImage = `url(${imageSlide[num]})`

      num++
      
    },3000);


//create li
for (let i = 0; i < sliderItems.length; i++){

  let li = document.createElement("li");

  //add elemnt for slider li
  li.innerHTML = `<span class="li-point"></span>`;

  //add attribute data to get the value in click
  li.setAttribute("data-slider-number",i)

  sliderControl.appendChild(li);
}

//slider ul li

let sliderControlItem = document.querySelectorAll(".header-slider-control ul li");

for (let i = 0; i < sliderControlItem.length; i++){

  sliderControlItem[i].onclick = function(){

    //remove class(is-show) from all sliderItem
    for(let i = 0; i < sliderItems.length; i++){

      sliderItems[i].classList.remove("is-show");

      sliderControlItem[i].classList.remove("is-active")

    }

    num = this.getAttribute("data-slider-number");
    
    sliderItems[num].classList.add("is-show");

    sliderControlItem[num].classList.add("is-active")

    document.querySelector("header").style.backgroundImage = `url(${imageSlide[num]})`
  }
}

/// show the background and the element before slider run
///////////////
sliderItems[num].classList.add("is-show");

document.querySelector("header").style.backgroundImage = `url(${imageSlide[num]})`

sliderControlItem[num].classList.add("is-active")
/////////////
