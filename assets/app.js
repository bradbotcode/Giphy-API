var buttons = ["coffee", "baby sinclair", "yoda", "bitcoin", "rubiks cube"];

function displayGifs() {
  var topic = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topic +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var result = response.data;

    for (i = 0; i < result.length; i++) {
      var newDiv = $(
        "<div class='col-3'><p class='hack'>Rating: " +
          result[i].rating +
          "</p><img src='" +
          result[i].images.fixed_height.url +
          "' data-animate='" +
          result[i].images.fixed_height.url +
          "' data-still='" +
          result[i].images.fixed_height_still.url +
          "' data-state='animate'</img></div>"
      );
      $(".gifHolder").prepend(newDiv);
    }
  });
}

function showBtn() {
  $(".btnHolder").empty();
  $("#userInput").val(null);

  for (i = 0; i < buttons.length; i++) {
    var gifBtn = $(
      "<button class='btn btn-warning hackBtn gifBtn'>" +
        buttons[i] +
        "</button>"
    );
    gifBtn.attr("data-name", buttons[i]);
    $(".btnHolder").append(gifBtn);
  }
}
$(".submitBtn").click(function(event) {
  event.preventDefault();
  var submission = $("#userInput").val();

  buttons.push(submission);
  showBtn();
});

$(document).on("click", ".gifBtn", displayGifs);
showBtn();
