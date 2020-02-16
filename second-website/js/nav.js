let navBtnShow = document.querySelector(".nav-berger"),

    navBtnHide = document.querySelector(".hide-nav"),

    navLink = document.querySelector(".nav-link")

navBtnShow.onclick = function(){
  
  //add show animation for nav
  navLink.classList.add("nav-show-animation");

  navLink.classList.add("is-show");
}

navBtnHide.onclick = function(){
  
  //remove show animation in nav
  navLink.classList.remove("nav-show-animation");

  //add hide animation for nav
  navLink.classList.add("nav-hide-animation");

  setTimeout(function(){

    //hide nav
    navLink.classList.remove("is-show");
    
    //remove hide animation in nav
    navLink.classList.remove("nav-hide-animation");
  },600)
}
