import React, { PropTypes } from 'react';

import FormContainer from './FormContainer';
import forms from '../forms.json';
import NavBar from '../components/NavBar';

const makeFormItems = formProps => (
  <FormContainer
    title={formProps.title}
    actionName={formProps.actionName}
    formInputs={formProps.formInputs}
    formClass={formProps.formClass}
    key={formProps.actionName}
  />
);

const AppBcoin = () => (
  <div className="container" role="main">
  	<NavBar appName="NOT Bcoin Boilerplate" />
    { forms.map(makeFormItems) }
  </div>
);

AppBcoin.propTypes = {
  children: PropTypes.node,
};

export default AppBcoin;
