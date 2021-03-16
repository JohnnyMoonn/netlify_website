
console.log("Javascript is running");

var soundPLaying = false;
var imageRecieved = false;
var textRecieved = false; 

const article = document.getElementById("article")
const mainImg = document.getElementById("guardPortrait");
const guardAudio = document.getElementById("guardAudio");

function onFetch(){
    console.log("Starting Fetch Event");
    playAudio();    
    
    if (imageRecieved === false){
        fetchImage();
    }
    if (textRecieved === false){
        fetchText();
    }
}

function playAudio(){
    if(soundPLaying === false){
        guardAudio.play();
        soundPLaying = true;
    } else if(soundPLaying === true){
        guardAudio.pause();
        soundPLaying = false;
    }
}

function fetchImage(){
    fetch("stopLawBreaker.gif")
    .then(function(response){
        if (!response.ok){
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.blob();
    })

    .then(function(theBlob) {
        console.log(theBlob); 
        var objectUrl = URL.createObjectURL(theBlob);
        var objectUrl
        console.log(objectUrl);
        mainImg.src = objectUrl
    })
    mainImg.classList.add("img-fetch");
    imageRecieved = true;
}

function fetchText(){
    fetch("page.txt")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.text();
        })
    .then(function(content) {
        article.innerHTML = content;
    })
    textRecieved = true;
}