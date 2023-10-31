import React, { useState } from "react";
import Logo from "../../assets/download.png";
import SearchIcon from "@mui/icons-material/Search";
import {
  HeaderContainer,
  ImgLogo,
  Form,
  Label,
  SearchInput,
  SearchButton,
} from "./headerStyle";

const Header = ({ setSearchTerm }: any) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
  };

  return (
    <HeaderContainer>
      <ImgLogo src={Logo} />

      <Form onSubmit={handleSearch}>
        <Label>
          <SearchInput
            type="text"
            placeholder="Buscar"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
          />
        </Label>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </Form>
    </HeaderContainer>
  );
};

export default Header;
