import styled from "styled-components";

export const HeaderContainer = styled.div`
 display: flex;
    align-items: center;
    background-color: #f8f8f8;
    width: 97%;
    gap: 19px;
    min-width: 190px;
    margin-top: 10px;
    margin-left: 10px;
`;


export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 97%;
  min-width: 190px;
`;

export const Label = styled.label`
  width: 100%;

`

export const SearchInput = styled.input`
  width: 100%;
  min-width: 190px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px; /* Add some padding for better spacing */
`;

export const SearchButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  width: 50px;
  border-radius: 5px;
  position: relative;
  right: 54px;
`;

export const ImgLogo = styled.img`
  width: 40px;
  height: 40px;
`