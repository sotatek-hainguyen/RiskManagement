import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../../assets/images/logo.svg';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AuthScreen</Text>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default AuthScreen;
