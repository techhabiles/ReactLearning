import {Alert, Button, StyleSheet, View} from 'react-native';
import React from 'react';

const Buttons = () => {
  return (
    <View>
      <View style={styles.defaultButton}>
        <Button
          title="Default Button"
          onPress={() => Alert.alert('Default button pressed')}
        />
      </View>

      <View style={styles.defaultButton}>
        <Button
          disabled
          title="Disabled Button"
          onPress={() => Alert.alert('Can not click')}
        />
      </View>

      <View style={styles.fitToText}>
        <Button
          color="#f194ff"
          title="Fit To Text"
          onPress={() => Alert.alert('Fit to text size')}
        />
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  defaultButton: {
    margin: 4,
  },
  fitToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
