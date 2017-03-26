import React, { PropTypes } from 'react';
import FormContainer from './FormContainer';
import forms from '../forms.json';

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
  <div className="container bcoin" role="main">
    { forms.map(makeFormItems) }
  </div>
);

AppBcoin.propTypes = {
  children: PropTypes.node,
};

export default AppBcoin;
