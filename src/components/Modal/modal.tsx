import React, { useEffect, useState } from 'react';
import { ModalDiv, ModalContent } from "./modalStyle"
import styled from 'styled-components';
import { openDB } from '../../utils/indexedDB';
import { ThemeX, TitleName } from '../Styles/typography';
import axios from 'axios';
import md5 from 'md5';
import {BasicAccordion} from '../Accordion/accordion';



export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const apibase = process.env.REACT_APP_MARVEL_API_BASE
if (!privateKey) {
    throw new Error('Chave privada não encontrada no ambiente');
}
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

const Modal = ({ id, name, description, thumbnail, closeModal, comics, events, stories, series }: { id: number; name: string; description: string; thumbnail: { path: string; extension: string }; comics: { items: [{ name: string }] }; events: { items: [{ name: string }] }; stories: { items: [{name: string}]};series: {items:[{name: string}]} ;closeModal: () => void }) => {
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
    const [isStarred, setIsStarred] = useState(false);
    const [movies, setMovies] = useState<{ id: number; name: string; description: string; thumbnail: { path: string; extension: string; }; comics: { items: string }; events: {items: string} }[]>([]);



    const ThumbnailImageModal = styled.img`
        width: 250px;
    `

    const FigureImgModal = styled.figure`
        background: #e62429;
        padding: 0;
        width: 250px;
        margin: 0 auto;
    `

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `${apibase}ts=${time}&apikey=${publicKey}&hash=${hash}`
            );
            console.log('Dados da resposta:', response.data.data.results);
            setMovies(response.data.data.results);
        };

        fetchData();
    }, []);


    return (
        <ModalDiv>
            <ModalContent>
                <div style={{ display: 'flex', gap: '90px' }}>
                    <TitleName className="close" onClick={closeModal}>X</TitleName>
                    <TitleName>{name}</TitleName>
                </div>

                <FigureImgModal>
                    <ThumbnailImageModal src={imageUrl} alt={name} />
                </FigureImgModal>

                <ThemeX>{description}</ThemeX>

                <BasicAccordion comics={comics} events={events} stories={stories} series={series} />
        
            </ModalContent>
        </ModalDiv>
    );
};

export default Modal;
