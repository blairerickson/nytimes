console.log("test code");


$( "#runSearch" ).click(function() {
  console.log( "Handler for .click() called." );
  getData();
});

$('form').serialize();



function getData()
{
	console.log("searched function");

var wordsearch = document.getElementById("searchTerm").value;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5ffb6633b0d147acb2fc12629521d06e",
  'q': wordsearch
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
    console.log(result.response.docs[0]);

}).fail(function(err) {
  throw err;
});


console.log(wordsearch);



}