import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

const categs = [
  'Sports',
  'Entertainment',
  'Business',
  'Politics',
  'Health',
  'Technology',
];

const Categories = ({navigation}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginVertical: 11}}>
      {categs.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('GetNews', {category})}>
          <View>
            <Text
              style={{
                fontSize: 11,
                padding: 3,
                margin: 2,
                backgroundColor: 'purple',
                color: 'white',
                borderWidth: 1,
                borderColor: 'wheat',
                borderRadius: 4,
              }}>
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
