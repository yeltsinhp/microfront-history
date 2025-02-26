import api from "./api";

// 📌 Obtener los datos completos de un Pokémon por su nombre
export const getPokemonData = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    return response.data; // Devuelve todos los datos del Pokémon
  } catch (error) {
    console.error(`Error fetching Pokémon data for ${pokemonName}:`, error);
    return null;
  }
};

export const getPokemonImage = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    
    // 📌 Usamos official-artwork, que siempre tiene imagen
    return response.data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    console.error(`Error fetching image for ${pokemonName}:`, error);
    return null;
  }
};