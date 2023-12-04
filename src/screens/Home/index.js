import React, {useState} from 'react';
import {TouchableOpacity,ScrollView, StyleSheet,  Text, View, Animated} from 'react-native';
import { Notification} from 'iconsax-react-native';
import { home } from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal } from '../../components';


export default function Home() {
  return (
    <View style={styles.container}> 
    <View style={styles.header}>
      <Text style={styles.title}>DiCo</Text>
      <Notification color={colors.black()} variant="Linear" size={24} />
    </View>
    <View style={{paddingHorizontal: 24, marginTop: 10}}>
    </View>
    <ListBlog/>
  </View>
  );
}

const ListBlog = () => {
  const horizontalData = home.slice(0, 5);
  const verticalData = home.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <Text style={styles.title2}>WELCOME</Text>
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
};

const styles = StyleSheet.create({
    title2: {
      fontWeight: 'bold',
      fontSize:18,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
      marginLeft :20,
      paddingTop : 20,
    },
    container: {
      flex: 1,
      backgroundColor: "white",
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
      fontSize: 30,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.blue(),
      fontWeight : 'bold',
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
