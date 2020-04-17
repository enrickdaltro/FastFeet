import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span.status {
    padding: 5px;
  }

  span.status-retirada {
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 12px;
    padding: 2px 5px 2px 2px;
    font-weight: medium;
    background: #bad2ff;
    color: #4d85ee;

    svg {
      margin-right: 2px;
    }
  }

  span.status-entregue {
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 12px;
    padding: 2px 5px 2px 2px;
    font-weight: medium;
    background: #dff0df;
    color: #2ca42b;

    svg {
      margin-right: 2px;
    }
  }

  span.status-pendente {
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 12px;
    padding: 2px 5px 2px 2px;
    font-weight: medium;
    background: #f0f0df;
    color: #c1bc35;

    svg {
      margin-right: 2px;
    }
  }

  span.status-cancelada {
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 12px;
    padding: 2px 5px 2px 2px;
    font-weight: medium;
    background: #fab0b0;
    color: #de3b3b;

    svg {
      margin-right: 2px;
    }
  }
`;
