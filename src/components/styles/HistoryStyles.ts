import styled from "styled-components";

export const HistoryContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(20, 20, 20, 0.95); /* Fondo oscuro */
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  width: 50%;
  max-width: 500px;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff5722;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }
`;

export const HistoryTitle = styled.h2`
  text-align: center;
  color: #fff; /* Blanco para contraste */
  font-size: 1.8rem;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const PokemonList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PokemonItem = styled.li`
  display: flex;
  align-items: center;
  background: rgba(50, 50, 50, 0.9); /* Más oscuro */
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 87, 34, 0.9); /* Color fuego */
  }
`;

export const PokemonImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 12px;
  border-radius: 50%;
  border: 2px solid #ff5722; /* Resaltado */
`;

export const PokemonName = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;

export const CloseButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    background: #e64a19;
  }
`;

export const BackToHomeButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #1a73e8; /* Azul para diferenciar */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;

  &:hover {
    background: #1558b0;
  }
`;

