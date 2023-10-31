import React, { useState, useEffect } from "react";
import { ReactQueryProvider, useReactQuery } from "./utils/react-query";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Card from "./components/Card/card";
import axios from "axios";
import md5 from "md5";
import { AppContainer } from "./appStyled";
import { CharacterData } from "./Interface/index";
import { useQuery } from "react-query";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useQuery("characters", () =>
    getCharacter(searchTerm)
  );
  const { getCharacter } = useReactQuery();

  const characters = data?.data.results;

  const cards = characters?.map((char: any) => (
    <Card
      key={char.id}
      description={char.description}
      id={char.id}
      name={char.name}
      thumbnail={char.thumbnail}
      comics={char.comics}
      events={char.events}
      series={char.series}
      stories={char.stories}
      closeModal={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  ));
  return (
    <ReactQueryProvider>
      <Header setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <AppContainer>{cards}</AppContainer>
      )}
      <Footer />
    </ReactQueryProvider>
  );
}

export default App;
