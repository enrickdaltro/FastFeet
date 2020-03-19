import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Image,
  Info,
  FullName,
  Name,
  FullEmail,
  Email,
  FullDate,
  Date,
  LogoutButton,
} from './styles';

export default function Profile() {
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

  const formattedData = format(
    parseISO(deliverymans.created_at),
    "dd'/'MM'/'yyyy",
    {
      locale: pt,
    },
  );

  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: deliverymans.avatar
              ? deliverymans.avatar.url
              : `https://api.adorable.io/avatars/285/${deliverymans.name}.png`,
          }}
        />

        <Info>
          <FullName>Nome Completo</FullName>
          <Name>{deliverymans.name}</Name>

          <FullEmail>Email</FullEmail>
          <Email>{deliverymans.email}</Email>

          <FullDate>Data de cadastro</FullDate>
          <Date>{formattedData}</Date>

          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </Info>
      </Content>
    </Container>
  );
}
