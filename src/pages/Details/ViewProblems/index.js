import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import {
  Container,
  BackgroundPurple,
  Content,
  Title,
  HeaderText,
  List,
  Card,
  Problem,
  Date,
} from './styles';

export default function ViewProblems({ route }) {
  const { data } = route.params;

  const deliveryId = data.id;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/problems/deliverys/${deliveryId}`);
      setProblems(response.data);
    }
    loadProblems();
  }, [deliveryId]);
  console.tron.log(problems);

  return (
    <Container>
      <BackgroundPurple>
        <Content>
          <Title>
            <HeaderText>Encomenda {data.id}</HeaderText>
          </Title>
          <List
            data={problems}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card>
                <Problem>{item.description}</Problem>
                <Date>
                  {format(parseISO(item.updatedAt), 'dd/MM/yyyy', {
                    locale: pt,
                  })}
                </Date>
              </Card>
            )}
          />
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
