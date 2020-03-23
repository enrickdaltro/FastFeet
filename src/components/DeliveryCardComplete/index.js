import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardComplete from './CardComplete';

import api from '~/services/api';

import { List } from './styles';

export default function DeliveryCardComplete({ navigation }) {
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverys, setDeliverys] = useState([]);

  useEffect(() => {
    async function loadDeliverys() {
      const response = await api.get(`/delivery/${profile.id}`);

      setDeliverys(response.data);
    }

    loadDeliverys();
  }, [profile.id]);

  return (
    <List
      data={deliverys}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <CardComplete data={item} navigation={navigation} />
      )}
    />
  );
}