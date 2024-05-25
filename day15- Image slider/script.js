let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventdefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrollbehaviour="auto";
})

nextBtn.addEventListener("click", () => {
    scrollContainer.computedStyleMap.scrollbehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click", () => {
    scrollContainer.computedStyleMap.scrollbehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
})