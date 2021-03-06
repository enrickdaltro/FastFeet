import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

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

  const [deliverymans, setDeliverymans] = useState([]);
  const [created, setCreated] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveryman() {
      setLoading(true);
      const response = await api.get(`deliveryman/${profile.id}`);

      setTimeout(() => {
        setDeliverymans(response.data);
        setCreated(
          format(parseISO(response.data.created_at), 'dd/MM/yyyy', {
            locale: pt,
          }),
        );
        setLoading(false);
      }, 1500);
    }
    loadDeliveryman();
  }, [profile.id]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Content>
          {loading ? (
            <ActivityIndicator size={30} />
          ) : (
            <>
              {loading ? (
                <Content />
              ) : (
                <Image
                  source={{
                    uri: deliverymans.avatar
                      ? deliverymans.avatar.url
                      : `https://api.adorable.io/avatars/285/${deliverymans.name}.png`,
                  }}
                />
              )}

              <Info>
                <FullName>Nome Completo</FullName>
                <Name>{deliverymans.name}</Name>

                <FullEmail>Email</FullEmail>
                <Email>{deliverymans.email}</Email>

                <FullDate>Data de cadastro</FullDate>
                <Date>{created}</Date>

                <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
              </Info>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
