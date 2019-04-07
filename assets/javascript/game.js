$(document).ready(function() {
console.log("start");

var randomNumber = 0;
var CryRandomNumber = 0;
var Wins = 0;
var Losses = 0;
var totalScore = 0;
var crystalNumber = [];
var CryRandomNumber1 = [];
var CryRandomNumber2 = [];
var CryRandomNumber3 = [];
var choosenNumber = [];
// making a random number in which the user has to mach
var randomNumber = Math.floor(Math.random() * 102 + 19);
$('.choosenNumber').html(randomNumber);

// random number/ click function for crystal 1
var CryRandomNumber = Math.floor(Math.random() * 12 + 1);
$('.button').on('click', function(){
    var testing = $(this).attr('value', CryRandomNumber);
    var teasting2 = $(this).attr('value');
   totalScore += CryRandomNumber;
$('#totalScore').text(totalScore);

// if total Score is equal to random number player wins
if (totalScore === randomNumber) {
    alert("You Win!!!")
    wins++;
    $("#Wins").html(Wins);
    reset();
}
else if (totalScore > randomNumber) {
    alert("You lost, Try Again")
    Losses++;
    $("#Losses").html(Losses);
    reset();
}
    
})

// random number/ click function for crystal 2
var CryRandomNumber1 = Math.floor(Math.random() * 12 + 1);
$('.button1').on('click', function(){
    var testing = $(this).attr('value', CryRandomNumber1);
    var teasting2 = $(this).attr('value');
    totalScore += CryRandomNumber1;
    $('#totalScore').text(totalScore);

      // if total Score is equal to random number player wins
    if (totalScore === randomNumber) {
        alert("You Win!!!")
        wins++;
        $("#Wins").html(Wins);
        reset();
    }
    else if (totalScore > randomNumber) {
        alert("You lost, Try Again")
        Losses++;
        $("#Losses").html(Losses);
        reset();
    }

})

// random number/ click function for crystal 3
var CryRandomNumber2 = Math.floor(Math.random() * 12 + 1);
$('.button2').on('click', function(){
    var testing = $(this).attr('value', CryRandomNumber2);
    var teasting2 = $(this).attr('value');
    totalScore += CryRandomNumber2;
    $('#totalScore').text(totalScore);

  // if total Score is equal to random number player wins
if (totalScore === randomNumber) {
        alert("You Win!!!")
        wins++;
        $("#Wins").html(Wins);
        reset();
    }
    else if (totalScore > randomNumber) {
        alert("You lost, Try Again")
        Losses++;
        $("#Losses").html(Losses);
        reset();
    }
   

})

// random number/ click function for crystal 4
var CryRandomNumber3 = Math.floor(Math.random() * 12 + 1);
$('.button3').on('click', function(){
    var testing = $(this).attr('value', CryRandomNumber3);
    var teasting2 = $(this).attr('value');
    totalScore += CryRandomNumber3;
    $('#totalScore').text(totalScore);

    // if total Score is equal to random number player wins
    if (totalScore === randomNumber) {
        alert("You Win!!!")
        wins++;
        $("#Wins").html(Wins);
        reset();
    }
    else if (totalScore > randomNumber) {
        alert("You lost, Try Again")
        Losses++;
        $("#Losses").html(Losses);
        reset();
    }
    

})



//4 crystal with a random number 
//new random number every win or loose for each crystal
//
//every click should add up until greater then or equal to choosen number
//if equal to choosenn number win++
//if not equal to choosen number loose++
//onclick
// }
// })
})