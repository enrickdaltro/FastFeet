import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background: #7d40e7;
  flex: 1;
  padding: 0 25px;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;
