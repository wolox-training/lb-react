import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm';

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

const mapStateToProps = store => {};

export default connect(mapStateToProps)(ContactPage);
