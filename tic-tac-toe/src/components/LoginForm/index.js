import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';

function LoginForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
