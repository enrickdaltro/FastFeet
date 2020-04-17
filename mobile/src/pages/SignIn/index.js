import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/FF-logo.png';
import { Container, Content, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email));
  }

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
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
