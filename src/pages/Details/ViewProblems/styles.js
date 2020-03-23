import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background: #fff;
`;
export const BackgroundPurple = styled.View`
  height: 25%;
  width: 100%;
  background: #7d40e7;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: 100px 30px 0;
`;

export const Title = styled.View``;
export const HeaderText = styled.Text``;

export const List = styled.FlatList`
  position: absolute;
  width: 100%;
`;
export const Card = styled.View`
  margin-top: 15px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Problem = styled.Text`
  font-size: 16px;
  color: #666;
`;
export const Date = styled.Text`
  font-size: 12px;
  color: #999;
`;
