import React from 'react';

import Input from '~/components/Input';
import Button from '~/components/Button';

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

  return (
    <Container>
      <BackgroundPurple>
        <Content>
          <Form>
            <TInput placeholder="Inclua aqui o problema que ocorreu na entrega." />

            <SubmitButton>Enviar</SubmitButton>
          </Form>
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
