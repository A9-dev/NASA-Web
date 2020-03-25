function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function buttonClicked() {
    var data = JSON.parse(httpGet("https://api.nasa.gov/planetary/apod?api_key=TKvp8w4LLObGl3wInVKmIzNGTlCNoOKgIjagqL24"))
    console.log(data);
    var imageStr = `<img src="${data.url}" alt="${data.title}" class="img-fluid" id="spaceImage">`
    document.getElementById("mainID").innerHTML = imageStr
    var infoStr = `<p class="display-4">${data.title}</p><blockquote class="blockquote"><p class="mb-0">${data.explanation}</p><footer class="blockquote-footer">${data.date}</cite></footer></blockquote>`
    document.getElementById("infoArea").innerHTML = infoStr;
    document.getElementById("buttonContainer").innerHTML = "";

}
