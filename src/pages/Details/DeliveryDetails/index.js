import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  BackgroundPurple,
  Content,
  Container,
  Card,
  CardSituation,
  CardHeader,
  HeaderText,
  CardContent,
  ContentLabel,
  ContentText,
  Dates,
  Box,
  DateStart,
  ButtonBoxLeft,
  ButtonBoxCenter,
  ButtonBoxRight,
  Button,
  ButtonLabel,
  ButtonText,
} from './styles';

export default function DeliveryDetails({ route }) {
  const { id } = route.params;

  return (
    <Container>
      <BackgroundPurple>
        <Content>
          <Card>
            <CardHeader>
              <Icon name="local-shipping" size={24} color="#7d40e7" />
              <HeaderText>Informações da entrega</HeaderText>
            </CardHeader>

            <CardContent>
              <ContentLabel>DESTINATÁRIO</ContentLabel>
              <ContentText>Joao</ContentText>

              <ContentLabel>ENDEREÇO DE ENTREGA</ContentLabel>
              <ContentText>Joao</ContentText>

              <ContentLabel>PRODUTO</ContentLabel>
              <ContentText>Joao</ContentText>
            </CardContent>
          </Card>

          <CardSituation>
            <CardHeader>
              <Icon name="date-range" size={24} color="#7d40e7" />
              <HeaderText>Situação da entrega</HeaderText>
            </CardHeader>

            <CardContent>
              <ContentLabel>DESTINATÁRIO</ContentLabel>
              <ContentText>Joao</ContentText>

              <Dates>
                <DateStart>
                  <ContentLabel>DATA DE RETIRADA</ContentLabel>
                  <ContentText>Joao</ContentText>
                </DateStart>
                <DateStart>
                  <ContentLabel>DATA DE DESTINATÁRIO</ContentLabel>
                  <ContentText>Joao</ContentText>
                </DateStart>
              </Dates>
            </CardContent>
          </CardSituation>

          <Box>
            <ButtonBoxLeft>
              <Button>
                <Icon name="report-problem" size={26} color="#E74040" />
                <ButtonLabel>
                  <ButtonText>Informar Problema</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxLeft>

            <ButtonBoxCenter>
              <Button>
                <Icon name="info-outline" size={26} color="#e7ba40" />
                <ButtonLabel>
                  <ButtonText>Visualizar Problemas</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxCenter>

            <ButtonBoxRight>
              <Button>
                <Icon name="check" size={26} color="#7d40e7" />
                <ButtonLabel>
                  <ButtonText>Confirmar Entrega</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxRight>
          </Box>
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
