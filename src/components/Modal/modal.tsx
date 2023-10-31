import React, { useEffect, useState } from "react";
import {
  ModalDiv,
  ModalContent,
  FigureImgModal,
  ThumbnailImageModal,
} from "./modalStyle";
import { ThemeX, TitleName } from "../Styles/typography";
import axios from "axios";
import md5 from "md5";
import { BasicAccordion } from "../Accordion/accordion";
import { InfoProps, CharacterData } from "../../Interface";
import { useQuery } from "react-query";
import { useReactQuery } from "../../utils/react-query";

export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const apibase = process.env.REACT_APP_MARVEL_API_BASE;
if (!privateKey) {
  throw new Error("Chave privada não encontrada no ambiente");
}
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const Modal = ({
  id,
  name,
  description,
  thumbnail,
  closeModal,
  comics,
  events,
  stories,
  series,
}: InfoProps) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useQuery("characters", () =>
    getCharacter(searchTerm)
  );
  const { getCharacter } = useReactQuery();

  return (
    <ModalDiv>
      <ModalContent>
        <div style={{ display: "flex", gap: "90px" }}>
          <TitleName className="close" onClick={closeModal}>
            X
          </TitleName>
          <TitleName>{name}</TitleName>
        </div>

        <FigureImgModal>
          <ThumbnailImageModal src={imageUrl} alt={name} />
        </FigureImgModal>

        <ThemeX>{description}</ThemeX>

        <BasicAccordion
          comics={comics}
          events={events}
          stories={stories}
          series={series}
        />
      </ModalContent>
    </ModalDiv>
  );
};

export default Modal;
