import {StyleSheet, Text, View, ScrollView, } from 'react-native';
import React from 'react';
import {product} from '../../../data';
import {ItemProduct} from '../../components'; 
import {SearchNormal1} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const Product = () => {
  const recentBlog = product.slice(10);
  return (
    <View style={styles.container}>
        <Text style={recent.text}>PRODUCT</Text>
        <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listCard}>
            {recentBlog.map((item, index) => (
              <ItemProduct key={index} item={item} />
            ))}
          </View>
        </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
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
  
});

const recent = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
    paddingTop : 20,
  },

});

