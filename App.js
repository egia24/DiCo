import React, {useState} from 'react';
import {TextInput,TouchableOpacity,ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import { SearchNormal,Element3, Receipt21, Clock, Message, TextBold} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = text => {
  setSearchText(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DiCo</Text>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>Product</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Event</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Tutorial</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Sports History</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Contact</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{paddingHorizontal: 24, marginTop: 10}}>
      <View style={styles.searchContainer}>
      <TextInput style={styles.input} placeholder="Cari Product" onChangeText={handleSearchPress} value={searchText} placeholderTextColor="grey"/>
      <View style={styles.searchButtonContainer}>
      <TouchableOpacity style={styles.searchButton}>
        <SearchNormal color={colors.black()} variant="Linear" size={24} style={styles.icon}/>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
      <Text style={itemHorizontal.title}>Product</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
            
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_1280.jpg  ',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Sepak Bola 
                  </Text>
                  <Text style={itemHorizontal.cardText}>Ada banyak peralatan olahraga sepak bola yang dapat kamu beli agar permainan kamu lebih baik</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428046_1280.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Badminton
                  </Text>
                  <Text style={itemHorizontal.cardText}>Disini petunjuk peralatan olahraga badminton yang wajib kamu beli</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://media.istockphoto.com/id/1510757303/id/foto/pemain-tenis-melayani-bola-tenis-selama-pertandingan-di-lapangan-terbuka-konsep-olahraga.webp?b=1&s=612x612&w=0&k=20&c=UMZP2H_3ltr3k1uhXqgzYQwyiRsMaql6MORsSnskGio=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Tennis
                  </Text>
                  <Text style={itemHorizontal.cardText}>Disini terdapat rekomendasi peralatan tenis dari berbagai merek</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/18/22/10/man-1837119_1280.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Basket
                  </Text>
                  <Text style={itemHorizontal.cardText}>Ada banyak jenis merek bola, pakaian dan aksesoris basket</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2021/07/21/20/11/beach-volleyball-6483905_1280.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Voli
                  </Text>
                  <Text style={itemHorizontal.cardText}>Beragam merek bola voli yang bisa menjadi referensi sebelum membeli</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <Text style={itemHorizontal.title}>Event</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://marketplace.canva.com/EAFn2B---Eg/1/0/1131w/canva-merah-dan-hijau-ilustrasi-badminton-rutin-a4-yCRLF3E-Qtw.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Badminton
                  </Text>
                  <Text style={itemHorizontal.cardText}>28 Aug, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://img.freepik.com/free-vector/colored-vintage-basketball-championship-poster_1284-39316.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Basket
                  </Text>
                  <Text style={itemHorizontal.cardText}>24 Aug, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tennis-poster-design-template-129fa4d1a11e810f4a1bc0514588334b_screen.jpg?ts=1645879031',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Tennis
                  </Text>
                  <Text style={itemHorizontal.cardText}>15 March, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-flyer%2Cfootball-flyer%2Csoccer-flyer-design-template-5051f2d1316bafc8d97bfff9ec71c0ca_screen.jpg?ts=1637004790',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Voli
                  </Text>
                  <Text style={itemHorizontal.cardText}>8 March, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://marketplace.canva.com/EAFrsqv6wps/1/0/1131w/canva-kuning-hijau-simpel-ilustrasi-kompetisi-futsal-poster-7X4ud5Cbxqw.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                   Sepak Bola
                  </Text>
                  <Text style={itemHorizontal.cardText}>28 Mei, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView> 
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

const itemVertical = StyleSheet.create({
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
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
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
  },
});
const itemHorizontal = StyleSheet.create({
  title:{
    fontSize : 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color : 'black',
  },
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
