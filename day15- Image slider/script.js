document.addEventListener("DOMContentLoaded", () => {
    let scrollContainer = document.querySelector(".gallery");

    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    // Continuous scrolling function
    function autoScroll() {
        scrollContainer.scrollLeft += 1; // Incremental scrolling
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
        }
    }

    // Set an interval to continuously scroll the gallery
    let scrollInterval = setInterval(autoScroll, 10);

    // Pause auto-scrolling when hovering over the gallery
    scrollContainer.addEventListener("mouseover", () => {
        clearInterval(scrollInterval);
    });

    // Resume auto-scrolling when not hovering over the gallery
    scrollContainer.addEventListener("mouseout", () => {
        scrollInterval = setInterval(autoScroll, 10);
    });

    // Scroll on button click
    nextBtn.addEventListener("click", () => {
        clearInterval(scrollInterval);
        scrollContainer.scrollLeft += scrollContainer.clientWidth / 3; // Scroll one-third of the gallery width
        scrollInterval = setInterval(autoScroll, 10);
    });

    backBtn.addEventListener("click", () => {
        clearInterval(scrollInterval);
        scrollContainer.scrollLeft -= scrollContainer.clientWidth / 3; // Scroll one-third of the gallery width
        scrollInterval = setInterval(autoScroll, 10);
    });
});
