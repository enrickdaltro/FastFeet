import React, { useState } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, MoreList, More } from './styles';

export default function MoreBtn({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#666" size={20} />
      </Badge>

      <MoreList visible={visible}>
        <More>{children}</More>
      </MoreList>
    </Container>
  );
}
