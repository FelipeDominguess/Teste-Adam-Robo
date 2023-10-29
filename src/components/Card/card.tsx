// Card.jsx
import React, { useState } from "react";
import {
  FigureImg,
  ItemContainer,
  ListContainer,
  NameDiv,
  ThumbnailImage,
} from "./cardStyle";
import { TitleCard } from "../Styles/typography";
import Modal from "../Modal/modal";
import StarBorder from '@mui/icons-material/StarBorder';
import StarFilled from '@mui/icons-material/Star';
import { openDB } from "../../utils/indexedDB";

const Card = ({ id, name, description, thumbnail, comics, events, stories, series }: { id: number; name: string; description: string; thumbnail: { path: string; extension: string };comics: {items:[{name:string}]}; events: {items: [{name:string}]};stories: {items:[{name:string}]}; series: {items:[{name:string}]} }) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  const [modalOpen, setModalOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false); // Novo estado

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  function toggleStar() {
    openDB().then(db => {
      const transaction = db.transaction(['favoritos'], 'readwrite');
      const store = transaction.objectStore('favoritos');

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
    }).catch(error => {
      console.error(error);
    });
  }
  return (
    <div>
      <ListContainer>
        <ItemContainer>
          <FigureImg>
            <ThumbnailImage src={imageUrl} alt={name} onClick={handleCardClick} />
          </FigureImg>
          <NameDiv>
            <TitleCard>{name}</TitleCard>
            <button style={{
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit',
              cursor: 'pointer',
              outline: 'inherit'
            }}
              onClick={toggleStar}
            >
              {isStarred ? <StarFilled style={{ color: 'yellow', background: 'none' }} /> : <StarBorder style={{ color: 'white', background: 'none', border: 'none', padding: '0', font: 'inherit', cursor: ' pointer', outline: 'inherit', }} />}
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
          closeModal={closeModal}
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
