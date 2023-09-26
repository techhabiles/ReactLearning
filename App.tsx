/**
 * Demo React Native to demostrate various react features
 *
 * @author krish@techhabiles.com
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import FeatureList from './components/screens/featurelist/FeatureList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Buttons from './components/screens/buttons/Buttons';
import ImageDemo from './components/screens/images/ImageDemo';
import Progress from './components/screens/activityindicator/Progress';
import ModelDialog from './components/screens/model/ModelDialog';
import DrawerDemo from './components/screens/drawer/DrawerDemo';
import FetchApi from './components/screens/networking/FetchApi';
import AxiosApi from './components/screens/networking/AxiosApi';
import store from './components/screens/redux/store/ReduxArc';
import NewsList from './components/screens/redux/NewsList';
import NewsDetails from './components/screens/redux/NewsDetails';
import WebViewImpl from './components/screens/webview/WebViewImpl';
import UseStateHook from './components/screens/hooks/usestate/UseStateHook';
import AndroidNativeBridge from './components/screens/bridge/AndroidNativeBridge';
import UseEffect from './components/screens/hooks/usestate/UseEffect';

export type RootStackParamList = {
  FeatureList: undefined;
  Buttons: undefined;
  ImageDemo: undefined;
  Progress: undefined;
  ModelDialog: undefined;
  DrawerDemo: undefined;
  FetchApi: undefined;
  AxiosApi: undefined;
  NewsList: undefined;
  NewsDetails: undefined;
  MoreNews: undefined;
  UseStateHook: undefined;
  AndroidBridge: undefined;
  UseEffect: undefined;
};

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FeatureList">
          <Stack.Screen
            name="FeatureList"
            component={FeatureList}
            options={{title: 'Demo List'}}
          />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Buttons" component={Buttons} />
          <Stack.Screen name="ImageDemo" component={ImageDemo} />
          <Stack.Screen name="ModelDialog" component={ModelDialog} />
          <Stack.Screen name="DrawerDemo" component={DrawerDemo} />
          <Stack.Screen name="FetchApi" component={FetchApi} />
          <Stack.Screen name="AxiosApi" component={AxiosApi} />
          <Stack.Screen name="NewsList" component={NewsList} />
          <Stack.Screen name="NewsDetails" component={NewsDetails} />
          <Stack.Screen name="UseStateHook" component={UseStateHook} />
          <Stack.Screen name="AndroidBridge" component={AndroidNativeBridge} />
          <Stack.Screen
            name="MoreNews"
            component={WebViewImpl}
            options={{title: 'Full News'}}
          />
          <Stack.Screen name="UseEffect" component={UseEffect} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
