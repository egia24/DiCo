import React, {useState} from 'react';
import {TextInput,TouchableOpacity,ScrollView, StyleSheet,  Text, View, Image, ImageBackground, FlatList} from 'react-native';
import {Element3, Notification, SearchNormal} from 'iconsax-react-native';
import {BlogList, CategoryList} from './data';
import { fontType, colors } from './src/theme';
import { ListHorizontal, ItemSmall } from './src/components';


export default function App() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = text => {
  setSearchText(text);
  }
  return (
 
    <View style={styles.container}> 
    <View style={styles.header}>
      <Text style={styles.title}>DiCo</Text>
      <Notification color={colors.black()} variant="Linear" size={24} />
    </View>
    <View style={styles.listCategory}>
      <FlatListCategory />
    </View>
    <View style={{paddingHorizontal: 24, marginTop: 10}}>
    <View style={styles.searchContainer}>
      <TextInput style={styles.input} placeholder="Cari Product" onChangeText={handleSearchPress} value={searchText}placeholderTextColor="grey"/>
      <View style={styles.searchButtonContainer}>
      <TouchableOpacity style={styles.searchButton}>
      <SearchNormal color={colors.black()} variant="Linear" size={24} style={styles.icon}/>
      </TouchableOpacity>
    </View>
    </View>
    </View>
    <ListBlog/>
  </View>
  );
}

const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <Text style={styles.title2}>PRODUCT</Text>
        <ListHorizontal data={horizontalData} />
        <Text style={styles.title2}>EVENT</Text>
        <ListHorizontal data={verticalData}/>
        </View>
    </ScrollView>
  );  
};


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
const styles = StyleSheet.create({
    title2: {
      fontWeight: 'bold',
      fontSize:18,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
      marginLeft :20,
    },
    container: {
      flex: 1,
      backgroundColor: colors.white(),
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: 'black',
      backgroundColor: 'white',
    },
      searchButtonContainer: {
      paddingLeft: 230,
    },
      searchButton: {},
      icon: {
      margin: 8,
    },
    header: {
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:8,
      paddingBottom:4
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),

    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      paddingVertical: 10,
      gap: 10,
    },
  });
  const category = StyleSheet.create({
    item: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: colors.grey(0.08),
      marginHorizontal:5
    },
    title: {
      fontFamily: fontType['Pjs-SemiBold'],
      fontSize: 14,
      lineHeight: 18,
      color: colors.grey(),
    },

  });
