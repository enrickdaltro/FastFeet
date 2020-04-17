import React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { createDeliverymanRequest } from '../../../store/modules/deliveryman/actions';

import { Container, Title, PageContent } from './styles';

import AvatarInput from './AvatarInput';

import history from '../../../services/history';

export default function DeliveryManAdd() {
  const schema = Yup.object().shape({
    avatar_id: Yup.number(),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ id, name, email, avatar_id }) {
    const data = {
      id,
      name,
      email,
      avatar_id,
    };

    dispatch(createDeliverymanRequest(data));
  }
  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Title>
            <strong>Cadastro de entregadores</strong>

            <aside>
              <button
                type="button"
                onClick={() => history.push('/entregadores')}>
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
    </>
  );
}
