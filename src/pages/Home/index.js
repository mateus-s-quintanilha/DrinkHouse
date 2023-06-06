import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Image, ScrollView, FlatList } from 'react-native';

import { Background, SearchArea, InputArea, CartWrapper, IconWrapper, OptionsCarousel, ScrollWrapper, ListHeader } from './style';
import Icon from 'react-native-vector-icons/FontAwesome5'

import ItemList from '../../components/ItemList';
import Json from '../../APIs/ApiConnection/database.json'

import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation()

  function getData(itemToFetch) {
    switch (itemToFetch) {
      case 'beer':
        setData(Json.beers)
        break;

      case 'juice':
        setData(Json.juices)
        break;

      case 'soda':
        setData(Json.sodas)
        break;

      case 'energy': 
        setData(Json.energyDrink)
        break;

      case 'all':
        setData(Json.beers)
        break;

      default:
        break;
    }
  } 

  const [optionBeer, setOptionBeer] = useState(true);
  const [optionJuice, setOptionJuice] = useState(false);
  const [optionSoda, setOptionSoda] = useState(false);
  const [optionEnergy, setOptionEnergy] = useState(false)
  const [optionAll, setOptionAll] = useState(false);

  const [data, setData] = useState(Json.beers)


  function handleSetOption(optionSelected) {
    switch (optionSelected) {
      case 'beer':
        setOptionBeer(true);
        getData('beer');

        setOptionJuice(false);
        setOptionSoda(false);
        setOptionEnergy(false);
        setOptionAll(false);
        break;
      case 'soda':
        setOptionSoda(true);
        getData('soda');

        setOptionBeer(false);
        setOptionJuice(false);
        setOptionEnergy(false);
        setOptionAll(false);
        break;
      case 'juice':
        setOptionJuice(true); 
        getData('juice');

        setOptionBeer(false);
        setOptionSoda(false);
        setOptionEnergy(false);
        setOptionAll(false);
        break;
      case 'energy':
        setOptionEnergy(true); 
        getData('energy');

        setOptionBeer(false);
        setOptionSoda(false);
        setOptionJuice(false);
        setOptionAll(false);
        break;
      case 'all':
        setOptionAll(true);
        getData('all');

        setOptionBeer(false);
        setOptionSoda(false);
        setOptionEnergy(false);
        setOptionJuice(false);
        break;
      default:
        break;
    }
  }

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <Background>
        <SafeAreaView style={{flex: 1}}>

          <SearchArea>
            
            <InputArea>
              <IconWrapper>
                <Icon name="search" size={20} color="#192841" />
              </IconWrapper>
              <TextInput style={styles.input} placeholder='Search Products' placeholderTextColor={'#606060'} />
            </InputArea>

            <TouchableWithoutFeedback onPress={() => {
              Alert.alert('cart page')
              navigation.navigate('Product')
              }}>
              <CartWrapper>
                <ImageBackground imageStyle={{ borderRadius: 6}} style={{width: '100%', height: '100%'}} source={require('../../assets/bg4.jpeg')}>
                  <Icon style={styles.icon} name="shopping-cart" size={18} color={'#fff'} />
                </ImageBackground>
              </CartWrapper>
            </TouchableWithoutFeedback>

          </SearchArea>

          <ScrollWrapper>
            <ScrollView style={{marginTop: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>

              <TouchableOpacity onPress={() => handleSetOption('beer')}>
                {optionBeer ? (
                  <View style={styles.classWrapper}>
                    <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} source={require('../../assets/bg4.jpeg')}>
                      <Icon name="beer" color="#fff" size={24} />

                      <Text style={styles.classTextSelected}>Beers</Text>
                    </ImageBackground>
                  </View>
                ) : (
                  <View style={styles.classWrapper}>
                    <Icon name="beer" color="#152238" size={24} />

                    <Text style={styles.classText}>Beers</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSetOption('juice')}>
                {optionJuice ? (
                  <View style={styles.classWrapper}>
                    <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} source={require('../../assets/bg4.jpeg')}>
                      <Icon name="lemon" color="#fff" size={22} />

                      <Text style={styles.classTextSelected}>Juices</Text>
                    </ImageBackground>
                  </View>
                ) : (
                  <View style={styles.classWrapper}>
                    <Icon name="lemon" color="#152238" size={22} />

                    <Text style={styles.classText}>Juices</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSetOption('soda')}>
                {/* <View style={styles.classWrapper}> */}
                  {optionSoda ? (
                    <View style={styles.classWrapper}>
                      <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} source={require('../../assets/bg4.jpeg')}>
                        <Icon name="glass-whiskey" color="#fff" size={22} />  
                        <Text style={styles.classTextSelected}>Sodas</Text>
                      </ImageBackground>
                    </View>
                  ): (
                    <View style={styles.classWrapper}>
                      <Icon name="glass-whiskey" color="#152238" size={22} />  
                      <Text style={styles.classText}>Sodas</Text>
                    </View>
                  )}
                {/* </View> */}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSetOption('energy')}>
                {optionEnergy ? (
                  <View style={styles.classWrapper}>
                    <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} source={require('../../assets/bg4.jpeg')}>
                      <Icon name="bolt" color="#fff" size={20} />

                      <Text style={styles.classTextSelected}>Energetic</Text>
                    </ImageBackground>
                  </View>
                ) : (
                  <View style={styles.classWrapper}>
                    <Icon name="bolt" color="#152238" size={20} />

                    <Text style={styles.classText}>Energetic</Text>
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSetOption('all')}>
                {optionAll ? (
                  <View style={styles.classWrapper}>
                    <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} source={require('../../assets/bg4.jpeg')}>
                      <Icon name="globe" color="#fff" size={22} />
                      <Text style={styles.classTextSelected}>All</Text>
                    </ImageBackground>
                  </View>
                ) : (
                  <View style={styles.classWrapper}>
                    <Icon name="globe" color="#152238" size={22} />
                    <Text style={styles.classText}>All</Text>
                  </View>
                )}
              </TouchableOpacity>
            
            </ScrollView>
          </ScrollWrapper>

          {/* <ListHeader>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 30, paddingLeft: 12, color: '#152238' }}>Find Results</Text>
              <Text style={{ color: "#192841", fontSize: 18, paddingLeft: 10}}>({data.length} items)</Text>
            </View>

          </ListHeader> */}

          <FlatList 
          //  contentContainerStyle={{borderColor: 'blue', borderWidth: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} 
           columnWrapperStyle={{flex: 1, justifyContent: "space-around"}}
           numColumns={2} 
           data={data} 
           ListHeaderComponent={ 
            <ListHeader>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, paddingLeft: 12, color: '#152238' }}>Find Results</Text>
                <Text style={{ color: "#192841", fontSize: 18, paddingLeft: 10}}>({data.length} items)</Text>
              </View>
            </ListHeader>}
           showsVerticalScrollIndicator={false}
           keyExtractor={item => String(item.id)}
           renderItem={({item}) => <ItemList data={item}/>}
          />

        </SafeAreaView>

      </Background>

  //  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    padding: 12,
    fontSize: 18,
    borderBottomWidth: .4,
    borderRightWidth: .4,
    borderTopWidth:.4,
    borderColor: '#bebebe',
    width: '88%'
  },
  icon: {
    position: 'absolute',
    left: '25%',
    top: '32%'
  },
  classWrapper: {
    backgroundColor: '#fff',
    width: 120,
    height: 46,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 6,

    borderWidth: .4,
    borderColor: '#bebebe',
  },


  classTextSelected: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  classText: {
    color: '#152238',
    fontSize: 18,
    fontWeight: 'bold'
  }
})