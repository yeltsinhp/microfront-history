import api from "./api";

export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    return response.data; 
  } catch (error) {
    console.error(`Error fetching Pokémon data for ${pokemonName}:`, error);
    return null;
  }
};

export const getPokemonImage = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);

    return response.data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    console.error(`Error fetching image for ${pokemonName}:`, error);
    return null;
  }
};