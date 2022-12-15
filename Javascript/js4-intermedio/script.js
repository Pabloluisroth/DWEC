function getPokemonJson(pokemon) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {

    }).then((response)=>{
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json()
    }
    ).then((data)=>{
        populateInfoBox(data)
    }
    );

}

function populateInfoBox(data) {


    if (data.sprites.front_female) {
        document.querySelector("#sprite").src = data.sprites.front_female;
    }
    else {
        document.querySelector("#sprite").src = data.sprites.front_default;
    }

    document.querySelector("#nombre").innerHTML = data.name;
    document.querySelector("#altura").innerHTML = data.height;
    document.querySelector("#peso").innerHTML = data.weight;
    if (data.game_indices) {

        for (game in data.game_indices) {

            document.querySelector("#versiones").innerHTML += `<li> ${data.game_indices[game].version.name} </li>`;
        }

    }

    if (data.types) {

        for (type in data.types) {

            document.querySelector("#tipos").innerHTML += `<li> ${data.types[type].type.name} </li>`;
        }

    }

}

document.querySelector("#searchbarUserInput").addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getPokemonJson(e.target.value.toLowerCase());

    }
});