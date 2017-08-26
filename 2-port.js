var http = require('http');

var portOne = 7000;
var portTwo = 7500;

function handleRequestOne(request, response) {
    response.end("I love you\n");
}

function handleRequestTwo(request, response) {
    response.end("I hate you\n");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function(){
    console.log("Server listening on: http://localhost:%s", portOne);
});

serverTwo.listen(portTwo, function(){
    console.log("Server listening on: http://localhost:%s", portTwo);
});

//function somethingGood() {

//}
