import React from 'react';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import DeliveryForm from '../../../components/DeliveryForm';

import api from '../../../services/api';
import history from '../../../services/history';

export default function DeliveryAdd() {
  const schema = Yup.object().shape({
    recipient_id: Yup.number().required('É preciso informar o destinatário.'),
    deliveryman_id: Yup.number().required('É preciso informar o destinatário.'),
    product: Yup.number().required('O produto é obrigatório'),
  });

  async function handleSubmit({ recipient_id, deliveryman_id, product }) {
    try {
      await api.post('/delivery', {
        recipient_id,
        deliveryman_id,
        product,
      });

      toast.success('Entrega criada!');
      history.push('/encomendas');
    } catch ({ response }) {
      console.tron.log(response.data.error);
      toast.error(response.data.error);
    }
  }

  return (
    <DeliveryForm
      title="Cadastro de encomendas"
      schema={schema}
      onSubmit={handleSubmit}
    />
  );
}
