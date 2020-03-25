import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import DeliveryCard from '~/components/DeliveryCard';
import DeliveryCardComplete from '~/components/DeliveryCardComplete';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Header,
  Image,
  HeaderContent,
  HeaderText,
  Label,
  Name,
  Right,
  Title,
  TitleLabel,
  Aside,
  AsideText,
  AsideTextRight,
} from './styles';

export default function Dashboard({ navigation }) {
  const isFocused = useIsFocused();
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverymans, setDeliverymans] = useState(profile);
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveryman() {
      setLoading(true);

      const response = await api.get(`deliveryman/${profile.id}`);

      setDeliverymans(response.data);
      setLoading(false);
    }
    if (isFocused) {
      loadDeliveryman();
    }
  }, [profile.id, isFocused]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handlePending() {
    if (active === false) {
      setActive(!active);
      setVisible(!visible);
    }
  }

  function handleDeliveries() {
    if (visible === false) {
      setActive(!active);
      setVisible(!visible);
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <Image
            source={{
              uri: deliverymans.avatar
                ? deliverymans.avatar.url
                : `https://api.adorable.io/avatars/285/${deliverymans.name}.png`,
            }}
          />

          <HeaderContent>
            <HeaderText>
              <Label>Bem vindo de volta,</Label>
              <Name>{deliverymans.name}</Name>
            </HeaderText>
          </HeaderContent>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="exit-to-app" size={24} color="#E74040" />
          </TouchableOpacity>
        </Header>

        <Title>
          <TitleLabel>Entregas</TitleLabel>

          <Right>
            <Aside onPress={handlePending}>
              <AsideText active={active}>Pendentes</AsideText>
            </Aside>
            <Aside onPress={handleDeliveries}>
              <AsideTextRight visible={visible}>Entregues</AsideTextRight>
            </Aside>
          </Right>
        </Title>

        {loading ? (
          <ActivityIndicator size={30} />
        ) : (
          <>
            {active ? (
              <DeliveryCard navigation={navigation} />
            ) : (
              <DeliveryCardComplete navigation={navigation} />
            )}
          </>
        )}
      </Content>
    </Container>
  );
}
