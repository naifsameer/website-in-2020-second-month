let btnAll = document.querySelector("#all"),
    
    btnWebDesign = document.querySelector("#web-design"),
    
    btnBranding = document.querySelector("#branding"),
    
    btnPhotography = document.querySelector("#photography"),

    portfolioListImg = document.querySelectorAll(".portfolio-list-img");

/////////////////////// defualt
for (let i = 0; i < portfolioListImg.length; i++){

  portfolioListImg[i].classList.add("is-show")

}
////////////////////
btnAll.onclick = function(){

  for (let i = 0; i < portfolioListImg.length; i++){

    portfolioListImg[i].classList.remove("animation-zoom-in");

    portfolioListImg[i].classList.add("is-show");

  }
}

btnWebDesign.onclick = function(){
  for (let i = 0; i < portfolioListImg.length; i++){

    if(portfolioListImg[i].classList.contains("web-design") === false){

      portfolioListImg[i].classList.remove("is-show");
    }
    else{
      portfolioListImg[i].classList.add("is-show");
    }
  }
}

btnBranding.onclick = function(){
  for (let i = 0; i < portfolioListImg.length; i++){

    if(portfolioListImg[i].classList.contains("branding") === false){

      portfolioListImg[i].classList.remove("is-show");

    }else{
      
      portfolioListImg[i].classList.add("is-show");
    }
  }
}

btnPhotography.onclick = function(){
  for (let i = 0; i < portfolioListImg.length; i++){

    if(portfolioListImg[i].classList.contains("photography") === false){

      portfolioListImg[i].classList.remove("is-show");

    }else{
      
      portfolioListImg[i].classList.add("is-show")
    }
  }
}