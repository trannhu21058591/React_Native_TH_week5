import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function Screen01({ navigation, route }) {
  const [image, setImage] = useState(require('./vs_blue.png')); 

  useEffect(() => {
    if (route.params?.color) {
      switch (route.params.color) {
        case 'red':
          setImage(require('./vs_red.png'));
          break;
        case 'black':
          setImage(require('./vs_black.png'));
          break;
        case 'silver':
          setImage(require('./vs_silver.png'));
          break;
        case 'blue':
          setImage(require('./vs_blue.png'));
          break;
        default:
          setImage(require('./vs_blue.png'));
      }
    }
  }, [route.params?.color]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <View style={styles.im}>
          <Image source={image} style={styles.img} />
        </View>
       
       <View style={styles.info}>
        <Text>Điện thoại vsmart Joy3 - Hàng chính hãng</Text>
        <View style={styles.vote}>
         <View style={styles.icon}>
         <IconEntypo name= 'star' color= 'yellow' size={20}/>
         <IconEntypo name= 'star' color= 'yellow' size={20}/>
         <IconEntypo name= 'star' color= 'yellow' size={20}/>
         <IconEntypo name= 'star' color= 'yellow' size={20}/>
         <IconEntypo name= 'star' color= 'yellow' size={20}/>
         </View>
         <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.price}>
         <Text style={styles.price1}>1.790.000 đ</Text>
         <Text style={styles.price2}>1.790.000 đ</Text>
        </View>
        <View style={styles.price}>
         <Text style={styles.ttxt}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
         <IconA name ='questioncircleo' color = '' size = {17}/>
        </View>
       </View>
      </View>
      <View style={styles.v2}>
       <TouchableOpacity style={styles.chonmau} onPress={() => navigation.navigate('Screen02')}>
        <Text>4 MÀU - CHỌN MÀU</Text>
        <IconFeather name='chevron-right' color = '' size ={20}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.chonMua}>
        <Text style={styles.txtCM}>CHỌN MUA</Text>
       </TouchableOpacity>
      </View>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    
  },
  txtCM:{
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
  },
  chonMua:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  chonmau:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    
  },
  ttxt:{
    color: 'red',
    fontWeight:'bold',
    fontSize: 14,
    marginRight: '2%',
  },
  price2:{
    textDecorationLine:'line-through',
    color: 'gray'
  },
  price1:{
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: '10%',
  },
  price:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
  },
  icon:{
    flexDirection:'row',
    marginRight: '10%',
    
  },
  vote:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  },
  info:{
    flex: 1,
    paddingTop: 10,
  },
  img:{
    width: 240,
    height: 300,
    
  },
  im:{
    alignItems: 'center'
  },
  v1: {
    flex: 3,
    backgroundColor: 'white',
    marginHorizontal: '4%',
    marginBottom: 10,
    marginTop: 10,
    
  },
  v2:{
    flex: 1,
    marginHorizontal: '4%',
    justifyContent: 'space-between',
  },

});
