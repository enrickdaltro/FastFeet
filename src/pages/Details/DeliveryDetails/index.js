import React from 'react';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function DeliveryDetails({ route }) {
  const { id } = route.params;
  console.tron.log(id);

  return <Background></Background>;
}
