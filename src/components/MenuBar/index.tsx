/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Button from "../Button";
import LogoProfile from "../../assets/profileJulio.jpg";

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ListIcon,
  MarkIcon,
  AddIcon,
  Botside,
  Avatar,
  ProfileData,
  NavigationIcon,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <h2>#</h2>
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <MarkIcon />
          <span>Items salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <AddIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Twettar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img className="Avatar" src={LogoProfile} />
        </Avatar>

        <ProfileData>
          <strong>juliofilho</strong>
          <span>@Juliofilho012</span>
        </ProfileData>

        <NavigationIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
