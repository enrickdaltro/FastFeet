import styled from 'styled-components';

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

export const PageContent = styled.table`
  width: 100%;
  margin: 25px 0;
  border-collapse: collapse;

  th,
  td {
    padding: 5px;
    text-align: left;
    border-radius: 4px;
  }

  th.right,
  td.right {
    text-align: center;
  }

  td.left {
    padding-left: 55px;
  }

  td.right {
    div {
      align-items: right;
    }
  }

  td {
    color: #666;
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
