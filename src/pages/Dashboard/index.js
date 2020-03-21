import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

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
} from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverymans, setDeliverymans] = useState(profile);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`deliveryman/${profile.id}`);

      setDeliverymans(response.data);
    }
    loadDeliveryman();
  }, [profile.id]);

  function handleLogout() {
    dispatch(signOut());
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
      </Content>
    </Container>
  );
}
