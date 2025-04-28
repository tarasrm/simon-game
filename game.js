const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    return Math.floor(Math.random() * 4);
}

$(document).ready(function() {
    $(document).keypress(function() {
        let randomNumber = nextSequence();
        let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();
    });
});