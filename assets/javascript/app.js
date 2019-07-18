$(document).ready(function(){


   $("button").on("click", function(){

    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=2UD0Bpu5tljRD3eZcOezMKLrWzlDv5oB&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        console.log(queryURL);
        console.log(response);

       // check pausing gits exercise, how to reference still and animated gifs? / different links? 
       // 2 links? one for still and one for animated gifs? 
       var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");

            animalImage.attr("src", results[i].images.fixed_height.url);
            
            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);

        }

    })
    
    
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("still"));
        $(this).attr("data-state", "still");
    }

   })


// fixed position for css
// make all gifs go across then down

// look to past exercises

// have them be frozen and start moving only once clicked
// be able to add a button and click on it as well
// loop buttons in a string?
// clear current gifs and replace with new ones when new button is clicked


// generate only g - pg -13 gifs



//  Be sure to read about these GIPHY parameters (hint, hint):
// `q`
// `limit`
// `rating`



})