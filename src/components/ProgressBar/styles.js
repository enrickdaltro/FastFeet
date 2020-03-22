import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #7d40e7;
  border-bottom-width: 1px;
  margin-bottom: 20px;
`;
export const Content = styled.View``;
export const Step = styled.View`
  justify-content: center;
  flex-direction: row;
`;
export const Circle = styled.View`
  background: ${props => (props.active ? `#7d40e7` : `#fff`)};
  border: ${props => (!props.active ? `1px solid #7d40e7` : `0`)};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  bottom: -5px;
`;
export const Name = styled.Text`
  font-size: 10px;
  color: #999999;
  bottom: -40px;
  margin-left: -10px;
  position: absolute;
  max-width: 60px;
  min-height: 30px;
`;
