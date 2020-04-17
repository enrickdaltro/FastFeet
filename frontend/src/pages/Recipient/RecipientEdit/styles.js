import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.div`
  margin: 30px 0 20px;
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 20px;
    color: #444;
  }

  aside {
    display: flex;
    flex-direction: row;

    button {
      width: 100px;
      height: 36px;

      background: #7d40e7;
      margin-left: 15px;
      color: #fff;
      font-weight: medium;

      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 5px;

        svg {
          margin-right: 5px;
        }
      }

      &:first-child {
        background: #ccc;

        &:hover {
          background: ${darken(0.03, '#ccc')};
        }
      }
    }
  }
`;

export const PageContent = styled.div`
  width: 800px;
  padding: 30px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.one {
    p {
      font-weight: bold;
    }
    input {
      height: 45px;
      width: 740px;
      color: #666;
      padding: 0 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 5px;
    }
  }

  div.two {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-evenly;

    div.street {
      flex: 2;
      margin-right: 15px;
    }

    p {
      font-weight: bold;
    }

    input {
      height: 45px;
      width: 100%;
      color: #666;
      padding: 0 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 5px;
    }

    div.complement {
      margin-left: 15px;
    }
  }

  div.three {
    display: flex;
    width: 100%;
    flex: 1;
    margin-top: 10px;
    justify-content: space-between;

    p {
      font-weight: bold;
    }

    input {
      height: 45px;
      width: 236px;
      color: #666;
      padding: 0 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 5px;
    }
  }
`;
