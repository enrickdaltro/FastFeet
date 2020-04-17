import React from 'react';

import { Form } from '@unform/web';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Container, Title, PageContent, InputContent } from './styles';

import RecipientInput from './RecipientInput';
import DeliverymanInput from './DeliverymanInput';

import Input from '../Form/Input';

import history from '../../services/history';

export default function DeliveryForm({ onSubmit, title, ...rest }) {
  return (
    <Container>
      <Form onSubmit={onSubmit} {...rest}>
        <Title>
          <strong>{title}</strong>

          <aside>
            <button type="button" onClick={() => history.push('/encomendas')}>
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
          <div>
            <InputContent style={{ marginRight: 10 }}>
              <p>Destinatário</p>
              <RecipientInput name="recipient_id" />
            </InputContent>

            <InputContent>
              <p>Entrgador</p>
              <DeliverymanInput name="deliveryman_id" />
            </InputContent>
          </div>

          <footer>
            <InputContent>
              <Input
                placeholder="O nome do produto"
                type="text"
                label="Produto"
                name="product"
              />
            </InputContent>
          </footer>
        </PageContent>
      </Form>
    </Container>
  );
}
