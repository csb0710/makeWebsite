function night_mode() {
    document.getElementById("ul1").style.color = "white";
    document.body.style.backgroundColor = "black";
    document.getElementById("main1").style.color = "white";
    document.getElementById("main2").style.color = "white";
    document.getElementById("title").style.color = "white";
    document.getElementById("v1").style.border = "3px solid white";
    document.getElementById("v2").style.border = "3px solid white";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("main2Title").style.borderBottom = "3px solid white";
}

function day_mode() {
    document.getElementById("ul1").style.color = "black";
    document.body.style.backgroundColor = "white";
    document.getElementById("main1").style.color = "black";
    document.getElementById("main2").style.color = "black";
    document.getElementById("title").style.color = "black";
    document.getElementById("v1").style.border = "3px solid black";
    document.getElementById("v2").style.border = "3px solid black";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button1").style.display = "block";
    document.getElementById("main2Title").style.borderBottom = "3px solid black";
}

function go_main() {
    document.getElementById("main1").style.display = "table-column";
    document.getElementById("main2").style.display = "none";
}

function go_baekjoon() {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "table-column";
}

