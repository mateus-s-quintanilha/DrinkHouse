import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

import { Background, Header, ContentWrapper, ImageWrapper, InfoProductWrapper, Title, InfoHeader, RatingWrapper, Description, Footer, FooterContent, Price, ProductQuantityWrapper} from './style'

import IconFeather from 'react-native-vector-icons/Feather'

import IconFA from 'react-native-vector-icons/FontAwesome'

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Product({ route }) {

    const navigation = useNavigation()

    const { productData } = route.params

    function printData() {
        console.log('productData na pág. Product: ', productData)
    }

    function handleNavigateToHome() {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <SafeAreaView style={{flex: 1, marginHorizontal: 8}}>
                <Header>
                    {/* <BackButtonArea> */}
                        <TouchableOpacity onPress={handleNavigateToHome} style={styles.button}>

                            <IconFeather name="arrow-left" size={22} color="#444444" />
                            <Text style={styles.textButton}>Back</Text>
                        </TouchableOpacity>
                    {/* </BackButtonArea> */}
                </Header>

                {/* justifyContent: 'flex-end' */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', height: '105%', justifyContent: 'flex-end', alignItems: 'center' }}
                //  style={{ borderColor: 'black', borderWidth: 1}}
                 >
                    <ContentWrapper>


                        <ImageWrapper>
                            <ImageBackground imageStyle={{borderRadius: 12}} style={styles.background} source={require('../../assets/bg2.jpeg')}>
                                <Image resizeMode='contain' style={styles.productImg} source={{uri: productData.image}} />
                            </ImageBackground>
                        </ImageWrapper>

                        <InfoProductWrapper>
                            <InfoHeader>

                                <Title>
                                    {productData.name}
                                </Title>
                                <RatingWrapper>
                                    <IconFA name="star" size={20} color="#192841" />
                                    <IconFA name="star" size={20} color="#192841" />
                                    <IconFA name="star" size={20} color="#192841" />
                                    <IconFA name="star" size={20} color="#192841" />
                                    <IconFA name="star" size={20} color="#192841" />
                                </RatingWrapper>

                            </InfoHeader>

                            <Description>
                                <Text style={styles.descriptionTitle}>Product Description</Text>
                                <Text style={styles.descriptionText}>
                                    {productData.about}
                                </Text>
                            </Description>

                        </InfoProductWrapper>

                    </ContentWrapper>
                </ScrollView>

            </SafeAreaView>
            <Footer>    
                <ImageBackground imageStyle={{borderRadius: 30}} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} resizeMode='cover' source={require('../../assets/bg4.jpeg')}>
                    <FooterContent>
                        <Price>
                            $ {productData.price}
                        </Price>

                        <ProductQuantityWrapper>

                        </ProductQuantityWrapper>

                        <TouchableOpacity style={styles.CartButton}>
                            <Text>Cart</Text>
                        </TouchableOpacity>

                    </FooterContent>
                </ImageBackground>
            </Footer>
        </Background>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 18,
        color: '#444444'
    },
    background: {
        width: '100%',
        height: 300,

        // position: 'absolute',
        // left: 20,
        // top: 0
    },
    productImg: {
        width: '100%',
        zIndex: 99,
        height: '165%',
        position: 'absolute',
        bottom: -30,
        // left: 20
    },
    descriptionTitle: {
        width: '100%',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        color: "#192841",
        fontSize: 20,
        paddingBottom: 8
    },
    descriptionText: {
        width: '100%',
        fontSize: 15,
        color: '#444444',
        lineHeight: 20
    },
    CartButton: {

    }
})