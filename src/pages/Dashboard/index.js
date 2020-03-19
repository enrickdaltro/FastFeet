import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Content,
  Header,
  Image,
  HeaderText,
  Label,
  Name,
  Exit,
} from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.deliveryman.profile);

  const [deliverymans, setDeliverymans] = useState(profile);

  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`deliveryman/${profile.id}`);

      setDeliverymans(response.data);
    }
    loadDeliveryman();
  }, [profile.id]);

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

          <HeaderText>
            <Label>Bem vindo de volta,</Label>
            <Name>{deliverymans.name}</Name>
          </HeaderText>

          <Exit>
            <TouchableOpacity>
              <Icon name="exit-to-app" size={24} color="#E74040" />
            </TouchableOpacity>
          </Exit>
        </Header>
      </Content>
    </Container>
  );
}
