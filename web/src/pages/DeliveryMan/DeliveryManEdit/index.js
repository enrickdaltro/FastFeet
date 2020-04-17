import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { updateDeliverymanRequest } from '../../../store/modules/deliveryman/actions';

import { Container, Title, PageContent } from './styles';

import AvatarInput from '../DeliveryManAdd/AvatarInput';

import history from '../../../services/history';

export default function DeliveryManEdit() {
  const profile = useSelector(state => state.deliveryman.profile);

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    avatar_id: Yup.number(),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
  });

  function handleSubmit({ name, email, avatar_id }) {
    const data = {
      id: profile.id,
      name,
      email,
      avatar_id,
    };

    dispatch(updateDeliverymanRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Title>
          <strong>Edição de entregadores</strong>

          <aside>
            <button type="button" onClick={() => history.push('/entregadores')}>
              <div>
                <MdKeyboardArrowLeft size={20} color="#fff" />
                VOLTAR
              </div>
            </button>
            <button type="submit">
              <div>
                <MdCheck size={18} color="#fff" />
                SALVAR
              </div>
            </button>
          </aside>
        </Title>

        <PageContent>
          <AvatarInput name="avatar_id" />
          <div className="top">
            <p>Nome</p>
            <Input placeholder="Seu nome" name="name" />
          </div>
          <div className="bottom">
            <p>E-mail</p>
            <Input placeholder="Seu e-mail" name="email" />
          </div>
        </PageContent>
      </Form>
    </Container>
  );
}
