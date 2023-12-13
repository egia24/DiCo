import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Archive} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';

const ItemEvent= ({item}) => {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('ProductDetail', {productId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
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
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Archive
            size="20"
            color="#FF8A65"
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>{item.createdAt}</Text>

          <Text style={styles.cardText}>{item.totalComments}</Text>
        </View>
      </View>
      </TouchableOpacity>
  );
};

export default ItemEvent;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 17,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.grey(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.grey(),
  },
  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'cover',
    borderRadius : 10,
    backgroundColor: "white",
    elevation :10,
    borderTopRightRadius : 0,
    borderBottomRightRadius :0,
    elevation: 1,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    elevation: 1,
  },
});
