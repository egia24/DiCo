import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import React, {useState, useRef, useEffect  } from 'react';
import {ArrowLeft, More, Share, Like1, Message, Receipt21} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../theme';
import ActionSheet from 'react-native-actions-sheet'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { formatDate } from '../../utils/formatDate';
import { formatNumber } from '../../utils/formatNumber';


const ProductDetail = ({route}) => {
  const {productId} = route.params;
  const navigation = useNavigation();
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });

  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('product')
      .doc(productId)
      .onSnapshot(documentSnapshot => {
        const productData = documentSnapshot.data();
        if (productData) {
          console.log('Product data: ', productData);
          setSelectedProduct(productData);
        } else {
          console.log(`Product with ID ${productId} not found.`);
        }
    });
    setLoading(false);
      return () => subscriber();
    }, [productId]);
    const navigateEdit = () => {
      closeActionSheet();
      navigation.navigate('EditProduct', {productId});
    };

    const handleDelete = async () => {
      setLoading(true);
      try {
        await firestore()
          .collection('product')
          .doc(productId)
          .delete()
          .then(() => {
            console.log('Product deleted!');
          });
        if (selectedProduct?.image) {
          const imageRef = storage().refFromURL(selectedProduct?.image);
          await imageRef.delete();
        }
        console.log('Product deleted!');
        closeActionSheet();
        setSelectedProduct(null);
        setLoading(false)
        navigation.navigate('Product');
      } catch (error) {
        console.error(error);
      }
    };
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, 52],
    });
    const toggleIcon = iconName => {
      setIconStates(prevStates => ({
        ...prevStates,
        [iconName]: {
          variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
          color:
            prevStates[iconName].variant === 'Linear'
              ? colors.blue()
              : colors.grey(0.6),
        },
      }));
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.header, {transform: [{translateY: headerY}]}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={colors.black(1)} variant="Linear" size={24} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            <TouchableOpacity onPress={openActionSheet}>
              <More
                color={colors.black(1)}
                variant="Linear"
                style={{transform: [{rotate: '90deg'}]}}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        {loading ? (
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator size={'large'} color={colors.blue()} />
          </View>
        ) : (
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingTop: 62,
              paddingBottom: 54,
            }}>
            <FastImage
              style={styles.image}
              source={{
                uri: selectedProduct?.image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}></FastImage>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text style={styles.category}>{selectedProduct?.category.name}</Text>
              <Text style={styles.date}>
                {formatDate(selectedProduct?.createdAt)}
              </Text>
            </View>
            <Text style={styles.title}>{selectedProduct?.title}</Text>
            <Text style={styles.content}>{selectedProduct?.content}</Text>
            <Text style={styles.price}>{selectedProduct?.price}</Text>
          </Animated.ScrollView>
        )}
        <Animated.View
          style={[styles.bottomBar, {transform: [{translateY: bottomBarY}]}]}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text style={styles.info}>
              {formatNumber(selectedProduct?.totalLikes)}
            </Text>
          </View>         
        </Animated.View>
        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
          indicatorStyle={{
            width: 100,
          }}
          gestureEnabled={true}
          defaultOverlayOpacity={0.3}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={navigateEdit}>
            <Text
              style={{
                fontFamily: fontType['Pjs-Medium'],
                color: colors.black(),
                fontSize: 18,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={handleDelete}>
            <Text
              style={{
                fontFamily: fontType['Pjs-Medium'],
                color: colors.black(),
                fontSize: 18,
              }}>
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={closeActionSheet}>
            <Text
              style={{
                fontFamily: fontType['Pjs-Medium'],
                color: 'red',
                fontSize: 18,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ActionSheet>
      </View>
    );
  };
        
export default ProductDetail;

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
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(0),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(0),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  price : {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 20,
    lineHeight: 20,
    marginTop: 15,
  },
  content: {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 16,
    lineHeight: 20,
    marginTop: 15,
  },
});
