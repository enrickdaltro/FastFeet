import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 2px solid #ddd;
    }

    input {
      display: none;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 2px dashed #ddd;

      strong {
        font-size: 10px;

        color: #ddd;
      }
    }
  }
`;
