import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 15px;
`;

export const HeaderTitle = styled.Text`
  margin-left: 10px;
  color: #7d40e7;
  font-weight: bold;
  font-size: 18px;
`;

export const Progress = styled.View`
  padding: 50px 0;
`;

export const Footer = styled.View`
  height: 80px;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.View`
  margin: 0 20px;
`;
export const FooterLabel = styled.Text`
  color: #999;
  font-size: 10px;
`;

export const FooterContent = styled.Text`
  color: #333;
  font-weight: bold;
  margin-top: 3px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
`;
