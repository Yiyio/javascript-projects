$(document).ready(function() {
  $(".button").click(function() {

    $(this).addClass('buttonclick');

    setTimeout(function() {
      $('.buttonclick').removeClass('buttonclick');
    }, 200);

    $.getJSON("https://api.icndb.com/jokes/random?limitTo=[nerdy]", function(json) {
      $("#quote").html(JSON.stringify(json["value"]["joke"]));
      $("a").attr("href", "https://twitter.com/intent/tweet" + "?" + $.param({
        text: JSON.stringify(json["value"]["joke"])
      }));

    }).error(function() {
      alert("Error. The Chuck Norris API seems to be down! (he probably roundhouse kicked it himself) ");
    });
  });

});
