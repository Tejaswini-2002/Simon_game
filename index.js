// var gamePattern = new Array();
// var buttonColours = new Array("red", "blue", "green", "yellow");
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
$(document).on("keypress",function(){
    
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
    // $("h1").text("Press A Key to Start");
});
$( ".btn" ).on( "click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(this);
    checkAnswer(userClickedPattern.length-1);
  } );

  function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        // console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                // userClickedPattern = [];
                nextSequence();
            }, 1000);
        }
    }
    else{
        // console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function playSound(name){
    // soundToBePlayed(name);
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}
function animatePress(c){
    $(c).addClass("pressed");
    setTimeout(function() {
    $(c).removeClass("pressed");
      }, 200);
}
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+level);
        var randomNumber = Math.floor(Math.random()*4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // soundToBePlayed(randomChosenColour);
        playSound(randomChosenColour);
        
    
}

function startOver(){
    level=0;
    gamePattern = [];
    started = false;
}
// function soundToBePlayed(c){
//     switch (c){
//         case "red":
//             var sound1 = new Audio("sounds/red.mp3");
//             sound1.play();
//             break;
//         case "green":
//             var sound2 = new Audio("sounds/green.mp3");
//             sound2.play();
//             break;
//         case "blue":
//             var sound3 = new Audio("sounds/blue.mp3");
//             sound3.play();
//             break;
//         case "yellow":
//             var sound4 = new Audio("sounds/yellow.mp3");
//             sound4.play();
//             break;
//     }
// }
