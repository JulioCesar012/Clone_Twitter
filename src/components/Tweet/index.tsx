/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import userImg from "../../assets/user.svg";
import LogoProfile from "../../assets/profileJulio.jpg";
import LogoTweet from "../../assets/reactjs.png";

import {
  Container,
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <img src={userImg} />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <img src={LogoProfile} />
        </Avatar>

        <Content>
          <Header>
            <strong>juliofilho</strong>
            <strong>@Juliofilho012</strong>
            <Dot />
            <time>09 de jan</time>
          </Header>

          <Description>Desenvolvendo soluções com tecnologia</Description>

          <ImageContent>
            <img src={LogoTweet} />
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              500
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
