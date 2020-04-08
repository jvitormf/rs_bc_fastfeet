import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Order from '../pages/Order';
import NewOrder from '../pages/Order/NewOrder';
import OrderUpdate from '../pages/Order/Update';

import Deliveryman from '../pages/Deliveryman';
import DeliverymanCreate from '../pages/Deliveryman/Create';
import DeliverymanUpdate from '../pages/Deliveryman/Update';

import Recipient from '../pages/Recipient';
import RecipientCreate from '../pages/Recipient/Create';
import RecipientUpdate from '../pages/Recipient/Update';

import Problem from '../pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/order" component={Order} isPrivate />
      <Route path="/order_new" component={NewOrder} isPrivate />
      <Route path="/order_update" component={OrderUpdate} isPrivate />

      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman_create"
        component={DeliverymanCreate}
        isPrivate
      />
      <Route
        path="/deliveryman_update"
        component={DeliverymanUpdate}
        isPrivate
      />

      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/recipient_create" component={RecipientCreate} isPrivate />
      <Route path="/recipient_update" component={RecipientUpdate} isPrivate />

      <Route path="/problem" component={Problem} isPrivate />

      <Route path="/" component={() => <h1>404: Página não encontrada</h1>} />
    </Switch>
  );
}
