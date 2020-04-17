import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { registerField, defaultValue = '', fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={inputRef}>{label}</label>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}
