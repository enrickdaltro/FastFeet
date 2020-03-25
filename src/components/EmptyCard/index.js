import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text, Content } from './styles';

export default function EmptyCard({ icon, children }) {
  return (
    <Container>
      <Content>
        <Text>{children}</Text>
      </Content>
    </Container>
  );
}
