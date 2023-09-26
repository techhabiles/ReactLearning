import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Feature, SubFeature} from './FeatureType';
/**
 *  Render Feature name and list header and sub features as list item
 * @author krish@techhabiles.com
 *
 */
interface Props {
  feature: Feature;
  onPress: (id: number) => void;
}
function FeatureItem(props: any) {
  const f = props.feature;
  const onPress = props.onPress;
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{f.name}</Text>
      {f.subFeatures.map((subFeature: SubFeature) => {
        return (
          <TouchableOpacity
            key={subFeature.name}
            style={styles.subItem}
            onPress={() => onPress(subFeature.id)}>
            <Text style={styles.subItemText}>{subFeature.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 8,
    backgroundColor: 'red',
    color: 'white',
  },
  subItem: {
    padding: 8,
    marginStart: 8,
    marginTop: 4,
    backgroundColor: 'grey',
  },
  subItemText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FeatureItem;
