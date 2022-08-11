import React, {Fragment} from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import styles from './SignUpScreen.style';

import Separator from '../../components/Separator/Separator';
import {Formik} from 'formik';

const SignUpScreen = ({navigation}) => {
  const initialFormValues = {
    email: '',
    password: '',
    passwordAgain: '',
  };

  function handleFormSubmit(formValues) {
    console.log(formValues);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>CodeTalks</Text>
      </View>
      <View style={styles.input_and_buttons_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <Fragment>
              <TextInput
                placeholder="e-postanızı giriniz..."
                placeholderTextColor={'white'}
                style={styles.input}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <Separator />
              <TextInput
                placeholder="şifrenizi giriniz..."
                placeholderTextColor={'white'}
                style={styles.input}
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
              />
              <Separator />
              <TextInput
                placeholder="şifrenizi tekrar giriniz..."
                placeholderTextColor={'white'}
                style={styles.input}
                onChangeText={handleChange('passwordAgain')}
                value={values.passwordAgain}
                secureTextEntry
              />
              <Separator />
              <View style={styles.buttons_container}>
                <View style={styles.button_wrapper}>
                  <Button
                    color={'#ff8d00'}
                    title="Kayıt Ol"
                    onPress={handleSubmit}
                  />
                </View>

                <View style={styles.button_wrapper}>
                  <Button
                    color={'#ff8d00'}
                    title="Geri"
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              </View>
            </Fragment>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUpScreen;
