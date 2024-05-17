let toastBox = document.getElementById('toastBox');

let sucMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errMsg = '<i class="fa-solid fa-xmark"></i> Plese fix the error';
let invMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
let indMsg = '<i class="fa-solid fa-mars-double"></i> Thik hai yar, indoripohe bhiya yar';


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    } 
    if (msg.includes('indoripohe')) {
        toast.classList.add('indoripohe');
    }

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
