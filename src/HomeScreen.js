import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Product from './Product';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.innerView}>
        <Text style={styles.headText}> E-commerce App</Text>
      </View>
      <Product {...navigation}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headText: {
    fontWeight: '500',
    fontSize: 18,
  },
});
