import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Order from '../pages/Order';
import NewOrder from '../pages/Order/NewOrder';
import EditOrder from '../pages/Order/EditOrder';

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

      <Route path="/order/new" component={NewOrder} isPrivate />
      <Route path="/order/edit" component={EditOrder} isPrivate />
      <Route path="/order" component={Order} isPrivate />

      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/deliveryman_new" component={DeliverymanCreate} isPrivate />
      <Route path="/deliveryman_edit" component={DeliverymanUpdate} isPrivate />

      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/recipient_new" component={RecipientCreate} isPrivate />
      <Route path="/recipient_edit" component={RecipientUpdate} isPrivate />

      <Route path="/problem" component={Problem} isPrivate />

      <Route path="/" component={() => <h1>404: Página não encontrada</h1>} />
    </Switch>
  );
}
