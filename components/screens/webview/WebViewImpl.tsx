import {StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {News} from '../redux/store/ReduxArc';
import {useSelector} from 'react-redux';

const WebViewImpl = () => {
  const currentNews: News = useSelector((state: any) => state.selectedNews);
  return <WebView style={{flex: 1}} source={{uri: currentNews.url}} />;
};

export default WebViewImpl;

const styles = StyleSheet.create({});
