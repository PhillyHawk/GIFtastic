var monsters = [
  "Dracula", "Frankenstein", "Mummy", "Zombies", "Godzilla", "Clowns", "Elvira", "The Munsters", "Cousin Itt", "Gremlins", "Killer Tomatoes"
]

function renderButtons() {
  $("buttons-view").empty();

  for (var i = 0; i < monsters.length; i++) {
    var a = $("<button>");
    a.addClass("monster");
    a.attr("data-monster", monsters[i]);
    a.text(monsters[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-monster").on("click", function (event) {
  event.preventDefault();
  var monster = $("#monster-input").val().trim();
  monsters.push(monster);
  renderButtons();
});
renderButtons();
$("button").on("click", function () {
  var monster = $(this).attr("data-monster");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    monster + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
})
  .then(function (response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div");
      var monsterImage = $("<img>");
      monsterImage.attr("src", results[i].images.fixed_height.url);
      $("#gifs-appear-here").prepend(gifDiv);

    }
  });