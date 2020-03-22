import React from 'react';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

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
  const formattedDate = format(parseISO(data.start_date), 'dd/MM/yyyy', {
    locale: pt,
  });

  console.tron.log(formattedDate);
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
          <FooterContent>{formattedDate}</FooterContent>
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
