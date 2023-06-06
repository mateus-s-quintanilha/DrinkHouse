import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StyleSheet } from 'react-native';

import {  } from './style'

export default function Profile() {


  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

        <View>
          <Text style={styles.word}>blablabla</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  word: {
    margin: 20
  }
})