import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import config from '../../config/config';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const TrendingNews = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  useEffect(() => getNews(), []);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        setNews(res.articles);
        console.log(res.articles);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={{borderBottomColor: 'wheat', borderBottomWidth: 2}}>
        {news.length === 0 ? (
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
        ) : (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              style={{marginBottom: 12, backgroundColor: '#B581EA'}}>
              {news.map((news, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('WebView', {
                      url: news.url,
                    })
                  }>
                  <View
                    style={{
                      marginHorizontal: 15,
                      marginVertical: 8,
                    }}>
                    <Image
                      source={{uri: `${news.urlToImage}`}}
                      style={{
                        height: 100,
                        width: 120,
                        borderRadius: 11,
                        borderWidth: 2,
                        borderColor: 'wheat',
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        width: 118,
                        height: 77,
                        overflow: 'hidden',
                        textAlign: 'justify',
                        fontSize: 12,
                        fontWeight: '500',
                        padding: 3,
                        marginBottom: 2,
                      }}>
                      {news.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>
      <ScrollView style={{height: 355}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'indigo',
            textAlign: 'center',
            marginVertical: 11,
          }}>
          Top Headlines
        </Text>
        {news.map((news, index) => (
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
                backgroundColor: 'indigo',
                borderRadius: 10,
                borderColor: 'wheat',
                borderWidth: 1,
                elevation: 8,
                width: deviceWidth - 10,
                height: 90,
                marginVertical: 7,
              }}>
              <Image
                source={{uri: `${news.urlToImage}`}}
                style={{height: 88, width: 88, borderRadius: 8}}
              />
              <Text
                style={{
                  color: 'wheat',
                  width: deviceWidth - 130,
                  paddingLeft: 10,
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                {news.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default TrendingNews;
