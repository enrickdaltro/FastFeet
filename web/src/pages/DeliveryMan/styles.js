import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.div`
  margin: 40px 0;

  strong {
    font-size: 20px;
    color: #444;
  }
`;
export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      top: 176px;
      left: 147px;
      color: #666;
    }

    input {
      height: 36px;
      width: 230px;
      padding-left: 30px;
      padding-right: 5px;
      color: #666;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  }

  button {
    display: flex;
    width: 120px;
    height: 36px;
    justify-content: center;
    align-items: center;
    background: #7d40e7;

    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }

    strong {
      color: #fff;
      margin-left: 5px;
      font-size: 14px;
      font-weight: medium;
    }
  }
`;

export const PageContent = styled.table`
  width: 100%;
  margin: 25px 0;
  border-collapse: collapse;
  th,
  td {
    padding: 5px;
    border-radius: 4px;
    text-align: center;
  }
  td {
    color: #666;
    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      border: 1px solid #eee;
      margin-top: 4px;
    }
    button {
      text-align: left;
    }
  }
  tbody tr {
    background: #fff;
    border: 0;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 10px 5px;
  }

  button {
    border: 0;
    background: none;

    &:disabled {
      opacity: 0;
    }
  }
`;
