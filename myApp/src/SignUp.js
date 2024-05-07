import {View, Text, Dimensions, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Background';
import {darkgreen} from './Constants';
import Field from './Field';
import Button from './Button';
const {height, width} = Dimensions.get('window');

const SignUp = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: width}}>
        <Text
          style={{
            color: 'white',
            fontSize: 42,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Register
        </Text>
        <Text style={{color:"white",fontSize:16,
        marginBottom:20,fontWeight:'bold'}}>
          Create a new account</Text>
        <View
          style={{
            backgroundColor: 'white',
            height:"88%",
            width:'100%',
            borderTopLeftRadius: 150,
            justifyContent: 'center',
            alignItems: 'center',
          
          }}>
         <Field placeholder="First Name" />
         <Field placeholder="Last Name"/>
         <Field placeholder="Email/UserName" 
         keyboardType={'email-address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Contact" keyboardType={'number'} />
          <View style={{width:'68%',display:'flex',flexDirection:'row', paddingRight:16}}>
            <Text style={{color:"grey", fontSize: 15}}>
              By Signing In {' '}
            </Text>
            <Text style={{color:darkgreen,fontWeight:'bold',fontSize:15}}>Term & Conditions</Text>
          </View>
          <View style={{justifyContent:'center',width:'68%',display:'flex',flexDirection:'row', paddingRight:16}}>
            <Text style={{color:"grey", fontSize: 15}}>
              and {' '}
            </Text>
            <Text style={{color:darkgreen,fontWeight:'bold',fontSize:15}}>Privacy Policies</Text>
          </View>
          <Button textColor="white" bgColor={darkgreen} btnLabel="SignUp" 
          Press={ () => {
            Alert.alert('Account Created')
          props.navigation.navigate('Login');

           }}/>
          <View style={{display:'flex',flexDirection:'row',
            justifyContent:'center'
          }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Already have an account ?</Text>
            <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
              <Text style={{color:darkgreen,fontWeight:'bold',
                fontSize:16
              }}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Background>
  );
};

export default SignUp;
