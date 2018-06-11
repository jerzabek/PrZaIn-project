
/*
Pokazuje i skriva settings div, tako da im postavlja height na 150px ako su 0px i obrnuto
posto kroz css imaju transition postavljen, prikazuju i skrivaju se animirano
*/
function toggleSettings() {
    var settings = document.getElementById('settingsbar');
    var s = document.getElementById('settings');
    var h = "150px";

    if(settings.style.height === h) {
        settings.style.height = "40px";
        s.style.height = "0px";
    } else {
        settings.style.height = h;
        s.style.height = h;
    }
}

/*
Kada se stranica učita postavlja se nasumična slika na banner
*/
document.body.onload = function (ev) {
    var id = parseInt(Math.random()*3)
    document.getElementById('slika').src = 'imgs/slika' + id + '.jpg'

}

/*
Iduće funkcije daju funkcionalnost nav-u, odnosno gumbima u navigatoru
*/
function home() {
    window.location = 'index.html';
}

function p1() {
    window.location = 'p1.html';
}

function p2() {
    window.location = 'p2.html';
}

function p3() {
    window.location = 'p3.html';
}

function p4() {
    window.location = 'p4.html';
}

/*
Ove dvije funkcije postavljaju boju pozadine i teksta na stranici, koriste ih gumbi u settings div-u
*/
function setBg(i){
  console.log(i)
  document.getElementsByClassName('content')[0].style.backgroundColor = i;
}

function setC(i){
  document.getElementsByClassName('content')[0].style.color = i;
}

/*
Procesiranje forma. ovdje se pretvara unesen iznos iz određene mjerne jedinice u drugu m.j. te se postavlja u p tag
*/
var form = document.getElementById('form1');
function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    var theForm = document.forms["form1"];
    var p1 = parseInt(theForm.elements["fromid"].value)
    var p2 = parseInt(theForm.elements["toid"].value)
    var f = parseFloat(theForm.elements["fromvid"].value)

    document.getElementById('out').innerText = '' + Math.pow(10, p1-p2)*f

    return false;
}

/*
Zaustavlja osvježavanje stranice pri submitu
*/
if(form != null)
  if (form.attachEvent) {
      form.attachEvent("submit", processForm);
  } else {
      form.addEventListener("submit", processForm);
  }


/*
funkcija koja nam daje mogucnost da na neki event, npr onResize event, attachamo funkciju koja ce se callati kada se taj event desi
*/
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};


/*
Svaki put kada se promijeni velicina prozora preglednika, ovdje provjerimo širinu i postavljamo potrebne boje na pozadinu
*/
addEvent(window, "resize", function(event) {
  var d = document.getElementsByClassName('container')[0]
  if(window.innerWidth > 800 && window.innerWidth <= 960) {
    d.style.backgroundColor = "blue";
  }else if(window.innerWidth <= 800) {
    d.style.backgroundColor = "green";
  }else {
    d.style.backgroundColor = "#CACFD2";
  }
});
