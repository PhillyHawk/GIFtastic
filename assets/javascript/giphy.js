var monsters = [
  "Dracula", "Frankenstein", "Mummy", "Zombies", "Godzilla", "Clowns", "Elvira", "The Munsters", "Cousin Itt", "Gremlins", "Killer Tomatoes"
]

function renderButtons(){
  $("buttons-view").empty();

  for (var i =0; i < monsters.length; i++){
    var a = $("<button>");
    a.addClass("monster");
    a.attr(data-name, monsters[i]);
    a.text(monsters[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-monster").on("click", function(event){
  event.preventDefault();
  var monster = $("#monster-input").val().trim();
  monsters.push(monster);
  renderButtons();
});
renderButtons();