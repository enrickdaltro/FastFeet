import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  margin-top: 130px;
`;

export const Image = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin: 20px 0 50px;
`;

export const Info = styled.View`
  align-self: stretch;
  padding: 0 30px;
`;

export const FullName = styled.Text`
  font-size: 14px;
  color: #666;
`;
export const Name = styled.Text`
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const FullEmail = styled.Text`
  font-size: 14px;
  color: #666;
`;
export const Email = styled.Text`
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const FullDate = styled.Text`
  font-size: 14px;
  color: #666;
`;
export const Date = styled.Text`
  font-size: 26px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const LogoutButton = styled(Button)`
  background: #e74040;
`;
