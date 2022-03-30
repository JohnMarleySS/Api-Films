const keyAPI = 'api_key=ada93334886eaf4031b03215c527df5a';
const baseURL = 'https://api.themoviedb.org/3';
const api_URL = `${baseURL}/discover/movie?sort_by=popularity.desc&${keyAPI}`;


fetch(api_URL).then(res => res.json()).then(data => {
    console.log(data.results);
    mostrarFilmes(data.results);
})


function mostrarFilmes(data) {
    data.forEach(data => {
        const listFilms = document.createElement('div');
        listFilms.innerHTML = `
        <div>
            ${data.title}
        </div>
        `;
        document.getElementById("myDIV").appendChild(listFilms)

    });
}