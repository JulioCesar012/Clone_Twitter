import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;

  .tweets {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tab = styled.div`
  width: 100%;
  
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--gray);
  border-bottom: 2px solid var(--gray);

  &:hover {
    color: var(--twitter);
    background: var(--twitter-dark-hover);
  }

`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
