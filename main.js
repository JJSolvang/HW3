let movieName = [];
let movieRating = [];
let movieYear = [];

document.getElementById("movieInfo").addEventListener('click', function () {

    if (!(document.getElementById("movieTitle").value == "")) {

        alert("food0");

        if (!(document.getElementById("movieRating").value == "")) { 

            if (Number.isInteger(parseInt(document.getElementById("movieRating").value)) === true) {
                alert("food1");

                if (!(document.getElementById("movieYear").value == "")) { 

                    if (Number.isInteger(parseInt(document.getElementById("movieYear").value)) === true) {
                        alert("food2");
                    }
                }
            }
        } else {
            alert("Data incorrect. Movie could not be saved.");
        }
    } else {
        alert("Data incorrect. Movie could not be saved.");
    }
});