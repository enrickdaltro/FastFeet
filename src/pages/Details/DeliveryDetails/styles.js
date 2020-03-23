import styled from 'styled-components/native';

export const BackgroundPurple = styled.View`
  height: 25%;
  width: 100%;
  background: #7d40e7;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background: #fff;
`;

export const Content = styled.SafeAreaView`
  margin: 30px 20px;
`;
export const Card = styled.View`
  background: #fff;
  border: 2px solid #eee;
  border-radius: 4px;

  margin-top: 70px;
  padding: 15px;
`;

export const CardSituation = styled.View`
  background: #fff;
  border: 2px solid #eee;
  border-radius: 4px;

  margin-top: 10px;
  padding: 15px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  color: #7d40e7;
`;

export const CardContent = styled.View``;

export const ContentLabel = styled.Text`
  font-weight: bold;
  color: #999;
  margin-top: 12px;
`;

export const ContentText = styled.Text`
  margin-top: 4px;
  color: #666;
`;
export const Dates = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`;

export const DateStart = styled.View``;

export const Box = styled.View`
  flex-direction: row;
`;

export const ButtonBoxLeft = styled.View`
  background: #f8f9fd;
  margin-top: 10px;
  border: 1px solid #eee;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 20px 0;
`;

export const ButtonBoxCenter = styled.View`
  background: #f8f9fd;
  margin-top: 10px;
  border: 1px solid #eee;
  padding: 20px 0;
`;

export const ButtonBoxRight = styled.View`
  background: #f8f9fd;
  margin-top: 10px;
  border: 1px solid #eee;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
`;

export const ButtonLabel = styled.View`
  align-items: center;
  width: 58%;
`;
export const ButtonText = styled.Text`
  color: #777;
  margin-top: 5px;
  text-align: center;
`;
