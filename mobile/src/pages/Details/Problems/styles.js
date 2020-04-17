import styled from 'styled-components/native';

import Button from '~/components/Button';

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
  justify-content: center;
  align-items: center;
  margin: 100px 20px 0;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 200px;
`;

export const TInput = styled.TextInput`
  padding: 10px 10px 200px;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 4px;
  color: #666;
  font-size: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #7d40e4;
`;
