import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {News} from './store/ReduxArc';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
type FeatureListProps = NativeStackScreenProps<RootStackParamList>;
const NewsDetails = ({navigation}: FeatureListProps) => {
  const currentNews: News = useSelector((state: any) => state.selectedNews);
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', padding: 4}}>
      <ScrollView>
        <Image
          style={styles.newsImage}
          source={{uri: currentNews.urlToImage}}
        />
        <Text style={styles.title}>{currentNews.title}</Text>
        <Text style={styles.desctiption}>{currentNews.description}</Text>
        <Text style={styles.content}>{currentNews.content}</Text>

        <Text style={styles.publishAt}>{currentNews.publishedAt}</Text>
        <Text style={styles.author}>By: {currentNews.author}</Text>
        <View style={styles.ai}>
          <Button
            title="Full News"
            onPress={() => navigation.push('MoreNews')}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 4,
    color: 'black',
  },
  desctiption: {
    fontSize: 16,
    margin: 8,
    color: 'black',
  },
  content: {
    fontSize: 14,
    margin: 8,
    color: 'black',
  },
  publishAt: {
    fontSize: 16,
    color: '#481f5e',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  author: {
    fontSize: 18,
    color: '#c253fd',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  newsImage: {
    height: 200,
  },
  ai: {
    margin: 20,
  },
});
