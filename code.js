console.log("test");


$("runSearch").on("click", function() 
{
    	console.log("searched...");
    	searching();
   });


   
      function searching() {

     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {


      console.log(response);
  
       $("#wellSection").html("SEARCH RESULT");
       $("#wellSection").append("MORE SEARCH RESULTS");

        });

      }