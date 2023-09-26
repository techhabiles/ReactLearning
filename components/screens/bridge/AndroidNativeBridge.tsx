import {
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';

const AndroidNativeBridge = () => {
  const {AndroidNativeBridge} = NativeModules;
  const handleOnPress = () => {
    if (Platform.OS === 'android') {
      console.log('Button Pressed');
      AndroidNativeBridge.openLoginScreen();
    } else {
      console.log(' This module is implemented only for Android');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleOnPress()}>
        <Text style={styles.buttonText}>Open Native Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 8,
    height: 40,
    justifyContent: 'center',
    borderColor: 'red',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
export default AndroidNativeBridge;
