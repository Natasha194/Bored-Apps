function move() {
    window.location = "shortcut.html";
}

var url = "";
console.log(url);

var Name = "";
console.log(Name);

var Img = "";
console.log(Img);

function add() {
    url = document.getElementById("URL").value;
    Name = document.getElementById("NAME").value;
    Img = document.getElementById("IMG").value;

    var addCut = "<a href="+ url +" target='_blank'>" + "<img src="+ Img +">" + "<br>" + "<p>" + Name + "</p>" + "</a>";

    document.getElementById("output").innerHTML += addCut;
}

