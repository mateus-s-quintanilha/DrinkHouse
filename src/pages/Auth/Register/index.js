import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, Header, Content, InputWrapper, SubmitButton, SubmitTextButton, InputArea, Footer } from '../Login/style';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { AuthContext } from '../../../contexts';

export default function Register() {

  const navigation = useNavigation()

  const { signupWithFB } = useContext(AuthContext)

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ secureTextEntryValue, setSecureTextEntryValue ] = useState(true)

  const [ loading, setLoading ] = useState(false)

  function handleSignUp() {
    if(name == '' || email == '' || password == '') {
      return
    }

    setLoading(true)
    signupWithFB(email, password, name)
  }

 return (
  <Container>
  <ImageBackground style={styles.background} source={require('../../../assets/bg2.jpeg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{alignItems: 'center'}}>

              <Header>
                  <View style={styles.imgWrapper}>
                      <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/logo-beerPNG.png')} />
                  </View>
                  <Title>Register</Title>
              </Header>

              <Content>
                  <InputWrapper>
                  
                    <InputArea>
                      <FontAwesome name="user" size={30} color="#192841" />
                      <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.input} placeholder='Name' placeholderTextColor={'#454545'}/>
                    </InputArea>

                    <InputArea>
                      <FontAwesome name="envelope" size={30} color="#192841" />
                      <TextInput value={email} onChangeText={(text) => setEmail(text)} autoCapitalize='none' style={styles.input} placeholder='E-mail' placeholderTextColor={'#454545'}/>
                    </InputArea>

                    <InputArea>
                      <FontAwesome name="lock" size={32} color="#192841" />
                      <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={secureTextEntryValue} style={styles.passwordInput} placeholder='* * * * * *' placeholderTextColor={'#454545'}/>
                      <Feather name={secureTextEntryValue ? 'eye' : 'eye-off'} size={26} color="#192841" onPress={() => setSecureTextEntryValue(!secureTextEntryValue)} />
                    </InputArea>

                  </InputWrapper>  
                  <SubmitButton onPress={handleSignUp}>
                      {loading == true ? (
                         <ActivityIndicator size={'large'} />
                      ): (
                      <SubmitTextButton>Submit</SubmitTextButton>
                      )}
                  </SubmitButton>
              </Content>

              <Footer>
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.footerText}>
                          Already Have an Account?  <Text style={{fontWeight: 'bold'}}>Sign In</Text> 
                      </Text>
                  </TouchableWithoutFeedback>
              </Footer>

          </SafeAreaView>
      </ScrollView>
  </ImageBackground>
  </Container>
 );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f1e3de',
  alignItems: 'center'

},
background: {
  width: '100%', 
  height: '100%',
},
logo: {
  width: 200,
  height: 160,
  marginLeft: 22
},
imgWrapper: {
  width: 200,
  height: 200,
  borderWidth: 5,
  borderColor: '#192841',
  borderRadius: 120,
  justifyContent: 'center',
  alignItems: 'center',
},
input: {
  height: 55,
  borderRadius: 6,
  margin: 12,
  padding: 8,
  fontSize: 22,

  color: '#192841',
  width: "85%"
},
passwordInput: {
  height: 55,
  borderRadius: 6,
  margin: 12,
  padding: 8,
  fontSize: 22,

  color: '#192841',
  width: "75%"
},
footerText: {
  fontSize: 16,
  color: '#192841'
}
})