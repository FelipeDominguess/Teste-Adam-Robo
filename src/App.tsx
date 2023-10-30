import React, { useState, useEffect } from 'react';
import { ReactQueryProvider } from './utils/react-query';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import axios from 'axios';
import md5 from 'md5'
import { AppContainer } from './appSyled';

export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const apibase = process.env.REACT_APP_MARVEL_API_BASE
if (!privateKey) {
  throw new Error('Chave privada não encontrada no ambiente');
}

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

function App() {
  const [character, setCharacter] = useState<{ id: number; name: string; description: string; thumbnail:{ path: string; extension: string; }; comics: {items:[{name:string}]}; events: {items:[{name:string}]};stories: {items:[{name:string}]}; series: {items:[{name:string}]};}[]>([]);
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
      setCharacter( response.data.data.results);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

 
  const cards = character.map((char) => (
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
