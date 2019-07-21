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
            // create var that contains the still and one for animated
            var still = results[i].images.fixed_height_still.url;
            var animated = results[i].images.fixed_height.url;
            var animalImage = $("<img>");

            animalImage.attr("src", still);
            animalImage.attr("data-still", still);
            animalImage.attr("data-animate", animated);
            animalImage.attr("data-state", "still");
            animalImage.addClass("animal-image");
            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);

        }

    }) 
    
})

$(document).on("click", ".animal-image", function() {

    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})


// fixed position for css
// make all gifs go across then down
// 6.2 exercise 10 for clearing after
// look to past exercises
//6.2 09 for adding button
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