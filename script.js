
let check = "0";
function buttonClicked() {
    if (check === "0") {
        document.getElementById('button').innerText = "Remove Friend"
        document.getElementById('relation').innerText = "Friend"
        document.getElementById('relation').style.backgroundColor = "Green"
        check = "1";
    }
    else {
        document.getElementById('button').innerText = "Add Friend"
        document.getElementById('relation').innerText = "Stranger"
        document.getElementById('relation').style.backgroundColor = "crimson"
        check = "0";
    }
}