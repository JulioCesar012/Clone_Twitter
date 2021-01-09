import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary-transparency);
  border-radius: 14px;
  margin-top: 5px;
`;

export const Item = styled.div`
  padding: 10px 16px;
  & + div {
    border-top: 1px solid var(--outline);
  }
  &:first-child {
    padding-top: 13px;
  }
  &:last-child {
    padding-bottom: 17px;
  }

  &:hover {
    background: var(--gray-transparency);
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
