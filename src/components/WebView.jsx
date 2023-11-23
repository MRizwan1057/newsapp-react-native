import React from 'react';
import WebView from 'react-native-webview';
import {View, Text} from 'react-native';

const WebViewComp = ({route}) => {
  return <WebView source={{uri: `${route.params.url}`}} />;
};

export default WebViewComp;
