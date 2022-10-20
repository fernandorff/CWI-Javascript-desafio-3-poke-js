import pokemons from "../src/pokemons.json";
import {
  capturarPokemon,
  criarTreinador,
  subirLevel,
  evoluir,
} from "../src/index.js";

describe("suite de testes do PokeJS", () => {
  const original = pokemons.map((x) => x);
  // Treinador será criado com nome correto

  it("Treinador será criado com nome correto", () => {
    const ash = criarTreinador("Ash Ketchum", 12, pokemons[0]);

    expect(ash.nome).toBe("Ash Ketchum");
  });

  // Treinador será criado com a idade correta

  it("Treinador será criado com a idade correta", () => {
    const ash = criarTreinador("Ash Ketchum", 12, pokemons[0]);

    expect(ash.idade).toBe(12);
  });

  // Treinador será criado com o pokemon inicial correto

  it("Treinador será criado com o pokemon inicial correto", () => {
    const ash = criarTreinador("Ash Ketchum", 12, pokemons[0]);

    expect(ash.pokemonInicial).toBe(pokemons[0]);
  });

  // Treinador terá seus pokemons atualizados após nova captura

  it("Treinador terá seus pokemons atualizados após nova captura", () => {
    const ash = criarTreinador("Ash Ketchum", 12, pokemons[0]);
    capturarPokemon(ash, pokemons[3]);

    expect(ash.capturados).toMatchObject([
      {
        evolucao: { id: 2, level: 5 },
        id: 1,
        level: 2,
        nome: "Bulbassaur",
        poderAtaque: 1,
      },
      {
        evolucao: { id: 5, level: 5 },
        id: 4,
        level: 2,
        nome: "Charmander",
        poderAtaque: 1,
      },
    ]);
  });

  // Deve subir o nível do pokemon corretamente

  it("Deve subir o nível do pokemon corretamente", () => {
    subirLevel(pokemons);

    expect(pokemons[0].level).toBe(3);
  });

  // Deve evoluir pokemon ao atingir o nível necessário

  it("Deve evoluir pokemon ao atingir o nível necessário", () => {
    subirLevel(pokemons);
    subirLevel(pokemons);
    subirLevel(pokemons);
    subirLevel(pokemons);

    expect(pokemons[0].nome).toBe("Ivysaur");
  });

  // Não deve evoluir pokemon caso não possua o level necessário

  it("Não deve evoluir pokemon caso não possua o level necessário", () => {
    const teste7 = original.map((x) => x);

    subirLevel(teste7);
    subirLevel(teste7);

    expect(teste7[0].nome).toBe("Bulbassaur");
  });
});
