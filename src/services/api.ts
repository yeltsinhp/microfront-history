import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/", // 📌 URL base de la API de Pokémon
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
