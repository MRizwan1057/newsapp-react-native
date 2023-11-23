import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../config/config';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const GetNews = ({navigation, route}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.category,
    });
  }, []);

  useEffect(() => getNews(), []);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${route.params.category}&country=us&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.articles);
        setNews(res.articles);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <View style={{alignItems: 'center', backgroundColor: '#B581EA'}}>
      {news.length === 0 ? (
        <View
          style={{
            width: deviceWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            color="indigo"
            size="large"
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {news.map((news, index) =>
            news.urlToImage ? (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('WebView', {
                    url: news.url,
                  })
                }>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'purple',
                    borderRadius: 7,
                    elevation: 7,
                    width: deviceWidth - 30,
                    marginVertical: 7,
                  }}>
                  <Image
                    source={{uri: `${news.urlToImage}`}}
                    style={{height: 100, width: 100, borderRadius: 7}}
                  />
                  <Text
                    style={{
                      width: deviceWidth - 130,
                      height: 70,
                      overflow: 'hidden',
                      paddingLeft: 10,
                      paddingTop: 4,
                      color: 'wheat',
                      fontSize: 14,
                    }}>
                    {news.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null,
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default GetNews;
