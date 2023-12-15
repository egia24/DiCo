import {StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import FastImage from 'react-native-fast-image';
import {Archive, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';

const ItemProduct= ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    style={styles.cardItem}
    onPress={() => navigation.navigate('ProductDetail', {productId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          headers: {Authorization: 'someAuthToken'},
          uri: item.image,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:10
          }}>
          <View style={{gap: 10, flex:1}}>
          <Text style={styles.cardTitle}>{item?.title}</Text>
          <Text style={styles.cardCategory}>{item.category?.name}</Text>
          </View>
          <TouchableOpacity>
          <Archive
            size="20"
            color="#FF8A65"
          />
          </TouchableOpacity>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemProduct;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 10,
  },
  cardItem: {
    backgroundColor: colors.white(0),
    flexDirection: 'row',
    borderRadius: 40,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 15,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.blue(),
  },
  cardImage: {
    width: 130,
    height: 'auto',
    resizeMode: 'cover',
    borderBottomLeftRadius : 10,
    borderTopLeftRadius : 10,
    backgroundColor: colors.white(0),
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
  },
  cardContent: {
    gap: 30,
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop : 20,
    paddingLeft: 10,
    flex: 1,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    elevation: 1,
    color: colors.white(),
  },
});

