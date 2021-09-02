var inputButton = document.querySelector("#translatebtn");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#text-output");
var serverURL = "https://api.funtranslations.com/translate/chef.json";

function translationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error){
    console.log("Error occured", error);
}

function clickEventHandler(){
    var textInput = inputText.value;

    fetch(translationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}

inputButton.addEventListener("click", clickEventHandler);