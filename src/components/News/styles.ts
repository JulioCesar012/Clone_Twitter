import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-size: 14px;
  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
  > img {
    margin-left: 1.5rem;
    height: 45px;
    background-image: cover;
    border-radius: 10px;
  }
`;

export const ContextNews = styled.div`
    display: flex;
    flex-direction: column;
`;