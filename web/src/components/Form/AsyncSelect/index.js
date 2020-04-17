import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import { Container, SelectField } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
  const ref = useRef(null);

  const { fieldName, registerField } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.select.state.value;

    return selectValue ? selectValue.id : '';
  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'state.value',
        parseValue: parseSelectValue,
        clearValue: selectRef => {
          selectRef.select.clearValue();
        },
      });
    }
  }, [ref, registerField, fieldName]);

  return (
    <Container>
      <label htmlFor={ref}>{label}</label>
      <SelectField>
        <AsyncSelect
          cacheOptions
          name={fieldName}
          defaultValue
          ref={ref}
          isMulti={false}
          loadOptions={options}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.name}
          {...rest}
        />
      </SelectField>
    </Container>
  );
}
