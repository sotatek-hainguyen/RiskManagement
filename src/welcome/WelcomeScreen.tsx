import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../assets/images/logo.svg';
import {RootStackParamList} from '../main/Navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {mainRoutes} from '../main/mainRoutes';
import {Button} from 'react-native-elements';
import styled from 'styled-components';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    margin-top: 10px;
    background: papayawhip;
  `;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomeScreen</Text>
      <Button title="Solid Button" />
      <Button
        style={{marginTop: 20}}
        icon={<Logo />}
        title="Click to Auth"
        onPress={() => navigation.navigate(mainRoutes.Auth)}
      />
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
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
