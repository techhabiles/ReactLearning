import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Feature, FeatureData} from './FeatureType';
import FeatureItem from './FeatureItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';

type FeatureListProps = NativeStackScreenProps<RootStackParamList>;

const FeatureList = ({navigation}: FeatureListProps) => {
  const featureData: FeatureData = [
    {
      id: 1,
      name: 'UI',
      subFeatures: [
        {id: 1, name: 'Progress (Acivity Indicator)'},
        {id: 2, name: 'Buttons'},
        {id: 3, name: 'Images'},
        {id: 4, name: 'Modal Dialog'},
        {id: 5, name: 'Drawer'},
      ],
    },
    {
      id: 2,
      name: 'Hooks',
      subFeatures: [
        {id: 6, name: 'useEffect'},
        {id: 7, name: 'useState'},
      ],
    },
    {
      id: 3,
      name: 'Bridge',
      subFeatures: [{id: 9, name: 'Android Bridge'}],
    },
    {
      id: 4,
      name: 'Networking',
      subFeatures: [
        {id: 11, name: 'AXIOS'},
        {id: 12, name: 'Fetch'},
      ],
    },
    {
      id: 5,
      name: 'Redux',
      subFeatures: [{id: 13, name: 'Redux'}],
    },
  ];

  const onClick = (id: number) => {
    switch (id) {
      case 1:
        navigation.push('Progress');
        break;
      case 2:
        navigation.push('Buttons');
        break;
      case 3:
        navigation.push('ImageDemo');
        break;
      case 4:
        navigation.push('ModelDialog');
        break;
      case 5:
        navigation.push('DrawerDemo');
        break;
      case 6:
        navigation.push('UseEffect');
        break;
      case 7:
        navigation.push('UseStateHook');
        break;
      case 9:
        navigation.push('AndroidBridge');
        break;
        break;
      case 11:
        navigation.push('AxiosApi');
        break;
      case 12:
        navigation.push('FetchApi');
        break;
      case 13:
        navigation.push('NewsList');
        break;
    }
  };

  const renderFeature = ({item}: {item: Feature}) => {
    return <FeatureItem feature={item} onPress={onClick} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={1}
        data={featureData}
        renderItem={renderFeature}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default FeatureList;
