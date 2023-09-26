import {
  ActivityIndicator,
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Progress = () => {
  return (
    <View style={[styles.container, styles.verical]}>
      <ActivityIndicator size="small" />
      <ActivityIndicator
        size="large"
        animating={true}
        hidesWhenStopped={false}
        color="red"
      />
      <ActivityIndicator size="large" color="#00ff00" />

      <View style={styles.button}>
        <Text style={styles.infoText}>For more info tap on button below</Text>
        <Button
          color="green"
          title="More info..."
          onPress={() => {
            Linking.openURL('https://reactnative.dev/docs/activityindicator');
          }}
        />
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  verical: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    width: '100%',
  },
  infoText: {
    fontSize: 20,
  },
});
