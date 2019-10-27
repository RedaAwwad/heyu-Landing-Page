/*** Change Active Class For Navigation Links ***/
let links = document.querySelectorAll(".nav-item.link");
//Loop Through The Links
links.forEach((link) => {
  //When Click On The Current Link
  link.addEventListener("click", () => {
    links.forEach((all) => {
      //Remove Active Class From All Links
      all.classList.remove("active");
    })
    //Add Active Class To The Current Link Only
    link.classList.add("active");
  })
})

/*****  Change Testimonials Popup Card  *****/
let testimonials = document.querySelectorAll(".comment"),
    checker = 1;
//Move The Class Every 4.5s
setInterval(showTestimonials, 4500);

function showTestimonials() {
  //Change The Index Of The Array
  checker < testimonials.length - 1 ? checker ++ : checker = 0;
  //Loop Through Elements And Remove The Class
  testimonials.forEach((ele) => {
    ele.classList.remove("show-testimonials");
  })
  //Add The Class To The Current Element 
  testimonials[checker].classList.add("show-testimonials");
}

//Back To Top Button Effect
let toTopBtn = document.querySelector(".to-top");
//When Scroll
window.addEventListener("scroll", () => {
  if(this.scrollY > 100) {
    //Show Back To Top Button
    toTopBtn.style.cssText = "visibility: visible; opacity: 1";
  } else {
    //Hide Back To Top Button
    toTopBtn.style.cssText = "visibility: hidden; opacity: 0";
  }
})

//Go To Top When Click On To Top Button
toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
})


