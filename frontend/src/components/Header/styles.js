import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 10px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    ul {
      display: flex;

      a {
        font-weight: normal;
        font-size: 12px;
        margin-right: 10px;
        color: #999;

        &:hover {
          color: ${darken(0.2, '#999')};
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    justify-content: center;

    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #eee;
    margin-top: 3px;

    strong {
      display: block;
      color: #666;
      font-size: 14px;
    }

    p {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    border: 0;
    background: #de3b3b;
    display: flex;
    padding: 0 5px;

    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#de3b3b')};
    }

    strong {
      color: #fff;
      margin-left: 5px;
      font-weight: medium;
    }
  }
`;
