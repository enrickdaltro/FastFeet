import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/FF-logo.png';
import { Container, Content, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <Image source={logo} />

        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="send"
          />

          <SubmitButton>Entrar no sistema</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
