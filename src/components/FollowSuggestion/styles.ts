import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  > img {
    width: 49px;
    height: 49px;
    background: var(--gray);

    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
    color: var(--white);
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
  border: 1px solid var(--twitter);
`;
