// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess

// function for number guessed by user     


function submit() {
    var x = document.getElementById("field").value;
    var guess=1;
    if (x == y) {
        alert("Congratulations!!! You guessed it right in" +
            guess + " GUESS ");
    } else if (x > y) {
       guess++;
        alert("Oops sorry!! Try a smaller number");
    } else {
        guess++;
        alert("Oops sorry!! Try a greater number");
    }
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}