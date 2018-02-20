import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';
import styles from './SignUp.styles';
// import signUp from '../actions/users/sign-up';


import React, { Component } from 'react';
import ReactNative, {
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = { newUser: null };
    }

    componentDidMount() {
      this.refs.form.getComponent('name').refs.input.focus();
    }

    clearForm() {
      this.setState({ newUser: null });
    }

    onChange(newUser) {
      this.setState({ newUser });
    }

    onSubmit() {
      const { form } = this.refs;
      const newUser = form.getValue();
      if (!newUser) return;
      console.log(newUser);
      // signUp(newUser);
      this.clearForm();
    }

  render() {
    const Form = t.form.Form;

    return (
      
      <View style={styles.outerContainer}>
       <KeyboardAvoidingView
         behavior="padding"
         style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>

          <Form
            ref="form"
            type={Person}
            options={formOptions}
            ref="form"
            value={this.state.newUser}
            onChange={this.onChange}  />

          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor='#99d9f4'
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
          </KeyboardAvoidingView>
      </View>
    );
  }
}
