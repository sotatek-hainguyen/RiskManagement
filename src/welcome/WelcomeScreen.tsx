import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../assets/images/logo.svg';
import {RootStackParamList} from '../main/Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {mainRoutes} from '../main/mainRoutes';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Auth'>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomeScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(mainRoutes.Auth)}>
        <Text style={styles.title}>{'Click to Auth'}</Text>
      </TouchableOpacity>
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

export default WelcomeScreen;
