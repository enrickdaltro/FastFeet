import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from './Card';

import api from '~/services/api';

import { List, Content, EmptyCard, CardText } from './styles';

export default function DeliveryCard({ navigation }) {
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverys, setDeliverys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDeliverys() {
      setLoading(true);
      const response = await api.get(`/delivery/${profile.id}`);

      setDeliverys(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }

    loadDeliverys();
  }, [profile.id, page]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size={30} />
      ) : deliverys.length < 1 ? (
        <>
          <Content>
            <EmptyCard>
              <Icon name="local-shipping" size={50} color="#999" />
              <CardText>
                Você ainda não possui nenhuma entrega cadastrada.
              </CardText>
            </EmptyCard>
          </Content>
        </>
      ) : (
        <List
          data={deliverys}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        />
      )}
    </>
  );
}
