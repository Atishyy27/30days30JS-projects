document.addEventListener("DOMContentLoaded", function() {
    var selectField = document.getElementById("selectorField");
    var selectText = document.querySelector(".selectorField p");
    var options = document.querySelectorAll(".options");
    var list = document.getElementById("list");
    var arrowIcon = document.getElementById("arrowicon");

    selectField.addEventListener("click", function() {
        list.classList.toggle("hidden");
        arrowIcon.classList.toggle("rotate");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            selectText.textContent = this.textContent.trim();
            list.classList.add("hidden");
            arrowIcon.classList.remove("rotate"); // Assuming you want to remove the rotation on selection
        });
    });
});
