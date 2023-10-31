import { List } from "@mui/material";
import React from "react";
import { FooterContainer, Column, Heading, SocialIcons } from "./footerstyle";

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Heading>Sobre Nós</Heading>
        <p>Conheça nossa história e missão.</p>
      </Column>
      <Column>
        <Heading>Produtos</Heading>
        <List>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Ofertas</li>
        </List>
      </Column>
      <Column>
        <Heading>Atendimento ao Cliente</Heading>
        <List>
          <li>FAQ</li>
          <li>Política de Devolução</li>
          <li>Termos e Condições</li>
        </List>
      </Column>
      <Column>
        <Heading>Siga-nos</Heading>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
