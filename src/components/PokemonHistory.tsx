import { useEffect, useState } from "react";
import { getPokemonImage } from "../services/pokemonService";
import {
  HistoryContainer,
  HistoryTitle,
  PokemonList,
  PokemonItem,
  PokemonImage,
  PokemonName,
  BackToHomeButton,
} from "./styles/HistoryStyles";

const PokemonHistory = () => {
  const [history, setHistory] = useState<{ name: string; image: string }[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("pokemonHistory") || "[]");

    // Obtener imágenes de los Pokémon en el historial
    const fetchHistoryData = async () => {
      const updatedHistory = await Promise.all(
        storedHistory.map(async (name: string) => {
          const image = await getPokemonImage(name);
          return { name, image };
        })
      );
      setHistory(updatedHistory);
    };

    fetchHistoryData();
  }, []);

  return (
    <HistoryContainer>
      <HistoryTitle>Historial de Pokémon Visitados</HistoryTitle>
      <BackToHomeButton onClick={() => (window.location.href = "http://localhost:3000/home")}>
        Volver al Home
      </BackToHomeButton>
      <PokemonList>
        {history.map((pokemon) => (
          <PokemonItem key={pokemon.name}>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
          </PokemonItem>
        ))}
      </PokemonList>

    </HistoryContainer>
  );
};

export default PokemonHistory;
