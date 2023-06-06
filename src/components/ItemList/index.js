import React from 'react';
import { View, SafeAreaView, Image, TouchableWithoutFeedback, Text, Alert } from 'react-native';

// import Json from '../../APIs/ApiConnection/database.json'

import { Container, ContentWrapper, ImageWrapper, Title, Info, PriceWrapper, Price } from './style'

import { useNavigation } from '@react-navigation/native';

export default function ItemList({ data }) {

    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate('Product', {productData: data})
    }

    return (
        // onPress={() => Alert.alert('clicou!')} 
        <TouchableWithoutFeedback onPress={handleNavigation}>
            <Container>
                <ImageWrapper>
                    <View style={{backgroundColor: '#fff', borderRadius: 30, width: '80%', height: 130}}>
                        <Image resizeMode='contain' style={{position: 'absolute', bottom: -10, width: '100%' , height: 245}} source={{uri: data.image}} />
                    </View>

                    {/* <Image resizeMode='contain' style={{width: '100%' , height: 250 , borderColor: 'black', borderWidth: 1}} source={{uri: data.image}} /> */}
                </ImageWrapper>

                <ContentWrapper>
                    <Title numberOfLines={1}>{data.name}</Title>
                    <Info>Size: {data.size}</Info>
                </ContentWrapper>

                <PriceWrapper>
                    <Price>$ {data.price}</Price>
                </PriceWrapper>
                
            </Container>
        </TouchableWithoutFeedback>
    );
}