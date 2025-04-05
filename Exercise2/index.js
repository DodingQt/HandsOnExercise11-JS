const fnameTxt = document.getElementById("fname");
const mnameTxt = document.getElementById("mname");
const lnameTxt = document.getElementById("lname");
const resultTxt = document.getElementById("sum");

function Generate() {
    resultTxt.innerHTML = fnameTxt.value + " " + mnameTxt.value+ " " + lnameTxt.value;
}

function clearEntries() {
    fnameTxt.value = "";
    mnameTxt.value = "";
    lnameTxt.value = "";
    resultTxt.innerHTML = "";
}