import React, { useState, useEffect } from 'react';

import { Container, List, Content, Step, Circle, Name } from './styles';

export default function ProgressBar({ data }) {
  const [progress, setProgress] = useState([
    { key: 1, label: 'Aguardando', active: true },
    { key: 2, label: 'Retirada', active: false },
    { key: 3, label: 'Entregue', active: false },
  ]);

  useEffect(() => {
    async function loadStatus() {
      if (data.created_at && !data.start_date && !data.end_date) {
        setProgress([
          { key: 1, label: 'Aguardando', active: true },
          { key: 2, label: 'Retirada', active: false },
          { key: 3, label: 'Entregue', active: false },
        ]);
      }
      if (data.start_date && !data.end_date) {
        setProgress([
          { key: 1, label: 'Aguardando', active: true },
          { key: 2, label: 'Retirada', active: true },
          { key: 3, label: 'Entregue', active: false },
        ]);
      }
    }
    loadStatus();
  }, [data]);

  return (
    <Container>
      <List
        data={progress}
        keyExtractor={progress => String(progress.key)}
        renderItem={({ item }) => (
          <Content>
            <Step>
              <Circle active={item.active} />
              <Name>{item.label}</Name>
            </Step>
          </Content>
        )}
      />
    </Container>
  );
}
