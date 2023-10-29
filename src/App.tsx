import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { ReactQueryProvider } from './utils/react-query';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import styled from 'styled-components';
import axios from 'axios';
import md5 from 'md5'

const AppContainer = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  flex-direction: column;
  align-content: stretch;
  
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    background-color: white;
    flex-direction: row;
    align-content: stretch;
  }
`;

export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const apibase = process.env.REACT_APP_MARVEL_API_BASE
if (!privateKey) {
  throw new Error('Chave privada não encontrada no ambiente');
}

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

function App() {
  const [movies, setMovies] = useState<{ id: number; name: string; description: string; thumbnail:{ path: string; extension: string; }; comics: {items:[{name:string}]}; events: {items:[{name:string}]};stories: {items:[{name:string}]}; series: {items:[{name:string}]};}[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        searchTerm
          ? `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
          : `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      console.log('Dados da resposta:', response.data.data.results);
      setMovies( response.data.data.results);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

 
  const cards = movies.map((movie) => (
    <Card
      key={movie.id}
      description={movie.description}
      id={movie.id}
      name={movie.name}
      thumbnail={movie.thumbnail}
      comics={movie.comics} 
      events={movie.events}
      series={movie.series}
      stories={movie.stories}
      />

  ));
  return (
    <ReactQueryProvider>
      <Header setSearchTerm={setSearchTerm}  />
      {loading ? <div>Carregando...</div> : <AppContainer>{cards}</AppContainer>}
      
      <Footer />
    </ReactQueryProvider>
  );
}

export default App;
