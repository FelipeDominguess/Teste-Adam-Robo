import axios from "axios";
import { createContext, ReactNode, useContext } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import md5 from "md5";

const ReactQueryContext = createContext<any>(null);

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const apibase = process.env.REACT_APP_MARVEL_API_BASE;

if (!privateKey) {
  throw new Error("Chave privada não encontrada no ambiente");
}
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const useReactQuery = () => {
  async function getCharacter(searchTerm: string) {
    const request = await axios.get(
      searchTerm
        ? `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
        : `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
    const response = await request.data;
    console.log("Response:", response);
    return response;
  }
  return { getCharacter };
};

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryContext.Provider value={queryClient}>
        {children}
      </ReactQueryContext.Provider>
    </QueryClientProvider>
  );
};
