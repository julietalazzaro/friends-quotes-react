import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase.js";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #9d65c9 0%,
    #9d65c9 10%,
    #5d54a4 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size, 0.3s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  //cargar frase inicial

  React.useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const api = await fetch(
      "https://friends-quotes-api.herokuapp.com/quotes/random"
    );
    const frase = await api.json();
    setFrase(frase);
  };

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={handleClick}>Obtener frase</Boton>;
    </Contenedor>
  );
}

export default App;
