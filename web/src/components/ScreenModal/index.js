import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';

import { Container, Box } from './styles';

export default function ScreenModal({ children, visible, title }) {
  const [show, setShow] = useState(false);

  function handleClose(e) {
    setShow(!show);
  }

  if (visible === show) {
    return null;
  }
  return (
    <Container {...visible}>
      <Box>
        <div>
          <h3>{title}</h3>
          <button type="button" onClick={e => handleClose(e)}>
            <MdClose size={20} />
          </button>
        </div>

        <p>{children}</p>
      </Box>
    </Container>
  );
}
