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
var startYear = document.getElementById("startYear").value;
var endYear = document.getElementById("endYear").value;
var resultCount = document.getElementById("numRecordsSelect").value;

 console.log(resultCount);


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5ffb6633b0d147acb2fc12629521d06e",
  'q': wordsearch,
  //   'begin_date': startYear,
  // 'end_date': endYear
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
    console.log(result.response.docs[0]);


console.log(wordsearch);
console.log(result.response.docs[0].web_url);


for (var i = 0; i < resultCount; i++) {

$("#wellSection").append('<h2>' + result.response.docs[i].headline.main + '</h2><br>');
$("#wellSection").append(result.response.docs[i].web_url + '<br>');
$("#wellSection").append(result.response.docs[i].type_of_material + '<br>');
$("#wellSection").append('<i>' + result.response.docs[i].snippet  + '</i><br><div class="divider"></div><br>');

}

}).fail(function(err) {
  throw err;
});


}