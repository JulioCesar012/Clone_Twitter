/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import JavascriptImg from "../../assets/javascript.jpg";

import { Container, ContextNews } from "./styles";

const News: React.FC = () => {
  return (
    <Container>
      <ContextNews>
        <span>Assuntos do momento no Brasil</span>
        <strong>IA e o futuro da automação</strong>
      </ContextNews>
      <img src={JavascriptImg} />
    </Container>
  );
};

export default News;
