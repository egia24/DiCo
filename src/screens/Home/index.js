import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Notification, Archive} from 'iconsax-react-native';
import {CategoryList} from '../../../data';
import {ItemProduct, ItemSmall, ListHorizontal} from '../../components';
import {fontType, colors} from '../../theme';
import firestore from '@react-native-firebase/firestore';
import { home } from '../../../data';
import { event } from '../../../data';

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};
const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchProductData = () => {
      try {
        const productCollection = firestore().collection('product');
        const unsubscribeProduct = productCollection.onSnapshot(querySnapshot => {
          const product = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          setProductData(product);
          setLoading(false);
        });

        return () => {
          unsubscribeBlog();
        };
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProductData();
  }, []);
  const event = home.slice(0,5);
  const eventt = event.slice(0,5);
  const horizontalData = productData.slice(0, 5);
  const verticalData = productData.slice(5);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DiCo</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <FlatListCategory />
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            <View style={styles.listBlog}>
              <View style={{paddingVertical: 0, gap: 10}}>
              <View style={{paddingVertical: 40, gap: 10}}>
              <Text style={styles.welcome}>WELCOME TO DiCo ...</Text>
              <ListHorizontal data={event}/> 
              </View>
              <Text style={styles.product}>PRODUCT</Text>
              <ListHorizontal data={horizontalData} />
              <View style={styles.listCard}>
                {verticalData.map((item, index) => (
                  <ItemProduct item={item} key={index} />
                ))}
              </View> 
                        
            </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(0),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  welcome:{
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: "orange",
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  product:{
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: "orange",
    fontWeight: 'bold',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
});