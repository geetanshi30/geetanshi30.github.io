
function showSubContent(subID) {
    document.getElementById("sub" + subID).classList.remove("hidden");
    document.getElementById("open-button" + subID).classList.add("hidden");
    document.getElementById("close-button" + subID).classList.remove("hidden");
}

function showSub1() {
    showSubContent("1");
}

document.getElementById("open-button1").onclick = showSub1;

function showSub2() {
    showSubContent("2");
}

document.getElementById("open-button2").onclick = showSub2;


function hideSubContent(subID) {
    document.getElementById("sub" + subID).classList.add("hidden");
    document.getElementById("open-button" + subID).classList.remove("hidden");
    document.getElementById("close-button" + subID).classList.add("hidden");
}

function hideSub1() {
    hideSubContent("1");
}

document.getElementById("close-button1").onclick = hideSub1;

function hideSub2() {
    hideSubContent("2");
}

document.getElementById("close-button2").onclick = hideSub2;



