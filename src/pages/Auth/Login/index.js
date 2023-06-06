import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground, ScrollView, TextInput, Platform, KeyboardAvoidingView, ActivityIndicator, Alert, Keyboard, Animated } from 'react-native';

import { Container, Title, Header, Content, InputWrapper, SubmitButton, SubmitTextButton, InputArea, Footer } from './style';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native'; 

import { AuthContext } from '../../../contexts';

export default function Login() {

    const navigation = useNavigation()

    const { loginWithFB } = useContext(AuthContext)

    const [secureTextEntryValue, setSecureTextEntryValue] = useState(true)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ loading, setLoading ] = useState(false)


    function handleLogin() {
        if(email == '' || password == '') {
            return
        } 
        setLoading(true)
        loginWithFB(email, password)
        Keyboard.dismiss()
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
                        <Title>Sign In</Title>
                    </Header>

                    <Content>
                        <InputWrapper>
                        
                            <InputArea>
                                <FontAwesome name="envelope" color="#192841" size={28} />
                                <TextInput value={email} onChangeText={(text) => setEmail(text)} autoCapitalize='none' style={styles.input} placeholder='E-mail' placeholderTextColor={'#454545'}/>
                            </InputArea>

                            <InputArea>
                                <FontAwesome name="lock" size={32} color="#192841" />
                                <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={secureTextEntryValue} style={styles.passwordInput} placeholder='* * * * * *' placeholderTextColor={'#454545'}/>
                                <Feather name={secureTextEntryValue ? 'eye' : 'eye-off'} size={26} color="#192841" onPress={() => setSecureTextEntryValue(!secureTextEntryValue)} />
                            </InputArea>

                        </InputWrapper>  
                        <SubmitButton onPress={handleLogin}>
                            {loading == true ? (
                               <ActivityIndicator size={'large'} />
                            ): (
                            <SubmitTextButton>Submit</SubmitTextButton>
                            )}
                        </SubmitButton>
                    </Content>

                    <Footer>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.footerText}>
                                Don't Have an Account?  <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
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
        // backgroundColor: '#f9f4f1'
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
        // borderColor: '#f06428',
        borderColor: '#192841',
        borderRadius: 120,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: -16
    },
    input: {
        // backgroundColor: '#f1e3de',
        height: 55,
        borderRadius: 6,
        margin: 12,
        padding: 8,
        // borderBottomWidth: 3,
        // borderColor: '#192841',
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
    },
})