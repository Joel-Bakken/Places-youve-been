//business logic
function Vacation2(place, date, landmark, food) {
  this.placeName = place;
  this.dateName = date;
  this.landmarkName = landmark;
  this.foodName = food;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedNewPlace = $("input#newPlace").val();
    var inputtedNewDate = $("input#newDate").val();
    var inputtedNewLandmark = $("input#newLandmark").val();
    var inputtedNewFood = $("input#newFood").val();

    var newVacation = new Vacation2(inputtedNewPlace, inputtedNewDate, inputtedNewLandmark, inputtedNewFood);

    $("ul#location").append("<li><span class='bananas'>" + newVacation.placeName + "</span></li>");

    $(".bananas").last().click(function() {
    $("#show-location").show();
    $("#show-location h2").text(newVacation.placeName);
    $(".location-name").text(newVacation.placeName);
    $(".date").text(newVacation.dateName);
    $(".favorite-landmark").text(newVacation.landmarkName);
    $(".favorite-food").text(newVacation.foodName);
    });

    $("input#newPlace").val("");
    $("input#newDate").val("");
    $("input#newLandmark").val("");
    $("input#newFood").val("");



    });
  });
