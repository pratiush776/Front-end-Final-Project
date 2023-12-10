const Default =
      ""
console.log(localStorage)
if (
    localStorage.getItem("note") === "" ||
    localStorage.getItem("note") === null ||
    localStorage.getItem("note") === undefined
) {
    localStorage.setItem("note", Default);
} else {
    let currentValue = document.getElementById("txt");
    currentValue.value = localStorage.getItem("note");
}
function save() {
    let txt = document.getElementById("txt").value;
    localStorage.setItem("note", txt);
}

window.onbeforeunload = function () {
    let txt = document.getElementById("txt").value;
    localStorage.setItem("note", txt);
};