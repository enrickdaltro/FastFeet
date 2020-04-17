import React, { useState, useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';

import api from '../../../services/api';

export default function DeliverymanInput({ name, ...rest }) {
  const [deliverymans, setDeliverymans] = useState([]);

  const selectRef = useRef(null);
  const { registerField, defaultValue, fieldName } = useField(name);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/deliveryman', {
        params: {
          name: '',
        },
      });

      const data = response.data.map(deliveryman => ({
        value: deliveryman.id,
        label: deliveryman.name,
      }));

      setDeliverymans(data);
    }
    loadData();
  }, []);

  const filterColors = inputValue => {
    return deliverymans.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterColors(inputValue));
    });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={deliverymans}
      placeholder="Selecione"
      loadOptions={promiseOptions}
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
