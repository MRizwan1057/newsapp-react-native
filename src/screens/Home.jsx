import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import config from '../../config/config';
import Categories from '../components/Categories';
import TrendingNews from '../components/TrendingNews';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Home = ({navigation, route}) => {
  return (
    <View style={{backgroundColor: '#B581EA'}}>
      <Categories navigation={navigation} />
      <TrendingNews navigation={navigation} />
    </View>
  );
};

export default Home;
