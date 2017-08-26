var http = require('http');

var portOne = 7000;
var portTwo = 7500;

var niceThings = ["You are nice", "You are attractive", "You drive a nice car", "Everyone likes you", "You are doing a great job"];
var meanThings = ["You are mean", "You are ugly", "You drive a shitty car", "Nobody likes you", "You are grossly incompetent"];
var niceThing = "";
var meanThing = "";

function handleRequestOne(request, response) {
    niceThing = somethingGood();
    response.end("I love you\n" + niceThing + "\n");
}

function handleRequestTwo(request, response) {
    meanThing = somethingBad();
    response.end("I hate you\n" + meanThing + "\n");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function(){
    console.log("Server listening on: http://localhost:%s", portOne);
});

serverTwo.listen(portTwo, function(){
    console.log("Server listening on: http://localhost:%s", portTwo);
});

function somethingGood() {
    var n = Math.floor(Math.random() * (niceThings.length - 0) + 0);
    niceThing = niceThings[n];
    return niceThing;
}

function somethingBad() {
    var n = Math.floor(Math.random() * (meanThings.length - 0) + 0);
    meanThing = meanThings[n];
    return meanThing;
}
