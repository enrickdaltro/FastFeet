import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderTitle,
  Progress,
  Footer,
  Column,
  FooterLabel,
  FooterContent,
  Button,
  ButtonText,
} from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <HeaderTitle>Encomenda {data.id}</HeaderTitle>
      </Header>

      <Progress></Progress>

      <Footer>
        <Column>
          <FooterLabel>Data</FooterLabel>
          <FooterContent>15/08/1996</FooterContent>
        </Column>
        <Column>
          <FooterLabel>Cidade</FooterLabel>
          <FooterContent>{data.recipient.city}</FooterContent>
        </Column>
        <Column>
          <Button>
            <ButtonText>Ver Detalhes</ButtonText>
          </Button>
        </Column>
      </Footer>
    </Container>
  );
}
