import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const InfoContainer = styled.div`
  text-align: center;
`;

export const TitleCartCard = styled.h2`
  font-size: 18px;
  margin: 0;
  color: white;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  width: 250px;
`;

export const FigureImg = styled.figure`
  background: #e62429;
  padding: 0;
  width: 250px;
`;

export const NameDiv = styled.div`
  padding: 16px 10px 17px;
  background: #151515;
  color: #e62429;
  transition: color 0.3s;
  position: relative;
  line-height: 1;
  width: 100%;
  max-width: 250px;
  clip-path: polygon(100% 0, 100% 90%, 0 100%, 0 0);
`;
