import {Button, Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.imageText}> Image From data</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
      <Text style={styles.imageText}> Image From Local file</Text>
      <Image
        style={styles.logo}
        source={require('../../../images/techhabiles.jpg')}
      />

      <Text style={styles.imageText}> Image From Network</Text>
      <Image
        style={styles.logoFromURL}
        source={{uri: 'https://picsum.photos/200'}}
      />

      <Text style={styles.imageText}>For more info tap on button below</Text>
      <View style={styles.button}>
        <Button
          color="green"
          title="More info..."
          onPress={() => {
            Linking.openURL('https://reactnative.dev/docs/image');
          }}
        />
      </View>
    </View>
  );
};

export default ImageDemo;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 20,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoFromURL: {
    padding: 8,
    width: 150,
    height: 150,
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
});
