
window.onload = () => {
    const swiper = new Swiper('.swiper-container', {
      effect: "cube",
      loop: true,
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
      
}

const formAddImage = document.querySelector("#formAddImage");

formAddImage && formAddImage.addEventListener('submit', async (e) => {

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