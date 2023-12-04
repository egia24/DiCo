import {StyleSheet, Text, View, ScrollView, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import {product} from '../../../data';
import {ItemProduct} from '../../components'; 
import {SearchNormal1} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const Product = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 542);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 542],
    outputRange: [0, -542],
    extrapolate: 'clamp',
  });

  const recentBlog = product.slice(0);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>PRODUCT</Text>
      </Animated.View>
        <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(1)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 142}}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemProduct item={item} key={index} />
          ))}
        </View>
      </Animated.ScrollView>

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

