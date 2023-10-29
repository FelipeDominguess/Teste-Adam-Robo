import styled from "styled-components";

export const AppContainer = styled.div`
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