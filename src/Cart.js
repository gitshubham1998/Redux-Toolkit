import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {remove} from './Redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(store => store.cart);

  const removeProduct = products => {
    dispatch(remove(products.id));
  };

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.cartText}>
          {cartData.length} Item In Your Cart{' '}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {cartData?.map(item => (
          <View style={[styles.card, styles.shadowProp]}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.headText} numberOfLines={1}>
              {item.title}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headText}>{`$${item?.price}`}</Text>
              <Text style={styles.headText}>{`${item?.rating?.rate}*`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeProduct(item)}
              style={styles.buttonCont}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

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
    marginTop: 40,
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
  cartText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00000',
    marginTop: 60,
  },
});
