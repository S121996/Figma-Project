import {View, Text} from 'react-native';
import React from 'react';
import Background from '../Background';
import Button from './Button';
import {darkgreen, green} from './Constants';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 30}}>Let's start</Text>
        <Text style={{color: 'white', fontSize: 30, marginBottom: 40}}>
          Coding
        </Text>
        <Button
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          bgColor="white"
          textColor={darkgreen}
          btnLabel="SignUp"
          Press={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
};

export default Home;
