import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './Redux/productSlice';
import {add} from './Redux/cartSlice';
import EvilIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Product = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product);
  const cartData = useSelector(store => store.cart);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToBag = products => {
    dispatch(add(products));
  };

  return (
    <>
      <View style={styles.headCont}>
        <Text style={styles.headText}>Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.cartCont}>
          <EvilIcons name={'shopping-cart'} color={'#fff'} size={25} />
          <Text style={styles.cartText}>{cartData.length}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data.map(item => (
            <View key={item.id} style={[styles.card, styles.shadowProp]}>
              <Image style={styles.image} source={{uri: item.image}} />
              <Text style={styles.headText} numberOfLines={1}>
                {item.title}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.headText}>{`$${item.price}`}</Text>
                <Text style={styles.headText}>{`${item.rating.rate}*`}</Text>
              </View>
              <TouchableOpacity
                onPress={() => addToBag(item)}
                style={styles.buttonCont}>
                <Text style={styles.buttonText}>ADD TO BAG</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  productCont: {
    flex: 1,
  },
  headCont: {
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  card: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '40%',
    marginLeft: 20,
    margin: 5,
    marginBottom: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  headText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  cartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 10,
  },
  buttonCont: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#F05524',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
  },
  cartCont: {
    flexDirection: 'row',
    width: 60,
    paddingHorizontal: 8,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#463FB0',
    justifyContent: 'space-around',
  },
});
