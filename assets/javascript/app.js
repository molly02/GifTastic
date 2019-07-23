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
     
        var results = response.data;

        $("#gifs-appear-here").empty();
        
        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var rating = results[i].rating;
            
                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
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
                
                $("#gifs-appear-here").append(animalDiv);
                
            }
           
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

// need to add 'add button' function still

})