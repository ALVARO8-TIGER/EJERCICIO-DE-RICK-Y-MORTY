

async function traerAsyncRick() {
    let data = {}
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/102,50,2,70,45,33,88,77,105,20,90,200")
        data = await response.json()
       
    } catch (error) {
        window.alert("Hubo un error")
        console.log(error)
    } 

    return data
    
}
for (let i = 0; i < 20; i++) {
    const datos = traerAsyncRick().then(response => {
        const articulo = document.createElement('article')
        articulo.className += "articulo"

        const TituloFicha = document.createElement('h2')
        TituloFicha.innerHTML=`${response[i].name}`

        const imagenficha = document.createElement('img')
        imagenficha.src=`${response[i].image}`

        const textoficha = document.createElement('p')
        textoficha.className += "info"
        textoficha.innerHTML=`Especie: ${response[i].species} <br> Estado: ${response[i].status} <br> Tipo: ${response[i].type} <br> Genero: ${response[i].gender} <br>`

        const padre = document.querySelector('#myDiv')

        padre.appendChild(articulo)
        articulo.appendChild(TituloFicha)
        articulo.appendChild(imagenficha)
        articulo.appendChild(textoficha)
        
    })
}

