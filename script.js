$(document).ready(async () => {


    const showData = () => {
        let data = JSON.parse(localStorage.getItem('movies')) || []

        for (let i = 0; i < data.length; i++) {

            $('#list').append(`<li>
            <span class='title'>${data[i].title}</span>
            <ul>
            <li><span class="titles">Rating:</span> ${data[i].rating}</li>
            <li><span class="titles">Description:</span> ${data[i].description}</li>
            <li><span class="titles">Genre:</span> ${data[i].genre}</li>
            <li><span class="titles">IBMD Link:</span> <a href="${data[i].imdb_link}">Click to watch in IMDB</a></li>
            <img class='imgs' src=${data[i].image}>
            
            </ul>
            
            </li><hr><br>`)
        }
    }

    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c708d67aa1msh6540c990ed8dfc8p1684b7jsnc66da04c16f2',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    }

    const newData = []
    $('#search').on('click', async () => {

        await $.ajax(settings).done(async (response) => {

            for (let i = 0; i < response.length; i++) {
                newData.push(response[i])
            }
            localStorage.setItem(`movies`, JSON.stringify(newData))
            showData()
        })
        
        
    })


    showData()
})