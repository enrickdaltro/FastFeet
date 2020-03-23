import React, { useState, useEffect } from 'react';

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
  const [problems, setProblems] = useState([
    { id: 1, description: 'Destinatário', date: '10/10/2020' },
    { id: 2, description: 'Destinatário', date: '10/10/2020' },
  ]);

  // useEffect(() => {
  //   async function loadProblems() {
  //     const response = await api.get(`/problems/${data.id}`);
  //     console.tron.log(response.data);
  //   }
  //   loadProblems();
  // }, [data.id]);

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
                <Date>{item.date}</Date>
              </Card>
            )}
          />
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
