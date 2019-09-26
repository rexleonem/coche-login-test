/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow
 */


import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './src/components/Login/Wizard';
import Input from './src/components/Login/Input';

const forms = [
  {
    placeholder: 'Phone Number ',
    name: 'phone',
    secureTextEntry: false,

  },
  {
    placeholder: 'Password',
    name: 'password',
    secureTextEntry: true,
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            phone: '',
            password: '',
          }}
        >
          {forms.map(el => (
            <Wizard.Step key={el.name}>

              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                  <Image source={require('./src/images/logo.png')} />
                  <Input 
                    onChangeValue={onChangeValue}
                    placeholder={el.placeholder}
                    value={values[el.name]}
                    name={el.name}
                    secureTextEntry={el.secureTextEntry}
                    
                  />
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
