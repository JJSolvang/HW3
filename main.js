let movies = [];

document.getElementById("movieInfo").addEventListener('click', function () {

    if (!(document.getElementById("movieTitle").value == "")) {
        
        console.log("Title: Passed");

        if (!(document.getElementById("movieRating").value == "")) { 

            if (Number.isInteger(parseInt(document.getElementById("movieRating").value)) === true && parseInt(document.getElementById("movieRating").value) > 0 && parseInt(document.getElementById("movieRating").value) < 6) {
                console.log("Rating: Passed");

                if (!(document.getElementById("movieYear").value == "")) { 

                    if (Number.isInteger(parseInt(document.getElementById("movieYear").value)) === true && parseInt(document.getElementById("movieYear").value) > 0) {
                        
                        console.log("Year: Passed");

                        if (movies.length < 10) {

                            movies[movies.length] = { name : document.getElementById("movieTitle").value, rating : document.getElementById("movieRating").value, year : document.getElementById("movieYear").value };

                            console.log(movies[movies.length - 1]);
                        } else {

                            alert("You have reached your maximum allowance of movies. Press F5 or refresh to start again.");
                        }
                    } else {

                        console.log("Year: Failed");
                        alert("Data incorrect. Movie could not be saved (Must be a positive integer).");
                    }
                } else {

                    console.log("Year: Failed");
                    alert("Data incorrect. Movie could not be saved (Missing Year).");
                }
            } else {

                console.log("Rating: Failed");
                alert("Data incorrect. Must be a rating 1 (worst) - 5 (best).");
            }
        } else {

            console.log("Rating: Failed");
            alert("Data incorrect. Movie could not be saved (Missing Rating).");
        }
    } else {

        console.log("Title: Failed");
        alert("Data incorrect. Movie could not be saved (Missing Title).");
    }
});

document.getElementById("movieShow").addEventListener('click', function () {

    document.getElementById("displayMovies").innerHTML = "";

    movies.sort((a, b) => {
        return a.rating - b.rating;
    });

    console.log(movies);

    for (let i = 0; i < movies.length; i++) {
        document.getElementById("displayMovies").innerHTML = document.getElementById("displayMovies").innerHTML + "<br/>" + (i + 1) + ") " + movies[i].name + ": " + movies[i].rating + "/5 - Released: " + movies[i].year;
    }
});