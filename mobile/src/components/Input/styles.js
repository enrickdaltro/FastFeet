import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 0 15px;
  height: 45px;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 15px;
`;
