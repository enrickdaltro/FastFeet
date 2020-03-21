import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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

export default function DeliveryCard() {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <HeaderTitle>Encomenda</HeaderTitle>
      </Header>

      <Progress></Progress>

      <Footer>
        <Column>
          <FooterLabel>Data</FooterLabel>
          <FooterContent>15/08/1996</FooterContent>
        </Column>
        <Column>
          <FooterLabel>Cidade</FooterLabel>
          <FooterContent>Salvador</FooterContent>
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
