// list of characters to choose from
var charactersArray = ["Comedian", "Pilot", "Person who is lost", "Lottery Winner", "Astronaut", "Bigfoot", "Kindergarten Teacher", "Cowboy", "Police Chief", "President", "Second Place Winner"];

// list of situations to choose from
var situationArray = ["Dinner with family", "Attacked by squirrels", "Late night phone call", "Birthday", "Run into an old fling", "Interview", "Hospital Visit", "Breaking Up", "Riding a train", "Unexpected package", "Camping", "Suprise box of kittens", "Wake up in unfamiliar place"];

// function chooses one selection from array
function chooseFromArray(array){

  var randChar = array[Math.floor(Math.random() * array.length)];
  return randChar;

}


// listens for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // updated view when start button is clicked
  $("#changeDiv").click(function(){
    $("#loadDiv").css("display", "none");
    $("#writeDiv").css("display", "block");
  })
  // calls function to choose character and situation
  var choosenChar = chooseFromArray(charactersArray);
  var choosenSit = chooseFromArray(situationArray);

  // displays the choosen character and situation in second div view
  $("#character").text(choosenChar);
  $("#situation").text(choosenSit);

  // when users clicks start button to write
  $("#startWrite").click(function(){

    // hides startwrite button
    $("#startWrite").css("display", "none");

      // displays div with textbox
    $("#letsWrite").css("display","block");

    // displays save button. Allows user to display work before timer is up
    $("#saveText").css("display", "block");

    // declares seconds
    var seconds_left = 301;

    // countdown function
    var interval = setInterval(function() {

      // subtract seconds
      --seconds_left;

      // display the seconds and round minutes. Choose to do this so writer wouldn't be distracted by count down
      var minutes = Math.floor(seconds_left / 60);

        // displays div with counter
        $("#displayCounter").html("Minutes left: " + minutes +"+");

        // if time is less than one minute displays time in seconds
        if (seconds_left <= 60)
        {
            $("#displayCounter").html("Seconds left: " +seconds_left)
        }

        // if time is up
        if (seconds_left === 0){
          // change display to say time is up
          $("#displayCounter").html("Time Up!")

          // diclare user input
          var userStory = $("#textEnter").val();

          // append the user story to empty div
          $("#storyDone").append("<p>"+userStory+"</p>")

          // clearInterval(interval);
          // hides text area
          $("#letsWrite").css("display","none");
          // hides save button
          $("#saveText").css("display", "none");
        }

        if(seconds_left < 0){
          // change display to say time is up
          $("#displayCounter").html("Time Up!")
        }
    }, 1000);
  });

  // save text option for users that finish before 5 minutes
  $("#saveText").click(function(){

    // saves user story
    var userStory = $("#textEnter").val();

    // appends user story to empty div
    $("#storyDone").append("<p>"+userStory+"</p>");

    // hides counter
    $("#displayCounter").css("display", "none");

    // hides textarea
    $("#letsWrite").css("display", "none");
    // hides save button
    $("#saveText").css("display", "none");
  })



});
