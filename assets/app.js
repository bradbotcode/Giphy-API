var buttons = ["coffee", "baby sinclair", "yoda", "bitcoin", "rubiks cube"];

//function displayGifs() {
// var gif = $(this).attr("data-name");
//}

function showBtn() {
  $(".topicBtns").empty();
  for (i = 0; i < buttons.length; i++) {
    var gifBtn = $(
      "<button class='btn btn-warning hackBtn gifBtn'>" +
        buttons[i] +
        "</button>"
    );
    gifBtn.attr("data-name", buttons[i]);
    $(".topicBtn").append(gifBtn);
  }
}
/*$(".submitBtn").click(function() {
  var submission = $("#userInput").val();

  buttons.push(submission);
  showBtn();
}); */

showBtn();

$("button").click(function() {
  // Grabbing and storing the data-name property value from the button
  var topic = $(this).attr("data-name");

  // Constructing a queryURL using the gif topic
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topic +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var result = response.data;

    for (i = 0; i < result.length; i++) {
      //var newDiv = $("<div>");
      // var stuff = $("<p>").text("Rating: " + result[i].rating);
      var image = $("<img>");
      image.attr("src", result[i].images.fixed_height.url);

      // newDiv.append(stuff);
      // newDiv.append(image);

      $(".gifHolder").prepend(image);
    }
  });
});
