import pokemons from "./pokemons.json" assert { type: "json" };

let pokemonsLivres = pokemons;

function criarTreinador(inputNome, inputIdade, inputPokemonInicial) {
  const treinador = {
    nome: inputNome,
    idade: inputIdade,
    pokemonInicial: inputPokemonInicial,
    listaPokemons: [inputPokemonInicial],
  };
  return treinador;
}

function capturarPokemon(treinador, pokemon) {
  const capturado = pokemon;

  treinador.listaPokemons.push(capturado);

  subirLevel(treinador.listaPokemons);
}

function subirLevel(lista) {
  lista.forEach((element) => {
    element.level += 1;
    evoluir(element, lista, pokemonsLivres);
  });
}

function evoluir(element, lista) {
  if (element.evolucao !== null) {
    if (element.level == element.evolucao.level) {
      let evoluido = {
        ...lista[element.evolucao.id - 1],
        level: element.evolucao.level,
      };
      console.log(evoluido);
      element = evoluido;
    }
  }
}

const ash = criarTreinador("Ash Ketchum", 12, pokemonsLivres[0]);

capturarPokemon(ash, pokemonsLivres[3]);
capturarPokemon(ash, pokemonsLivres[6]);
capturarPokemon(ash, pokemonsLivres[9]);
capturarPokemon(ash, pokemonsLivres[12]);
capturarPokemon(ash, pokemonsLivres[14]);

console.log(ash.listaPokemons);
