console.log("test");


    $("runSearch").on("click", function() {
    	console.log("searched...");
    	searching();
    });


   
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function searching() {

        var movie = godzilla;
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // YOUR CODE GOES HERE!!!

      console.log(response);
  
       $("#wellSection").html("Movie title: <b>" + response.Title + "</b><br>");
       $("#wellSection").append("Plot: " + response.Plot + "<br>");

        });

      }