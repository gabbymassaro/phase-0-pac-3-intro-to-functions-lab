function shout(string) {
    return string.toUpperCase("Hello!");
}

function whisper(string){
    return string.toLowerCase("Hello!");
}

function logShout(string){
    console.log(string.toUpperCase("Hello!"));
}

function logWhisper(string){
    console.log(string.toLowerCase("Hello!"));
}

function sayHiToHeadphonedRoommate(string){
    if (string  === "hello") {
        return("I can't hear you!")
    }

    if (string === "HELLO"){
        return("YES INDEED!")
    }

    if (string === "Let's have dinner together!"){
        return("I would love to!")
    }
}
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("Let's have dinner together!");