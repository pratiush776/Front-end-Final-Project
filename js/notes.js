const Default =
      "";

if (
    localStorage.getItem("P") === "" ||
    localStorage.getItem("P") === null ||
    localStorage.getItem("P") === undefined
) {
    localStorage.setItem("P", Default);
} else {
    let currentValue = document.getElementById("txt");
    currentValue.value = localStorage.getItem("P");
}
function save() {
    let txt = document.getElementById("txt").value;
    localStorage.setItem("P", txt);
}

window.onbeforeunload = function () {
    let txt = document.getElementById("txt").value;
    localStorage.setItem("P", txt);
};