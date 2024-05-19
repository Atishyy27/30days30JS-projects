const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".ipBox");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createbtn.addEventListener("click", () => {
    let ipBox = document.createElement("p");
    let img = document.createElement("img");
    ipBox.className = "ipBox";
    ipBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.alt = "Delete Note";
    ipBox.appendChild(img);
    notesContainer.appendChild(ipBox);

    ipBox.addEventListener("keyup", updateStorage);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".ipBox");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();