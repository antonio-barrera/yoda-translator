var txtInput = document.querySelector("#input-text");
var txtOutput = document.querySelector("#output-text");
var btnTranslate = document.querySelector("#translate-button");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Something was wrong", error);
    alert("Try again later...");
} 

function eventHandler() {
    var inputText = txtInput.value;
    fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", eventHandler);