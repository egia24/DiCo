import {StyleSheet, Text, View, TouchableWithoutFeedback,TouchableOpacity, Animated, ActivityIndicator, RefreshControl} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {ItemProduct} from '../../components'; 
import {SearchNormal1,Add, Setting2} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const Product = () => {
 
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 542);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 542],
    outputRange: [0, -542],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);  
  const getDataProduct = async () => {
    try {
      const response = await axios.get(
        'https://6570b6ba09586eff6641d794.mockapi.io/DiCo/product',
      );
      setProductData(response.data);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataProduct()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataProduct();
    }, [])
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('SearchPage')}>
        <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(1)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
      <ScrollView   
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
         paddingHorizontal: 24,
         gap: 10,
         paddingVertical: 20,
      }} refreshControl={
         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}> 
      </Animated.ScrollView>
      <View style={{paddingVertical: 50, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            productData.map((item, index) => <ItemProduct item={item} key={index} />)
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddProduct')}>
        <Add color={colors.white()} variant="Linear" size={27} />
      </TouchableOpacity>
    </View>
  );
    };

export default Product;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 20,
    paddingTop: 1,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white,  
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    borderRadius: 10,
    flex: 1,

  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
  content: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: colors.black(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  
});

const recent = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
    paddingTop : 10,
  },
  container:{
    position: 'absolute',
    zIndex: 999,
    top: 52, 
    left: 0,
    right: 0,
    backgroundColor : colors.grey(0.05),

  },
});

