import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  text-align: center;
  padding: 30px;
  border-radius: 4px;

  img {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    strong {
      text-align: left;
      margin-bottom: 10px;
      font-size: 13px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 15px;
      color: #666;
    }

    span {
      align-self: flex-start;
      margin: 0 0 10px;
      color: #f64c75;
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      background: #7d40e7;
      color: #fff;
      font-weight: medium;
      border-radius: 4px;
      border: 0;
      margin-bottom: 20px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
