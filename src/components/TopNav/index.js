import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, ImageBackground,  } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Container, InfoWrapper, Name } from './style'

import { useNavigation } from '@react-navigation/native';

export default function TopNav() {

    const navigation = useNavigation()


    return (
        <Container>

            <InfoWrapper>
                <Image style={styles.userPhoto} source={require('../../assets/default-user-image.png')} />
                <View style={{height: 60, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 16, color: '#152238'}}>Hello</Text>
                    <Name>Mateus</Name>
                </View>
            </InfoWrapper>

            <TouchableOpacity style={{paddingTop: 16}} onPress={() => navigation.openDrawer()}>
                    <FontAwesome style={styles.icon} name="bars" size={28} color="#192841" />
            </TouchableOpacity>

        </Container>
    );
}

const styles = StyleSheet.create({
    userPhoto: {
        width: 60,
        height: 60,
        borderRadius: 16
    },
    icon: {
        paddingRight: 12,
    }
})