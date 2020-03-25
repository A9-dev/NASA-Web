function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function buttonClicked() {
    var data = JSON.parse(httpGet("https://api.nasa.gov/planetary/apod?api_key=TKvp8w4LLObGl3wInVKmIzNGTlCNoOKgIjagqL24"))
    console.log(data);
}
