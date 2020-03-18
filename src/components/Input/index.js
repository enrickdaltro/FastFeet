import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ icon, style, ...rest }, ref) {
  return (
    <Container styles={style}>
      {icon && <Icon name={icon} size={20} color="#999" />}
      <TInput ref={ref} {...rest} />
    </Container>
  );
}

export default forwardRef(Input);
