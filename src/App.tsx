import React, { useState } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import axios from 'axios';
import md5 from 'md5'
import { useQuery } from 'react-query';
import { apiReponse } from './Interface';
import { AppContainer } from './appSyled';


export const publicKey = process.env.MARVEL_PUBLIC_KEY;
export const privateKey = process.env.MARVEL_PRIVATE_KEY;
export const apibase = process.env.MARVEL_API_BASE
if (!privateKey) {
  throw new Error('Chave privada não encontrada no ambiente');
}

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const fetchCharacter = async (searchTerm: string): Promise<apiReponse>  => {
  const response = await axios.get(
    searchTerm
      ? `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
      : `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}`
  );
  return response.data;
};

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useQuery<apiReponse>(['character', searchTerm], () => fetchCharacter(searchTerm));

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  
  const characters = data?.data.results;
  
  if (!characters || characters.length === 0) {
    return <div>Nenhum personagem encontrado.</div>;
  }
  

  const cards = characters.map((character) => (
    <Card
      key={character.id}
      description={character.description}
      id={character.id}
      name={character.name}
      thumbnail={character.thumbnail}
      comics={character.comics}
      events={character.events}
      series={character.series}
      stories={character.stories}
    />
  

  ));
  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
     <AppContainer>{cards}</AppContainer>

      <Footer />
    </>

  )};


export default App;
