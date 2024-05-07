import {View, Text, Dimensions, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Background';
import {darkgreen} from './Constants';
import Field from './Field';
import Button from './Button';
const {height, width} = Dimensions.get('window');
const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: width}}>
        <Text
          style={{
            color: 'white',
            fontSize: 42,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: height,
            width: '100%',
            borderTopLeftRadius: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: {darkgreen},
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            Login to your account
          </Text>
          <Field placeholder="Email/UserName" keyboardType={'email-address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View style={{width: '75%', alignItems: 'flex-end'}}>
            <Text style={{color: darkgreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Button
            textColor="white"
            bgColor={darkgreen}
            btnLabel="Login"
            Press={() => Alert.alert('Logged In')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text
                style={{color: darkgreen, fontWeight: 'bold', fontSize: 16}}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
