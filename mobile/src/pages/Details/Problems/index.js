import React, { useState } from 'react';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  Container,
  BackgroundPurple,
  Content,
  Form,
  TInput,
  SubmitButton,
} from './styles';

export default function Problems({ route }) {
  const { data } = route.params;
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    await api.post(`/delivery/problems/${data.id}`, {
      description,
    });
    Alert.alert('Problema informado com sucesso.');
  }

  return (
    <Container>
      <BackgroundPurple>
        <Content>
          <Form>
            <TInput
              name="description"
              value={description}
              onSubmitEditing={handleSubmit}
              onChangeText={setDescription}
              placeholder="Inclua aqui o problema que ocorreu na entrega."
            />

            <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
          </Form>
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
