const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".ipBox");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
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
    notesContainer.appendChild(ipBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "img") {
        e.target.parent.remove();
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

document.addEventListener("keydown", event=>
    {
        if(event.key === "Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    }
)