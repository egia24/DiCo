import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,onRefresh, ActivityIndicator} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const EditProductForm = ({route}) => {
const {productId} = route.params;
const dataCategory = [
    {id: 1, name: 'Badminton'},
    {id: 2, name: 'Sepakbola'},
    {id: 3, name: 'Tennis'},
    {id: 4, name: 'Basket'},
    {id: 5, name: 'Voli'},
  ];
  const [productData, setProductData] = useState({
    title: '',
    content: '',
    category: {},
    price: '',
  });
  const handleChange = (key, value) => {
    setProductData({
      ...productData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById();
  }, [productId]);

  const getProductById = async () => {
    try {
      const response = await axios.get(
        `https://6570b6ba09586eff6641d794.mockapi.io/DiCo/product/${productId}`,
      );
      setProductData({
        title : response.data.title,
        content : response.data.content,
        price : response.data.price,
        category : {
            id : response.data.category.id,
            name : response.data.category.name
        }
      })
    setImage(response.data.image)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(`https://6570b6ba09586eff6641d794.mockapi.io/DiCo/product/${productId}`, {
          title: productData.title,
          category: productData.category,
          image,
          content: productData.content,
          price : productData.price,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Product');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Edit product</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Title"
            value={productData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, {minHeight: 250}]}>
          <TextInput
            placeholder="Content"
            value={productData.content}
            onChangeText={text => handleChange('content', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.content}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Price"
            value={productData.price}
            onChangeText={text => handleChange('Price', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.price}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={text => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType['Pjs-Regular'],
              color: colors.grey(0.6),
            }}>
            Category
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === productData.category.id
                  ? colors.black()
                  : colors.grey(0.08);
              const color =
                item.id === productData.category.id
                  ? colors.white()
                  : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange('category', {id: item.id, name: item.name})
                  }
                  style={[category.item, {backgroundColor: bgColor}]}>
                  <Text style={[category.name, {color: color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default EditProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(0),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.blue(1),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.black() ,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(1),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});
