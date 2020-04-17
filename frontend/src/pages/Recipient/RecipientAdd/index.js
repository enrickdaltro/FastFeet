import React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { createRecipientRequest } from '../../../store/modules/recipient/actions';

import { Container, Title, PageContent } from './styles';

import history from '../../../services/history';

export default function RecipientAdd() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    street: Yup.string().required('A rua é obrigatória.'),
    number: Yup.string().required('O número é obrigatório.'),
    complement: Yup.string(),
    state: Yup.string().required('O estado é obrigatório.'),
    city: Yup.string().required('A cidade é obrigatória.'),
    zipcode: Yup.string().required('O CEP é obrigatório.'),
  });

  function handleSubmit({
    id,
    name,
    street,
    number,
    complement,
    state,
    city,
    zipcode,
  }) {
    const data = {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    };

    dispatch(createRecipientRequest(data));
  }
  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Title>
            <strong>Cadastro de destinatários</strong>

            <aside>
              <button
                type="button"
                onClick={() => history.push('/destinatarios')}>
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
            <div className="one">
              <div>
                <p>Nome</p>
                <Input placeholder="Seu nome" name="name" />
              </div>
            </div>
            <div className="two">
              <div className="street">
                <p>Rua</p>
                <Input placeholder="Sua rua" name="street" />
              </div>
              <div>
                <p>Número</p>
                <Input placeholder="Seu número" name="number" />
              </div>
              <div className="complement">
                <p>Complemento</p>
                <Input placeholder="Seu complemento" name="complement" />
              </div>
            </div>
            <div className="three">
              <div>
                <p>Cidade</p>
                <Input placeholder="Sua cidade" name="city" />
              </div>
              <div>
                <p>Estado</p>
                <Input placeholder="Seu estado" name="state" />
              </div>
              <div>
                <p>CEP</p>
                <Input placeholder="Seu CEP" name="zipcode" />
              </div>
            </div>
          </PageContent>
        </Form>
      </Container>
    </>
  );
}
