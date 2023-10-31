// Card.jsx
import React, { useEffect, useState } from "react";
import {
  FigureImg,
  ItemContainer,
  ListContainer,
  NameDiv,
  ThumbnailImage,
} from "./cardStyle";
import { TitleCard } from "../Styles/typography";
import Modal from "../Modal/modal";
import StarBorder from "@mui/icons-material/StarBorder";
import StarFilled from "@mui/icons-material/Star";
import { openDB } from "../../utils/indexedDB";
import { InfoProps } from "../../Interface";

const Card = ({
  id,
  name,
  description,
  thumbnail,
  comics,
  events,
  stories,
  series,
  closeModal
}: InfoProps) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  const [modalOpen, setModalOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    openDB()
      .then((db) => {
        const transaction = db.transaction(["favoritos"], "readonly"); // Agora estamos abrindo uma transação somente para leitura.
        const store = transaction.objectStore("favoritos");
        const request = store.get(id);

        request.onsuccess = function () {
          setIsStarred(!!request.result); // Atualiza o estado isStarred com base na presença do item no banco de dados.
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal  = () => {
    setModalOpen(false);
  };
  function toggleStar() {
    openDB()
      .then((db) => {
        const transaction = db.transaction(["favoritos"], "readwrite");
        const store = transaction.objectStore("favoritos");

        const item = { id, name, description, thumbnail };
        const request = store.get(id);

        request.onsuccess = function () {
          if (request.result) {
            store.delete(id);
            setIsStarred(false);
          } else {
            store.add(item);
            setIsStarred(true);
          }
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <ListContainer>
        <ItemContainer>
          <FigureImg>
            <ThumbnailImage
              src={imageUrl}
              alt={name}
              onClick={handleCardClick}
            />
          </FigureImg>
          <NameDiv>
            <TitleCard>{name}</TitleCard>
            <button
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
              onClick={toggleStar}
            >
              {isStarred ? (
                <StarFilled style={{ color: "yellow", background: "none" }} />
              ) : (
                <StarBorder
                  style={{
                    color: "white",
                    background: "none",
                    border: "none",
                    padding: "0",
                    font: "inherit",
                    cursor: " pointer",
                    outline: "inherit",
                  }}
                />
              )}
            </button>
          </NameDiv>
        </ItemContainer>
      </ListContainer>

      {modalOpen && (
        <Modal
          id={id}
          name={name}
          description={description}
          thumbnail={thumbnail}
          closeModal={handleCloseModal }
          comics={comics}
          events={events}
          series={series}
          stories={stories}
        />
      )}
    </div>
  );
};

export default Card;
