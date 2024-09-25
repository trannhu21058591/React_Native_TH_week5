import React, { useState } from 'react'; // Thêm useState
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';

export default function Screen02({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('blue'); // Mặc định là màu xanh

  // Hàm chọn màu
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Hàm xử lý khi nhấn nút "Xong"
  const handleDonePress = () => {
    navigation.navigate('Screen01', { color: selectedColor }); // Gửi dữ liệu màu về Screen01
  };

  // Dữ liệu giá và nhà cung cấp (thay đổi theo màu)
  const productInfo = {
    blue: {mau: 'Xanh', price: '1.179.000 đ', provider: 'Tiki Trading' },
    red: {mau: 'Đỏ', price: '1.179.000 đ', provider: 'Tiki Trading' },
    black: {mau: 'Đen', price: '1.179.000 đ', provider: 'Tiki Trading' },
    silver: {mau: 'Bạc', price: '1.179.000 đ', provider: 'Tiki Trading' },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <View>
          {/* Hiển thị ảnh theo màu được chọn */}
          <Image
            style={styles.img}
            source={
              selectedColor === 'red'
                ? require('./vs_red.png')
                : selectedColor === 'black'
                ? require('./vs_black.png')
                : selectedColor === 'silver'
                ? require('./vs_silver.png')
                : require('./vs_blue.png') // Mặc định là màu xanh
            }
          />
        </View>
        <View style={styles.mota}>
          <Text>Hàng chính hãng Điện {'\n'}Thoại Vsmart Joy 3</Text>
          
          
          {selectedColor && (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Màu: <Text style={styles.txtbold}>{productInfo[selectedColor].mau}</Text></Text>
              <Text style={styles.infoText}>Cung cấp bởi <Text style={styles.txtbold}>{productInfo[selectedColor].provider}</Text></Text>
              <Text style={styles.infoText}><Text style={styles.txtbold}>{productInfo[selectedColor].price}</Text></Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.v2}>
        <View>
          <Text style={styles.txtchon}>Chọn một màu bên dưới:</Text>
        </View>
        <View style={styles.mau}>
          {/* Các nút chọn màu */}
          <TouchableOpacity style={styles.silver} onPress={() => handleColorSelect('silver')} />
          <TouchableOpacity style={styles.red} onPress={() => handleColorSelect('red')} />
          <TouchableOpacity style={styles.black} onPress={() => handleColorSelect('black')} />
          <TouchableOpacity style={styles.blue} onPress={() => handleColorSelect('blue')} />
        </View>

        <TouchableOpacity style={styles.xong} onPress={handleDonePress}>
          <View style={styles.vxong}>
            <Text style={styles.txtXong}>Xong</Text>
          </View>
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
  txtbold:{
    fontWeight: 'bold',
  },

  infoContainer: {
    marginTop: 0,
  },
  infoText: {
    fontSize: 16,
  },
  mota: {
    marginLeft: 10,
  },
  img: {
    height: 115,
    width: 95,
  },
  txtXong: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vxong: {
    backgroundColor: '#1952E294',
    height: 44,
    width: 326,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CA1536',
    borderRadius: 5,
  },
  xong: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtchon: {
    marginLeft: 10,
  },
  blue: {
    height: 80,
    width: 80,
    backgroundColor: '#234896',
    marginTop: '2%',
  },
  black: {
    height: 80,
    width: 80,
    backgroundColor: '#000000',
    marginTop: '2%',
  },
  red: {
    height: 80,
    width: 80,
    backgroundColor: '#F30D0D',
    marginTop: '2%',
  },
  silver: {
    height: 80,
    width: 80,
    backgroundColor: '#C5F1FB',
  },
  mau: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  v2: {
    flex: 7,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-around',
  },
  v1: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
  },

});
