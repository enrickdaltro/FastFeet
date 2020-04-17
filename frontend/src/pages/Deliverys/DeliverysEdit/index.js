import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';

import DeliveryForm from '../../../components/DeliveryForm';

import { updateDeliveryRequest } from '../../../store/modules/delivery/actions';

export default function DeliveryEdit() {
    const delivery = useSelector(state => state.delivery.delivery);

    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        recipient_id: Yup.number().required(
            'É preciso informar o destinatário.'
        ),
        deliveryman_id: Yup.number().required(
            'É preciso informar o destinatário.'
        ),
        product: Yup.number().required('O produto é obrigatório')
    });

    function handleSubmit(data) {
        dispatch(updateDeliveryRequest(delivery.id, data));
    }

    return (
        <DeliveryForm
            initialData={delivery}
            onSubmit={handleSubmit}
            title="Edição de encomendas"
            schema={schema}
        />
    );
}
