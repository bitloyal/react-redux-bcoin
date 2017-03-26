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





const App = () => (
  <div className="container bcoin" role="main">
  	<NavBar appName="NOT Bcoin Boilerplate" />
    { forms.map(makeFormItems) }
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
