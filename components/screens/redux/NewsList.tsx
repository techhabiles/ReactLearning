import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {News} from './store/ReduxArc';
import axios from 'axios';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App';

type FeatureListProps = NativeStackScreenProps<RootStackParamList>;

const NewsList = ({navigation}: FeatureListProps) => {
  const dispatch = useDispatch();
  const news: News[] = useSelector((state: any) => state.news);
  const [isLoading, setLoading] = useState(true);
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    return year + '-' + month + '-' + date;
  };
  const getRandomCategory = () => {
    const categories = [
      'sports',
      'science',
      'agriculture',
      'policits',
      'space',
      'studies',
      'geology',
      'mathematics',
    ];
    const randomeIndex = Math.floor(Math.random() * 8);
    return categories[randomeIndex];
  };
  const getNews = () => {
    const URL = `https://newsapi.org/v2/everything?q=${getRandomCategory()}&from=${getCurrentDate()}&sortBy=publishedAt&apiKey=2cdcf6c95ae047c2bb52155e96dabe7b`;
    axios({
      method: 'get',
      url: URL,
    })
      .then(response => {
        setLoading(false);
        var i = 0;
        const dt = response.data.articles.filter((item: News) => {
          item.id = i;
          i += 1;
          return item.author !== null;
        });
        dispatch({type: 'news', value: dt});
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('Erro while fetching data');
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const goToNewsDetails = (item: News) => {
    dispatch({type: 'details', value: item});
    navigation.push('NewsDetails');
  };

  const renderNews = ({item}: {item: News}) => {
    return (
      <TouchableOpacity onPress={() => goToNewsDetails(item)}>
        <View style={styles.row}>
          <View style={styles.news}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>By: {item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={news}
          initialNumToRender={1}
          keyExtractor={({id}) => id.toString()}
          renderItem={renderNews}
        />
      )}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    padding: 4,
    backgroundColor: '#481f5e',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#c253fd',
  },
  news: {
    flexDirection: 'column',
  },
  title: {
    paddingStart: 8,
    color: 'white',
    fontSize: 20,
  },
  author: {
    paddingStart: 8,
    color: '#c253fd',
    fontSize: 18,
  },
});
