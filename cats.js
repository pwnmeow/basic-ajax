
var btn = document.querySelector("#cat");
var myHeaders = response.headers;

btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            data = JSON.parse(XHR.responseText).text;
            $('#catfacts').text(data);
        }
    }
    XHR.open('get', 'https://cat-fact.herokuapp.com/facts/random', true);
    XHR.send();
});