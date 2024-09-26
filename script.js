const API_KEY = '4cd30aaf2d52859415ba4640a33acd47'
const API_POPULAR = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4cd30aaf2d52859415ba4640a33acd47'
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?query='


getMovie(API_POPULAR)

async function getMovie(url) {
    const resp = await fetch(url)
    const respData = await resp.json()
    console.log(respData)
    allMovies(respData)
}


function allMovies(data) {
const movies  = document.querySelector('.movies')
document.querySelector('.movies').innerHTML = ''

    data.results.forEach((movie) => {
        const movieCard = document.createElement('div')
        movieCard.classList.add('card')
        movieCard.innerHTML = `
                    <div class="card__image">
                    <div class="card__info-wrap">
                        <div class="card__info"><i class="fa-solid fa-info"></i></div>
                        <div class="card__overflow">${movie.overview}
                        </div>
                    </div>
                        <img class="card__image_img" src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" 
                             alt="${movie.title}">
                    </div>
                    <div class="card__description">
                        <h2 class="card__title">
                        ${movie.title}
                        </h2>
                        <p class="card__rate">
                            ${movie.vote_average.toFixed(1)}
                        </p>
                    </div>
        `
        movies.appendChild(movieCard)
    })   

}


const form = document.querySelector('form')
const search = document.querySelector('input')
const searchIcon = document.querySelector('.search-icon')

window.onload = function() {
    search.focus();
};

function clearInput() {
    search.value = "";
    search.focus();
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchResult = `${API_SEARCH}${search.value}&api_key=4cd30aaf2d52859415ba4640a33acd47`
    if (search.value) {
        getMovie(searchResult)
    }
})
