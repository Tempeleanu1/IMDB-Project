var body = document.querySelector("body");
var moviesList = document.getElementsByClassName("movies-list-container")[0];
var prevLink = "";
var nextLink = "";

function getDataFromServer() {
    fetch("https://movies-api-siit.herokuapp.com/movies?take=12&skip=0")
        .then(parseResponse)
        .then(displayMovies)
}

function parseResponse(response) {
    return response.json();
}

function displayMovies(movies) {

    // remove existing movies
    while (moviesList.firstChild) {
        moviesList.removeChild(moviesList.firstChild);
    }

    // update pagination
    var currentPage = document.getElementsByClassName("current-page")[0];
    var totalPages = document.getElementsByClassName("total-pages")[0];

    currentPage.innerText = movies.pagination.currentPage;
    totalPages.innerText = movies.pagination.numberOfPages;

    // update prev and next buttons links
    prevLink = movies.pagination.links.prev;
    nextLink = movies.pagination.links.next;

    if(prevLink === null) {
        prevBtn.style.display = "none"
    } else {
        prevBtn.style.display = ""
    }

    if(nextLink === null) {
        nextBtn.style.display = "none"
    } else {
        nextBtn.style.display = ""
    }

    // create new movies
    for (var i = 0; i < movies.results.length; i++) {
        var movieItem = movies.results[i];
        createMovieContainer(movieItem);
    }
    console.log(movies)
}

function createMovieContainer(movieItem) {

    var divMovieContainer = document.createElement("div");
    divMovieContainer.classList.add("movie-item");

    var movieInterface = document.createElement("div");
    movieInterface.classList.add("movie-interface");

    var movieTitle = document.createElement("h2");
    movieTitle.innerHTML = movieItem.Title;

    var movieYear = document.createElement("p");
    movieYear.innerHTML = "Year: " + movieItem.Year;

    var movieImage = document.createElement("img");
    if(movieItem.Poster === undefined || movieItem.Poster === null){
        movieImage.src = "../images/default.jpg"
    } else {
        movieImage.src = movieItem.Poster;
    }
    movieImage.classList.add("movie-img");

    var seeMoreBtn = document.createElement("button");
    seeMoreBtn.classList.add("see-more-btn");
    seeMoreBtn.innerHTML = "Show more..."

    var movieDetailsContainer = document.createElement("div");
    movieDetailsContainer.classList.add("movie-details-container");

    var movieDetails = document.createElement("h3");
    movieDetails.innerHTML = "More movie details:"

    var runtime = document.createElement("p");
    runtime.innerHTML = "Runtime: " + movieItem.Runtime;

    var genre = document.createElement("p");
    genre.innerHTML = "Genre: " + movieItem.Genre;

    var language = document.createElement("p");
    language.innerHTML = "Language: " + movieItem.Language;

    var imdbRating = document.createElement("p");
    imdbRating.innerHTML = "IMDb Rating: " + movieItem.imdbRating;

    var country = document.createElement("p");
    country.innerHTML = "Country: " + movieItem.Country;

    var imdbVotes = document.createElement("p");
    imdbVotes.innerHTML = "IMDb Votes: " + movieItem.imdbVotes;

    var linkToImdb = document.createElement("p");
    var imdbMovieLink = document.createElement("a");
    imdbMovieLink.href = "https://www.imdb.com/title/" + movieItem.imdbID + "/?ref_=nv_sr_srsg_0";
    imdbMovieLink.innerText = "See on IMDb"


    movieInterface.appendChild(movieTitle);
    movieInterface.appendChild(movieYear);
    movieInterface.appendChild(imdbRating);
    movieInterface.appendChild(movieImage);
    movieInterface.appendChild(seeMoreBtn);
    movieDetailsContainer.appendChild(movieDetails);
    movieDetailsContainer.appendChild(runtime);
    movieDetailsContainer.appendChild(genre);
    movieDetailsContainer.appendChild(language);
    movieDetailsContainer.appendChild(country);
    movieDetailsContainer.appendChild(imdbVotes);
    movieDetailsContainer.appendChild(imdbMovieLink)
    movieDetailsContainer.appendChild(linkToImdb);
    movieDetailsContainer.style.display="none";


    divMovieContainer.appendChild(movieInterface);
    divMovieContainer.appendChild(movieDetailsContainer);
    moviesList.append(divMovieContainer);


    seeMoreBtn.addEventListener("click", function () {
        if (this.parentElement.parentElement.childNodes[1].style.display !== "none") {
            this.parentElement.parentElement.childNodes[1].style.display = "none";
            
            this.innerHTML = "Show more..."
        } else {
            
            this.parentElement.parentElement.childNodes[1].style.display = "block";
            this.innerHTML = "Show less...";
        }
    })
}


var prevBtn = document.getElementsByClassName("prev-btn")[0];
var nextBtn = document.getElementsByClassName("next-btn")[0];

prevBtn.addEventListener("click", function () {
    fetch(prevLink)
        .then(parseResponse)
        .then(displayMovies)
        .then(window.onbeforeunload)
})

nextBtn.addEventListener("click", function () {
    fetch(nextLink)
        .then(parseResponse)
        .then(displayMovies)
        .then(window.onbeforeunload)
})


window.onbeforeunload = () =>
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
    });



getDataFromServer();
