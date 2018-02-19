import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Image source={require('./img/bg.gif')} style={styles.container}>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch'
    },
});
