import React, { useState } from 'react';

import { Container, List, Content, Step, Circle, Name } from './styles';

export default function ProgressBar({ data }) {
  const [progress, setProgress] = useState([
    { key: 1, label: 'Aguardando', active: true },
    { key: 2, label: 'Retirada', active: false },
    { key: 3, label: 'Entregue', active: false },
  ]);

  return (
    <Container>
      <List
        data={progress}
        keyExtractor={progress => String(progress.key)}
        renderItem={({ item }) => (
          <Content>
            <Step>
              <Circle />
              <Name>{item.label}</Name>
            </Step>
          </Content>
        )}
      />
    </Container>
  );
}
