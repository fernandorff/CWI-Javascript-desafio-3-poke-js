import pokemons from "./pokemons.json";

export { criarTreinador, capturarPokemon, subirLevel };

function criarTreinador(inputNome, inputIdade, inputPokemonInicial) {
  const treinador = {
    nome: inputNome,
    idade: inputIdade,
    pokemonInicial: inputPokemonInicial,
    capturados: [inputPokemonInicial],
  };
  return treinador;
}

function capturarPokemon(treinador, pokemon) {
  treinador.capturados.push(pokemon);

  subirLevel(pokemons);
}

function subirLevel(todosPokemons) {
  todosPokemons.forEach((pokemon) => {
    pokemon.level += 1;
    pokemon = evoluir(pokemon);
  });
}

function evoluir(pokemon) {
  if (pokemon.evolucao !== null) {
    if (pokemon.level == pokemon.evolucao.level) {
      let evoluido = {
        ...pokemons[pokemon.evolucao.id - 1],
        level: pokemon.evolucao.level,
      };
      pokemons[pokemon.id - 1] = evoluido;
    }
  }
}
