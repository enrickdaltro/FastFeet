import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: #fff;
  width: 500px;

  border: 0;
  border-radius: 4px;
  padding: 20px;

  div {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: 0;

      svg {
        transition: transform 0.7s;

        &:hover {
          -moz-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
    }
  }

  p {
    margin: 20px 0;
  }
`;
