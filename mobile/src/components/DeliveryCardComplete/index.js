import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CardComplete from './CardComplete';

import api from '~/services/api';

import { List, Content, EmptyCard, CardText } from './styles';

export default function DeliveryCardComplete({ navigation }) {
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverys, setDeliverys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliverys() {
      setLoading(true);

      const response = await api.get(`/delivery/${profile.id}`);

      setDeliverys(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    loadDeliverys();
  }, [profile.id]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size={30} />
      ) : deliverys.length < 1 ? (
        <>
          <Content>
            <EmptyCard>
              <Icon name="local-shipping" size={50} color="#999" />
              <CardText>Você ainda não fez nenhuma entrega.</CardText>
            </EmptyCard>
          </Content>
        </>
      ) : (
        <List
          data={deliverys}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CardComplete data={item} navigation={navigation} />
          )}
        />
      )}
    </>
  );
}
