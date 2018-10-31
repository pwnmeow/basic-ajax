
var btn = document.querySelector("#cat");
var img = document.querySelector("#framecat");

btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            url = JSON.parse(XHR.responseText).file;
            img.src = url;
        console.log(data)
        }
        }
    XHR.open('get', 'http://aws.random.cat/meow');
    XHR.send();
});