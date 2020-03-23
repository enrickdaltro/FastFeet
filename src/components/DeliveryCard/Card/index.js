import React from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderTitle,
  Footer,
  Column,
  FooterLabel,
  FooterContent,
  ButtonText,
} from './styles';

import ProgressBar from '../../ProgressBar';

export default function Card({ data, navigation }) {
  const formattedDate = format(parseISO(data.created_at), 'dd/MM/yyyy', {
    locale: pt,
  });

  function handleDetail(data) {
    navigation.navigate('DeliveryDetails', { data });
  }

  return (
    <>
      {!data.end_date ? (
        <>
          <Container>
            <Header>
              <Icon name="local-shipping" size={30} color="#7d40e7" />
              <HeaderTitle>Encomenda {data.id}</HeaderTitle>
            </Header>

            <ProgressBar data={data} />

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
                <TouchableOpacity onPress={() => handleDetail(data)}>
                  <ButtonText>Ver Detalhes</ButtonText>
                </TouchableOpacity>
              </Column>
            </Footer>
          </Container>
        </>
      ) : (
        <Header />
      )}
    </>
  );
}
