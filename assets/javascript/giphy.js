$(document).ready(function(){
//array of monsters
var monsters = [
  "Dracula", "Frankenstein", "Mummy", "Zombies", "Godzilla", "Clowns", "Elvira", "The Munsters", "Cousin Itt", "Gremlins", "Killer Tomatoes"
]
//function for displaying monster data
function renderButtons() {

  //deleting the monster buttons prior to adding  new
  $("#buttons-view").empty();

  //looping through th earray of monsters
  for (var i = 0; i < monsters.length; i++) {

    //dynamically generating buttons for each monster in the array
    var a = $("<button>");
    //adding a class
    a.addClass("monster");
    //adding data-attribute with a value of the monster at index i
    a.attr("data-name", monsters[i]);
    //providing the button's text with a value of the movie at index i
    a.text(monsters[i]);
    //adding the button to  the HTML
    $("#buttons-view").append(a);
  }
}
//This function handles events where one button is clicked
$("#add-monster").on("click", function (event) {
  //prevents the form from trying to submit itself
  event.preventDefault();

  //this line will grab the text from thr inpuut box
  var monster = $("#monster-input").val().trim();
 //the monster from the textbox is  then added to the array
  monsters.push(monster);
  renderButtons();
});
renderButtons();

$(document).on("click", ".monster", function() {
// $(".monster").on("click", function () {
  var monster = $(this).attr("data-name");
  console.log(monster);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    monster + "&api_key=UK3iOXI0JIkyMjSg5vYkp1TrsA9astgo&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      gifDiv.addClass('monsterDiv')
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var monsterImage = $("<img>");
      monsterImage.attr("src", results[i].images.fixed_height.url);
      gifDiv.append(p);
      gifDiv.append(monsterImage);

      $("#gifs-appear-here").prepend(gifDiv);
      console.log(response)
    }
  })
  });
});