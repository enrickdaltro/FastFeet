import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Deliverys from '../pages/Deliverys';
import DeliverysAdd from '../pages/Deliverys/DeliverysAdd';
import DeliverysEdit from '../pages/Deliverys/DeliverysEdit';

import DeliveryMan from '../pages/DeliveryMan';
import DeliveryManAdd from '../pages/DeliveryMan/DeliveryManAdd';
import DeliveryManEdit from '../pages/DeliveryMan/DeliveryManEdit';

import Recipient from '../pages/Recipient';
import RecipientAdd from '../pages/Recipient/RecipientAdd';
import RecipientEdit from '../pages/Recipient/RecipientEdit';

import Problems from '../pages/Problems';

// set routes of our application
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      {/* ENTREGAS */}
      <Route path="/encomendas" component={Deliverys} isPrivate />
      <Route path="/encomendas_cadastro" component={DeliverysAdd} isPrivate />
      <Route path="/encomendas_edicao" component={DeliverysEdit} isPrivate />

      {/* ENTREGADORES */}
      <Route path="/entregadores" component={DeliveryMan} isPrivate />
      <Route
        path="/entregadores_cadastro"
        component={DeliveryManAdd}
        isPrivate
      />
      <Route
        path="/entregadores_edicao"
        component={DeliveryManEdit}
        isPrivate
      />

      {/* DESTINATÁRIOS */}
      <Route path="/destinatarios" component={Recipient} isPrivate />
      <Route
        path="/destinatarios_cadastro"
        component={RecipientAdd}
        isPrivate
      />
      <Route path="/destinatarios_edicao" component={RecipientEdit} isPrivate />
      <Route path="/problemas" component={Problems} isPrivate />
    </Switch>
  );
}
