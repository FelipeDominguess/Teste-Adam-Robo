// import axios from "axios";
// import { time } from "console";
// import { useState, useEffect } from "react";

// export const [movies, setMovies] = useState<{ id: number; name: string; description: string; thumbnail:{ path: string; extension: string; }}[]>([]);
// export const [searchTerm, setSearchTerm] = useState('');
// export const [loading, setLoading] = useState(true);


// export const fecthApi = ({searchTerm}: any) => {
//   useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     const response = await axios.get(
//       searchTerm
//         ? `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
//         : `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
//     );
//     console.log('Dados da resposta:', response.data.data.results);
//     setMovies( response.data.data.results);
//     setLoading(false);
//   };

//   fetchData();
// }, [searchTerm])
// };