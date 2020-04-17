import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
  text-align: center;
  position: relative;
  svg {
    margin-top: 6px;
  }
  position: relative;
`;

export const Badge = styled.button`
  border: none;
  background: none;
  position: relative;
  z-index: 0;
`;

export const MoreList = styled.div`
  z-index: 1;
  position: absolute;
  width: 150px;
  left: calc(50% - 76px);
  background: #fff;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;

    left: calc(50% - 9px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f5f5f5;
  }
`;

export const More = styled.div`
  margin: 0 10px;
  display: ${props => (props.hasView ? 'none' : 'flex')};
  flex-direction: column;
  text-align: center;
  justify-content: center;

  button {
    border: 0;
    background: none;
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 5px 0;

    svg {
      margin-right: 5px;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  /* svg {
    position: relative;
    margin-left: 5px;
    margin-right: 10px;
    bottom: 2px;
  }

  a {
    color: #666;
    font-size: 13px;
  } */
`;
