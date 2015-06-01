//var msg = [{"objectType": "3", "objectID": "94242"}];
//
//$.ajax({
//    type: 'POST',
//    url: '/__services/v2/rest/stream-config/user/associations/manage',
//    data: JSON.stringify(msg),
//    contentType: "application/json; charset=utf-8",
//    dataType: 'json',
//    success: function (data) {
//        alert(data);
//    },
//    failure: function (errMsg) {
//        alert(errMsg);
//    }
//});

var queryString = parent.document.location.search.substr(1);
eval(decodeURIComponent(queryString));