let btnsControl = document.querySelectorAll(".owl-page"),

    testimonialList = document.querySelectorAll(".testimonial-list"),

    n = 0, //for slider item

    numberOfControl;
////
testimonialList[n].classList.add("is-show");
////
for(let i = 0; i < btnsControl.length; i++){

  btnsControl[i].onclick = function(){

    for(let l = 0; l < testimonialList.length; l++){
      //reset testimonial
      testimonialList[l].classList.remove("is-show");
      //reset btn class
      btnsControl[l].classList.remove("is-active");
    }

    testimonialList[i].classList.add("is-show")

    btnsControl[i].classList.add("is-active");
  }
}

