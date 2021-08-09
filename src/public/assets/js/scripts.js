
window.onload = () => {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
      
}

const formAddImage = document.querySelector("#formAddImage");

formAddImage && formAddImage.addEventListener('submit', async (e) => {
    e.preventDefault();

    btnLoading("btnAddImage", "loadingAddImage");

    const body = new FormData(e.target);

    const result = await fetch('/images/add', {
        method: "POST",
        body,

    })
        .then((result) => result.json())

    console.log("Result POST: ", result)

    e.target.reset()

    btnLoading("btnAddImage", "loadingAddImage", false);

})

const btnLoading = (btnId, loadingId, isLoading = true) => {

    const btn = document.getElementById(btnId);
    const loadingDiv = document.getElementById(loadingId);

    if (isLoading) {
        btn.classList.add('disabled')
        loadingDiv.classList.remove('d-none');
    } else {
        btn.classList.remove('disabled')
        loadingDiv.classList.add('d-none');
    }
}