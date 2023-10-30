import styled from "styled-components";

  export const FooterContainer = styled.footer`
  background: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: 97%;

  @media (max-width: 606px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
 
    display: flex;
  }
`;


export const Column = styled.div`
  flex: 1;
  margin: 0 20px;
  max-width: 250px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Heading = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.9em;
  color: #555;
`;

export const SocialIcons = styled.div`
  font-size: 1.5em;
  color: #555;
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 0 auto;
`;
