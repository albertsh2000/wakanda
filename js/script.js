const accordion = document.querySelectorAll(".content_wrapper")

accordion.forEach((item) => {
   item.classList.remove("active")
   item.addEventListener("click", () => {
      item.classList.toggle("active")
   })
})

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   grabCursor: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      670: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
})
