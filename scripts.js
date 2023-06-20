const submit = document.querySelector('.form-submit')

async function buscarFilmes() {
    const filme = document.querySelector('.form-input').value
    
    if (filme) {
        const url = `http://www.omdbapi.com/?s=${filme}&apikey=e341acff`
        
        const response = await fetch(url)
        const data = await response.json()
        

        let lista = ''

        for (let i = 0; i < data.Search.length; i++) {

            lista += `<li class= "app-movies-card">`;
            lista += `<figure class="app-movies-figure">`
            lista += `<img class="app-movies-thumb" src="${data.Search[i].Poster}">`
            lista += `</figure>`
            lista += `<legend class="app-movies-legend">`
            lista += `<span class="app-movies-ano">${data.Search[i].Year}</span>`
            lista += `<h2 class="app-movies_title">${data.Search[i].Title}</h2>`
            lista += `</legend>`
            lista += `</li>`
        }
        const movies = document.querySelector('#movies')
        movies.innerHTML = lista
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    buscarFilmes()
})