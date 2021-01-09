/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Feed from "../Feed";

import LogoProfile from "../../assets/profileJulio.jpg";
import BannerTwitter from "../../assets/bannertwitter.jpeg";

import {
  Container,
  Banner,
  ProfileData,
  LocationIcon,
  CalendarIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <img src={BannerTwitter} />
        <img className="Avatar" src={LogoProfile} />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>juliofilho</h1>
        <h2>@Juliofilho012</h2>

        <p>
          I'm a Full Stack programmer, I love technology and develop solutions,
          let's program?
          <a href="https://github.com/JulioCesar012">@JulioCesar012</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ubatuba SP - Brasil
          </li>

          <li>
            <CalendarIcon />
            Ingressou em janeiro de 2021
          </li>
        </ul>

        <Followage>
          <span>
            <strong>25</strong> Seguindo
          </span>

          <span>
            <strong>0</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
