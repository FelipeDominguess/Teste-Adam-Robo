import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 320px;
  border: 4px solid #e62429;
  max-height: 900px;
  height: 90%;
  overflow-y: auto;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const ThumbnailImageModal = styled.img`
  width: 250px;
`;

export const FigureImgModal = styled.figure`
  background: #e62429;
  padding: 0;
  width: 250px;
  margin: 0 auto;
`;
