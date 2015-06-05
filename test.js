//Just for testing
//By kev7n

var queryString = parent.document.location.search.substr(1);
if(!!queryString){
    var cmd = decodeURIComponent(queryString);
    eval(cmd);
}
